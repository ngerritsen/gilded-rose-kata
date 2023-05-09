import { Item } from "../types";

export const MAX_QUALITY = 50;
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export const BACKSTAGE_PASSES_PREFIX = "Backstage passes ";
export const CONJURED_PREFIX = "Conjured ";
export const AGED_BRIE = "Aged Brie";

export function updateItems(items: Item[]) {
  return items.map(updateItem);
}

function updateItem(item: Item) {
  if (item.name === SULFURAS) {
    return item;
  }

  return {
    ...item,
    sellIn: item.sellIn - 1,
    quality: capQuality(getItemQuality(item)),
  };
}

function getItemQuality(item: Item) {
  if (item.name === AGED_BRIE) {
    return item.quality + 1;
  }

  if (item.name.startsWith(CONJURED_PREFIX)) {
    return item.quality - 2;
  }

  if (item.name.startsWith(BACKSTAGE_PASSES_PREFIX)) {
    return getBackstagePassQuality(item);
  }

  return item.quality - 1;
}

function getBackstagePassQuality(item: Item) {
  if (item.sellIn > 11) {
    return item.quality + 1;
  }

  if (item.sellIn > 6) {
    return item.quality + 2;
  }

  if (item.sellIn > 0) {
    return item.quality + 3;
  }

  return 0;
}

function capQuality(quality: number) {
  return Math.min(MAX_QUALITY, Math.max(0, quality));
}
