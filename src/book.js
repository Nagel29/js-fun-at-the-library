function createTitle(title) {
  return `The ${title}`
}

// the resulting value of buildMainCharacter is the OBJECT of newCharacter,
// which contains the values of the arguments passed through (name, age, pronouns)
function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return newCharacter;
}

// includes() checks to see if the review is already included in the reviewArray
function saveReview(review, reviewArray) {
  if (reviewArray.includes(review)) {
    return reviewArray
  } else {
    reviewArray.push(review);
  }
}

// book.length counts the characters in the title that is passed through as an argument,
// through the 'book' parameter
function calculatePageCount(book) {
  var bookPageCount = book.length * 20;
  return bookPageCount;
}


function writeBook(title, character, genre) {
  var newBook = {
    title: title,
    mainCharacter: character,
    pageCount: title.length * 20,
    genre: genre,
  }
  return newBook;
}

// the test passes through the object that results from the writeBook function.
// in other words, book === newBook from the above function. Therefore,
// we can use book.pageCount, which is a key/property from that object.
function editBook(book) {
  book.pageCount *= .75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
