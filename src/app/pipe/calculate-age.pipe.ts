import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "calculateAge"
})

export class CalculateAgePipe implements PipeTransform {

  transform(value: string|number, args: string): any {
    let startDate:number   = Date.parse(new Date(value).toDateString());
    let endDate :number    = Date.parse(new Date().toDateString());

    return Math.floor((((endDate-startDate) / 86400000) + 1) / 365);
  }

}

