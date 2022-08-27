function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return newCharacter;
}

function saveReview(review, reviewArray) {
  if (reviewArray.includes(review)) {
    return reviewArray
  } else {
    reviewArray.push(review);
  }
}

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
