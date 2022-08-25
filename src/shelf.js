function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }

}

function listTitles(shelf) {
  var titleList = [];
  for (var i = 0; i < shelf.length; i++) {
    titleList.push(shelf[i].title);
  }
  return titleList.join(", ")
}

function searchShelf(shelf, titleSearched) {
  for (var i = 0; i < shelf.length; i++) {
    if (titleSearched === shelf[i].title) {
      return true;
    }
  }
  return false;
}


module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};
