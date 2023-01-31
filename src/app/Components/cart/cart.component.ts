import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  bookDetail: any = [];
  
  constructor( private bookService : BookService){}

  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
      this.bookDetail = response.data.books,

      console.log(this.bookDetail)
    })
  }

  addBook(_id:any){
    let data={
      _id:_id
    }
    this.bookService.addToCart(data).subscribe((response)=>{
      console.log(response)
      this.getCart()
    })
  }

  removeBook(id:any){
    let data={
      _id:id
    }
    this.bookService.removeBook(data).subscribe((response)=>{
      console.log(response)
      this.getCart()
    })
  }
}