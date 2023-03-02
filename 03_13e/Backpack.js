class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Backpack;

class Books{
  constructor(title,pages,priceIN,priceBD,publishDate,author,available){
    this.title = title;
    this.pages = pages;
    this.price = {
      india : 120,
      bangladesh : 135,
    }
    this.publishDate = publishDate;
    this.author = author;
    this.available = available;
  }
  isAvailable(availStatus){
    this.available = availStatus;
  }
  isPriceChange(inr,bdt){
    this.price.india = inr;
    this.price.bangladesh = bdt;
  }
}

export default Books;