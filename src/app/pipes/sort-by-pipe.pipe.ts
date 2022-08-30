import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortByPipe'
})
export class SortByPipePipe implements PipeTransform {

  transform(items: any[], order: 'asc'| 'desc'| '', column: string = ''): any[] {
    if (!items || order === '' || !order) { return items; } // no array
    if (items.length <= 1) { return items; } // array with only one item
    if (!column || column === '') {
      if(order==='asc'){return items.sort()}
      else{return items.sort().reverse();}
    } // sort 1d array
    else{
return items.sort((a, b)=>{
        let fa = a[column].toLowerCase();
      let fb = b[column].toLowerCase();

      if(fa< fb) return -1;
      if(fa> fb) return 1;
       return 0;
      })
    }

  }

}
