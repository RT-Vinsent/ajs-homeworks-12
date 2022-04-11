/* eslint-disable no-console */
import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

console.log(cart.items);

console.log(`Суммарная стоимость товаров в корзине ${cart.sum()}`);
console.log(`Суммарная стоимость товаров в корзине со скидкой 10% ${cart.sumDiscount(10)}`);
console.log(`Суммарная стоимость товаров в корзине со скидкой 0% ${cart.sumDiscount(0)}`);
// console.log(`Суммарная стоимость товаров в корзине со скидкой 110% ${cart.sumDiscount(110)}`);
// console.log(`Суммарная стоимость товаров в корзине со скидкой -50% ${cart.sumDiscount(-50)}`);

cart.del(1008);
console.log('Удаления товара с id 1008');
console.log(cart.items);

cart.del(1001);
console.log('Удаления товара с id 1001');
console.log(cart.items);

console.log('Добавляем в корзину фильм');
cart.add(new Movie(
  1022, 
  'Мстители',
  'The Avengers',
  2012,
  'США',
  '«Avengers Assemble!»',
  'фантастика, боевик, фэнтези, приключения',
  137,
  3030,
));
console.log(cart.items);