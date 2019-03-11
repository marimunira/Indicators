import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { environment } from '../../environments/environment';

import { Indicator } from '../models/indicator';
import { CalculatedIndicator } from '../models/calculated-indicator';
import { COUNT_INDICATORS } from '../other/constants';

import 'rxjs/add/operator/map';

@Injectable()
export class IndicatorService {
  constructor(private http: HttpClient) { }


  private hasBadValues(item: Indicator): boolean {
    //console.log(item);
    if ((item.minvalue >= 0) && (item.value >= 0)
      && (item.minvalue <= item.maxvalue) && (item.maxvalue >= 0))
      return true;
    else
      throw new Error('Bad data from ' + item.title);
  }

  private getPercentage(item: Indicator): number {
    if ((item.maxvalue >= item.value) && (item.value >= item.minvalue))
      return (item.value - item.minvalue) / (item.maxvalue - item.minvalue);
    else if (item.maxvalue < item.value)
      return 1;
    else
      return 0;
  }

  public getIndicators(): Observable<CalculatedIndicator[]> {
    return this.http.get<Indicator[]>(environment.api_url + '\indicators', { observe: 'response' })
      .map(res => res.body
        .slice(0, COUNT_INDICATORS)
        .filter((item) => this.hasBadValues(item))
        .map((item) => ({
          value: item.value,
          title: item.title,
          percentage: this.getPercentage(item)
        })));

  }
}