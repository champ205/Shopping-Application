import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  leftBookShelf = [
    {id : 1, status : 'Available', imagePath : 'https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L._SX354_BO1,204,203,200_.jpg', name : 'Let Us C', author : 'Yashvant P Kanetkar'},
    {id : 2, status : 'Available', imagePath : 'https://images-na.ssl-images-amazon.com/images/I/41OHbU-hThL._SX258_BO1,204,203,200_.jpg', name : 'Beginning React', author : 'Greg Lim'}
  ];

  middleBookShelf = [
    {id : 3, status : 'Available', imagePath : 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/0/b06169_cover.png', name : 'Learning Angular', author : 'Christoffer Noring'},
    {id : 4, status : 'Available', imagePath : 'https://kbimages1-a.akamaihd.net/a1fa146b-b970-4321-be28-e56da7ec3857/353/569/90/False/node-js-for-net-developers-2.jpg', name : 'Node.js', author : 'David Gaynes'}
  ];

  rightBookShelf = [
    {id : 5, status : 'Available', imagePath : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1455925344l/29227081._SY475_.jpg', name : 'Java', author : 'James Patterson'},
    {id : 6, status : 'Available', imagePath : 'https://images-na.ssl-images-amazon.com/images/I/41W89dBiQQL._SX329_BO1,204,203,200_.jpg', name : 'Bootstrap 3.3', author : 'Kevin Lyn'}
  ];

  constructor() { }

  getLeftBookShelf()
  {
    return this.leftBookShelf;
  }
  getMiddleBookShelf()
  {
    return this.middleBookShelf;
  }
  getRightBookShelf()
  {
    return this.rightBookShelf;
  }
}

