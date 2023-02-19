import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, input: string): any {
    if(input){
      return value.filter((val: { cat_nombre: string; }) => val.cat_nombre.toLocaleLowerCase() == input.toLocaleLowerCase());
    }else{
      return value;
    }
  }

}
