import { useState } from "react";
import { updateItems } from "../utils/gildedRose";
import { Item } from "../types";
import initialItems from "../initialItems";

export default function useItems() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [history, setHistory] = useState<Item[][]>([]);

  const onNext = () => {
    const nextItems = updateItems(items);

    setItems(nextItems);
    setHistory([...history, items]);
  };

  const onBack = () => {
    const lastIndex = history.length - 1;
    const previousItems = history[lastIndex];

    setItems(previousItems);
    setHistory(history.filter((_, i) => i !== lastIndex));
  };

  const hasHistory = history.length > 0;

  return {
    hasHistory,
    onBack,
    onNext,
    items,
  };
}
