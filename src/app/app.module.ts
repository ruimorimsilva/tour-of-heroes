import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    /* HeroesComponent --inicialmente HeroesComponent estava aqui, dava erro e a pagina nao corrria, nao sei se isto e adequado mas aparentemente resolveu o problema */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesComponent, /* adicionei aqui o HeroesComponent */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
