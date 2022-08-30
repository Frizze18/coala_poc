import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FetchApiService } from './services/fetch-api.service';
import { SortByPipePipe } from './pipes/sort-by-pipe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ApiDetailmodalComponent } from './modals/api-detailmodal/api-detailmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    SortByPipePipe,
    ApiDetailmodalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FetchApiService, SortByPipePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
