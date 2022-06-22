const LibraryRental = require("./LibraryRental");

class Newspaper extends LibraryRental {
  checkIn() {
    throw new Error("newspapers are not available for loan");
  }
  checkOut() {
    throw new Error("newspapers are not available for loan");
  }
}

module.exports = Newspaper;
