import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormPageComponent } from './contact-form-page/contact-form-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchContactsPipe } from './search-contacts.pipe';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ContactDialogComponent,
    ContactFormComponent,
    ContactFormPageComponent,
    HomePageComponent,
    TopBarComponent,
    SearchContactsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
