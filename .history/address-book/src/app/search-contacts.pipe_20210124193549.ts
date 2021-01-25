import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContacts'
})
export class SearchContactsPipe implements PipeTransform {

  transform(contacts: any[], keyword: string): any {
    if (Array.isArray(contacts) && typeof keyword === 'string') {
      return contacts.filter(c => {
        return Object.keys(c).some(key => {
          if (typeof c[key] === 'string') {
            return c[key].toLowerCase().includes(keyword.toLowerCase());
          }
          return false;
        })
      })
    }
    return contacts;
  }

}
