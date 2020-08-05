import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { DetailGuardGuard } from './detail-guard.guard';
import { HighlightDirective } from './highlight.directive';
import { MultiplierPipe } from './multiplier.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHTTPInterceptor } from './services/http.interceptor';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'customer-list',
    loadChildren: () => import('./customer-list/customer-list.module').then(m => m.CustomerListModule),
  },
  {
    path: 'customer-details',
    loadChildren: () => import('./customer-details/customer-details.module').then(m => m.CustomerDetailsModule),
    canActivate: [DetailGuardGuard],
  },
  { path: '', redirectTo: 'customer-list', pathMatch: 'full'},
  { path: '**', redirectTo: 'customer-list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    HighlightDirective,
    MultiplierPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHTTPInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
