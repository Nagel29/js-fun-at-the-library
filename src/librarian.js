class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron, isMorning) {
    if (isMorning) {
      return `Good morning, ${patron}!`
    } else {
      return `Hello, ${patron}!`
    }
  }

  findBook(book) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (this.library.shelves.fantasy[i].title == book) {
        this.library.shelves.fantasy.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
    for (var i = 0; i < this.library.shelves.fiction.length; i++) {
      if (this.library.shelves.fiction[i].title == book) {
        this.library.shelves.fiction.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
    for (var i = 0; i < this.library.shelves.nonFiction.length; i++) {
      if (this.library.shelves.nonFiction[i].title == book) {
        this.library.shelves.fiction.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
    return `Sorry, we do not have ${book}`;
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}

// console.log(this.library.shelves.fantasy[0].title);


module.exports = Librarian;


// for (let i in this.library.shelves) {
  // console.log(i, this.library.shelves[i]);
