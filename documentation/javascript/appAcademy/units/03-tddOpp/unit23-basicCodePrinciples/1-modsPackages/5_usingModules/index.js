const classes = require("./classes")

const Book = classes.Book;
const Movie = classes.Movie;

const Rhetoric = new Book (
    "Rhetoric",
    null,
    "Aristotle"
)
const aNewHope = new Movie (
    "A New Hope",
    "Star Wars",
    "George Lucas"
)

console.log(Rhetoric.getInfo())
console.log(aNewHope.getInfo())
