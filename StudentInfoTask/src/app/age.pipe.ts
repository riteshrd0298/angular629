import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthDate: any, ...args: any[]): any {
   const currentYear =new Date().getFullYear();
   const birthYear=new Date(birthDate).getFullYear();
   const age=currentYear-birthYear;
    return age;
  }

}