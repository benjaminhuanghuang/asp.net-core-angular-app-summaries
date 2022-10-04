
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


## Router
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