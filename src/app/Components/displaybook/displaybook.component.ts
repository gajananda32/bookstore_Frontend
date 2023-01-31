import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {
  bookList:any
  noOfBooks!: number;
  bookName:any;
  author:any
  price:any;
  discountPrice:any;
  quantity:any
  constructor(private bookService:BookService, private dataService:DataService,private router:Router){}
  ngOnInit(): void {
   this. getAllBook();
  }
  getAllBook(){
    this.bookService.getBooks().subscribe((response:any)=>{
      console.log(response);
      this.bookList=response.data
      this.noOfBooks=this.bookList.length
      console.log(this.bookList)
    })
  }
  openBookDetails(book:any){
    console.log(book);
    this.dataService.sharedData(book)
    this.router.navigate(['/dashboard/openbook'])
  }
}
