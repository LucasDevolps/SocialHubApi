import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component'; // Importação do componente standalone
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), 
    FormsModule,
    HttpClientModule,
    FeedComponent, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
