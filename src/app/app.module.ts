import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { UserService } from './table.service';
@NgModule({
  declarations: [AppComponent, SimpleTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
