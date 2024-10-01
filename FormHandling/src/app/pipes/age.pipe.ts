import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {

    if(value===null){
      return 0;
    }
    const currentYear=new Date().getFullYear();
    const myAgeYear=new Date(value).getFullYear();

    const age=currentYear-myAgeYear;

    if(isNaN(age)){
      return 0;
    }

    return age;
  }

}
