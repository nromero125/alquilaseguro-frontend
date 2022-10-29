import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: number,): string {
    switch (status) {
      case 1:
        return 'ACTIVA' ;
        break;
      case 2:
        return 'NUEVA' ;
        break;
      case 3:
        return 'EN PROGRESO' ;
        break;
      case 4:
        return 'COMPLETADA' ;
        break;
      default:
        return ''
    }
  }

}
