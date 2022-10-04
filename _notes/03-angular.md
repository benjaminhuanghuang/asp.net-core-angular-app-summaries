
## create component
```
    cd src/app/components/
   
    ng g c books -m app
    ng g c delete-book -m app
    ng g c new-book -m app
    ng g c show-book -m app
    ng g c update-book -m app
```

## Create services
```
    cd src/app/services/
   
    ng g s book
```
Add service to providers array


## Router and nav
```
RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'books', component: BooksComponent},
    { path: 'new-book', component: NewBookComponent},
    { path: 'update-book/:id', component: UpdateBookComponent},
    { path: 'delete-book/:id', component: DeleteBookComponent},
    { path: 'show-book/:id', component: ShowBookComponent}
])
```

```
    <li class="nav-item" [routerLinkActive]="['link-active']" [routerLinkActiveOptions]="{ exact: true }">
        <a class="nav-link text-dark" [routerLink]="['/new-book']">Add</a>
    </li>
    <li class="nav-item" [routerLinkActive]="['link-active']">
        <a class="nav-link text-dark" [routerLink]="['/books']">Books</a>
    </li>
```

## Update home.component.html



## books page
Create Book interface

Load data
- create method in Angular Service

- Inject service in component
```
   constructor(private service: BookService) { }
```

- Call method from Angular service
```
getAllBooks(){
    return this.http.get<Book[]>(this._baseURL+"/GetBooks");
  }
```

## new-book page
