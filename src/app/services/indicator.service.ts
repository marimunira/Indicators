import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { from,of, forkJoin } from 'rxjs';

import { filter, mergeMap, mergeAll } from 'rxjs/operators';

import { Indicator } from '../models/indicator';

@Injectable()
export class IndicatorService {
  constructor(private http: HttpClient) { }
 configUrl = 'http://localhost:3000/indicators'; /*TODO передавать limit */
 COUNT_TOWERS = 8;

 hasBadValues(item) {
   //console.log(item);
   if ((item.minvalue >= 0) && (item.value >= 0) 
   && (item.minvalue <= item.maxvalue) && (item.maxvalue >=0))
    return true;
    else 
      throw new Error('Bad data from ' + item.title);
 }

 getPercentage(item) {
   if ((item.maxvalue >= item.value) && (item.value >= item.minvalue))
      return (item.value - item.minvalue)/(item.maxvalue - item.minvalue);
    else if (item.maxvalue < item.value)
        return 1;
    else 
        return 0;
 }

  getIndicators() {
      return this.http.get<Indicator[]>(this.configUrl, { observe: 'response' })
            .map(res => res.body
                          .slice(0, this.COUNT_TOWERS)
                          .filter((item) => this.hasBadValues(item))
                          .map((item) => ({ value: item.value,
                                            title: item.title,
                                           percentage: this.getPercentage(item)})));
            
  }
}