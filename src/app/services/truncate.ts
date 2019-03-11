import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, ellipsis = '...') {
    if (value.length > limit)
        return value.substr(0, limit) + ellipsis;
    else return value.substr(0, limit);
  }
}