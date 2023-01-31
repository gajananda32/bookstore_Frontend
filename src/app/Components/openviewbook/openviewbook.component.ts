import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-openviewbook',
  templateUrl: './openviewbook.component.html',
  styleUrls: ['./openviewbook.component.scss']
})
export class OpenviewbookComponent implements OnInit{
bookDetails:any
bookId:any;
constructor(private dataservice:DataService,private bookservice:BookService){}
  ngOnInit(): void {
    this.dataservice.openbook.subscribe((result:any)=>{
     // console.log("response**********",result)
      this.bookDetails=result
      this.bookId=this.bookDetails._id
     // console.log(this.bookId)
      console.log('open book',this.bookDetails._id)
    })
  }
  addInCart(){
    let data={
      _id:this.bookId
    }
    console.log(data)
    this.bookservice.addToCart(data).subscribe((response:any)=>{
      console.log(response)
    })
  }

  addInWishlist(){
    let data={
      _id:this.bookId
    }
    this.bookservice.addToWishlist(data).subscribe((response:any)=>{
      console.log(response)  
    })
  }
}
