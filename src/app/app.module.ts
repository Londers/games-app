import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { GameComponent } from './game/game.component';
import { GamesListComponent } from './games-list/games-list.component';
import { MerchantSelectComponent } from './merchant-select/merchant-select.component';
import { PageComponent } from './page/page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectComponent,
    GameComponent,
    GamesListComponent,
    MerchantSelectComponent,
    PageComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
