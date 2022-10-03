

## Create data modules
mkdir /Data/Models


## Create services
mkdir /Data/Services


config services
```
    builder.Services.AddTransient<IBookService, BookService>();
```



## Create API endpoints / controller
Controller/BooksController.cs


## Test
```
https://localhost:7204/api/Books/GetBooks


https://localhost:7204/api/Books/SingleBook/1


https://localhost:7204/api/Books/UpdateBook/1 
    Header: Content-Type application/json
    Body : {}

https://localhost:7204/api/Books/DeleteBook/1
 ```

