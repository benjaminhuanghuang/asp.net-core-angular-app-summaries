import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[];

  constructor(private service: BookService, private router: Router) {
    this.books = [];
  }

  ngOnInit() {
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
    })
  }


  showBook(id: number){
    this.router.navigate(["/show-book/"+id]);
  }

  updateBook(id: number){
    this.router.navigate(["/update-book/"+id]);
  }

  deleteBook(id: number){
    this.router.navigate(["/delete-book/"+id]);
  }
}
