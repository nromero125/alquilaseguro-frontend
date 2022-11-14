import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: number,): string {
    switch (status) {
      case 1:
        return 'Rechazada' ;
        break;
      case 2:
        return 'Nueva' ;
        break;
      case 3:
        return 'En Progreso' ;
        break;
      case 4:
        return 'Completada' ;
        break;
      default:
        return 'N/A'
    }
  }

}
