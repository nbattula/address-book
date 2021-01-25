import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContacts'
})
export class SearchContactsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
