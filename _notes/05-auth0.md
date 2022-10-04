
Create application > Single page web application > 


Install dependencies
```
    cd ClientApp
    npm i @auth0/auth0-spa-js
```


## Create auth.service.ts
``` 
    ng g s auth
```

## Use service
```
  providers: [...,  AuthService],
```

## Login/Logout
```
<li *ngIf="!auth.loggedIn" class="nav-item" [routerLinkActive]="['link-active']">
    <a class="nav-link text-dark" (click)="auth.login()"
        >Log In</a
    >
</li>
<li *ngIf="auth.loggedIn" class="nav-item" [routerLinkActive]="['link-active']">
    <a class="nav-link text-dark" (click)="auth.logout()"
        >Log out</a
    >
</li>
```

```
    constructor(private auth: AuthService){}

    ngOnInit(){
        this.auth.handleAuthCallback();
    }
```


## Auth guard
```
    ng g guard auth
```

guard the url
```
RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BooksComponent, canActivate: [AuthGuard]},
      { path: 'new-book', component: NewBookComponent, canActivate: [AuthGuard]},
      { path: 'update-book/:id', component: UpdateBookComponent, canActivate: [AuthGuard]},
      { path: 'delete-book/:id', component: DeleteBookComponent, canActivate: [AuthGuard]},
      { path: 'show-book/:id', component: ShowBookComponent, canActivate: [AuthGuard]}
    ]),
```