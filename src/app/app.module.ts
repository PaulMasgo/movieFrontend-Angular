import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCreateComponent } from './pages/movie/movie-create/movie-create.component';
import { MovieUpdateComponent } from './pages/movie/movie-update/movie-update.component';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardMovieComponent } from './shared/card-movie/card-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MovieCreateComponent,
    MovieUpdateComponent,
    MovieListComponent,
    HeaderComponent,
    FooterComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
