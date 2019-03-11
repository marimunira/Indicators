import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemTowerService } from '../api/db.service';

import { AppComponent } from './app.component';
import { TowerComponent } from './tower/tower.component';
import { ProgressBarComponent } from './tower/progress-bar/progress-bar.component';

import { IndicatorService} from './services/indicator.service';
import { TruncatePipe} from './services/truncate';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    TowerComponent,
    ProgressBarComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTowerService, { delay: 0 }),
  ],
  providers: [IndicatorService, {
    provide: LOCALE_ID,
    useValue: "ru"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
