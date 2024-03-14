export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  public updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrie(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePass(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          // No changes for "Sulfuras, Hand of Ragnaros" as it never alters
          break;
        default:
          this.updateOtherItems(item);
      }
    });

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality += 1;
      if (item.sellIn < 1 && item.quality < 50) item.quality += 1;
    }
    item.sellIn -= 1;
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality += 1;
      if (item.sellIn < 11 && item.quality < 50) item.quality += 1;
      if (item.sellIn < 6 && item.quality < 50) item.quality += 1;
    }
    if (item.sellIn < 1) item.quality = 0;
    item.sellIn -= 1;
  }

  private updateOtherItems(item: Item) {
    if (item.quality > 0) {
      item.quality -= 1;
      if (item.sellIn < 1 && item.quality > 0) item.quality -= 1;
    }
    item.sellIn -= 1;
  }
}
