class Book {
 constructor(title, series, author){
  this.title = title;
  this.series = series;
  this.author = author;
  Book.numBooks += 1
 }
 static numBooks = 0;
}
const fellowshipOfTheRings = new Book (
 'Fellowship of the Rings',
 'Lord of the Rings',
 "J.R.R. Token");
const theTwoTowers = new Book (
 'The Two Towers',
 'Lord of the Rings',
 "J.R.R. Token");

console.log(Book.numBooks)