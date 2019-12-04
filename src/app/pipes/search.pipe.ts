import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if(!items){
      return null;
    }
    if(!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      let name = JSON.stringify(item.name).toLowerCase().includes(searchText);
      return name
    });
  }

}
