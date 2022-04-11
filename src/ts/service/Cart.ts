import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  // Функция, считающая суммарную стоимость (без учёта скидки)
  sum(): number {
    if (this._items.length > 0) {
      return this.items.reduce((a, b) => a + b.price, 0);
    }
    return 0;
  }

  // Функция, считающая суммарную стоимость (с учётом скидки) 
  sumDiscount(discount: number): number {
    try {
      if (discount < 0) {
        throw new Error('Скидка не может быть меньше 0%');
      }
      if (discount > 100) {
        throw new Error('Скидка не может быть больше 100%');
      }

      const sum: number = this.sum();
      return sum - sum / 100 * discount;
    } catch (err) {
      throw err;
    }
  }

  // Функция, позволяющая удалять уже добавленный в корзину объект по полю id
  del(id: number): void {
    try {
      const index = this._items.findIndex((value: { id: number; }) => value.id === id);

      if (index === -1) {
        throw new Error(`Товар c id = ${id} не найден`);
      }

      this._items.splice(index,1);
    } catch (err) {
      throw err;
    }
  }
}
