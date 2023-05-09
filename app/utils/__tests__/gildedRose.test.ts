import {
  updateItems,
  AGED_BRIE,
  BACKSTAGE_PASSES_PREFIX,
  CONJURED_PREFIX,
  MAX_QUALITY,
  SULFURAS,
} from "../GildedRose";
import { Item } from "../types";

describe("Random items", () => {
  test("Reduces quality and sell in of any item", () => {
    const items = updateItems([{ name: "Random item", sellIn: 0, quality: 5 }]);

    expect(items[0].name).toBe("Random item");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(4);
  });

  test("Cannot reduce quality to below 0", () => {
    const items = updateItems([{ name: "Random item", sellIn: 0, quality: 0 }]);

    expect(items[0].quality).toBe(0);
  });
});

describe("Aged Brie", () => {
  test("Quality will increase as it ages", () => {
    const items = updateItems([{ name: AGED_BRIE, sellIn: 12, quality: 2 }]);

    expect(items[0].quality).toBe(3);
  });
});

describe("Conjured items", () => {
  test("Quality will decrease twice as fast as it ages", () => {
    const items = updateItems([
      { name: CONJURED_PREFIX + " health flask", sellIn: 12, quality: 3 },
    ]);

    expect(items[0].quality).toBe(1);
  });

  test("Cannot reduce quality to below 0", () => {
    const items = updateItems([
      { name: CONJURED_PREFIX + "mana pool", sellIn: 0, quality: 1 },
    ]);

    expect(items[0].quality).toBe(0);
  });
});

describe("Sulfuras", () => {
  test("Never changes", () => {
    const items = updateItems([{ name: SULFURAS, sellIn: 12, quality: 80 }]);

    expect(items[0].quality).toBe(80);
  });
});

describe("Backstage passes", () => {
  const BACKSTAGE_PASSES =
    BACKSTAGE_PASSES_PREFIX + "for Devil Wears Prada concert";

  test("Increases the quality by 1 with more than 10 days left ", () => {
    const items = updateItems([
      { name: BACKSTAGE_PASSES, sellIn: 12, quality: 2 },
    ]);

    expect(items[0].quality).toBe(3);
  });

  test("Increases the quality by 2 with 6 to 10 days left ", () => {
    const items = updateItems([
      { name: BACKSTAGE_PASSES, sellIn: 7, quality: 2 },
      { name: BACKSTAGE_PASSES, sellIn: 11, quality: 2 },
    ]);

    expect(items[0].quality).toBe(4);
    expect(items[1].quality).toBe(4);
  });

  test("Increases the quality by 3 with 0 to 5 days left ", () => {
    const items = updateItems([
      { name: BACKSTAGE_PASSES, sellIn: 1, quality: 2 },
      { name: BACKSTAGE_PASSES, sellIn: 6, quality: 2 },
    ]);

    expect(items[0].quality).toBe(5);
    expect(items[1].quality).toBe(5);
  });

  test("Resets quality to zero when the concert ended", () => {
    const items = updateItems([
      { name: BACKSTAGE_PASSES, sellIn: 0, quality: 4 },
    ]);

    expect(items[0].quality).toBe(0);
  });

  test("Cannot increase quality above maximum", () => {
    const items = updateItems([
      { name: BACKSTAGE_PASSES, sellIn: 12, quality: MAX_QUALITY },
    ]);

    expect(items[0].quality).toBe(MAX_QUALITY);
  });
});
