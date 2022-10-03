

## Create data modules
mkdir /Data/Models


## Create services
mkdir /Data/Services


config services
```
    builder.Services.AddTransient<IBookService, BookService>();
```



## Create API endpoint / controller
Controller/BooksController.cs
