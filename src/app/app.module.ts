import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SkeleteonLoaderComponent } from './skeleteon-loader/skeleteon-loader.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserDetailsComponent,
    MainPageComponent,
    SkeleteonLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
