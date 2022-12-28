import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksComponent } from './marks/marks.component';
import { FormsModule } from '@angular/forms';
import { DisplaymarksComponent } from './displaymarks/displaymarks.component';

@NgModule({
  declarations: [
    AppComponent,
    MarksComponent,
    DisplaymarksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
