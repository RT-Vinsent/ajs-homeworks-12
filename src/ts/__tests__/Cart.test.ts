import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const bookObj = {
  id: 1001,
  name: 'War and Piece',
  author: 'Leo Tolstoy',
  price: 2000,
  pages: 1225
};

const musicAlbumObj = {
  id: 1008,
  name: 'Meteora',
  author: 'Linkin Park',
  price: 900
};
const movieObj = {
  id: 1022,
  name: 'Мстители',
  originalName: 'The Avengers',
  year: 2012,
  country: 'США',
  taglines: '«Avengers Assemble!»',
  genres: 'фантастика, боевик, фэнтези, приключения',
  time: 137,
  price: 3030,
};

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(
  1022, 
  'Мстители',
  'The Avengers',
  2012,
  'США',
  '«Avengers Assemble!»',
  'фантастика, боевик, фэнтези, приключения',
  137,
  3030,
);

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart add Book and MusicAlbum', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.items).toEqual([bookObj, musicAlbumObj, movieObj]);
});

test('cart sum', () => {
  const cartOne = new Cart();
  const cartTwo = new Cart();
  cartTwo.add(book);
  cartTwo.add(musicAlbum);

  expect(cartOne.sum()).toEqual(0);
  expect(cartTwo.sum()).toEqual(2900);
});

test('cart sumDiscount', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(musicAlbum);

  expect(cart.sumDiscount(10)).toEqual(2610);
});

test('cart sumDiscount error', () => {
  const cart = new Cart();

  expect(() => cart.sumDiscount(-10)).toThrow('Скидка не может быть меньше 0%');
  expect(() => cart.sumDiscount(110)).toThrow('Скидка не может быть больше 100%');
});

test('cart delete', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(musicAlbum);
  cart.del(1008);

  expect(cart.items).toEqual([bookObj]);
});

test('cart delete error', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(musicAlbum);

  expect(() => cart.del(1011)).toThrow(`Товар c id = 1011 не найден`);
});
