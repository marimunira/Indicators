import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemTowerService } from '../api/db.service';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { ProgressBarComponent } from './indicator/progress-bar/progress-bar.component';

import { IndicatorService} from './services/indicator.service';
import { TruncatePipe} from './other/truncate.pipe';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
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
