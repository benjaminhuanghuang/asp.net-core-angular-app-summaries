Install
```
    cd ClientApp
    npm i @ngrx/core @ngrx/effects @ngrx/store
```

## app.module.ts
```
    StoreModule.forRoot({applicationState: BookReducer}),
    EffectsModule.forRoot([BookEffects])
```

## BooksComponent
```
    public books$: Observable<any>;

    this.store.dispatch(new bookActions.loadBooksAction());
    this.books$.subscribe((state: AppState) => this.books = state.books);
```

## Delete
```
 deleteBook(id: number){
    this.store.dispatch(new bookActions.deleteBookAction(id));
    // this.service.deleteBook(id).subscribe(data => {
    //   this.router.navigate(["/books"]);
    // })
  }
```