import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerListComponent } from './components/items-banner-list/items-banner-list.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TabViewModule } from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerListComponent,
    ItemComponent,
    MovieDetailsComponent,
    VideoEmbedComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, PaginatorModule, TabViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
