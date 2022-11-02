import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {

  transform(status: number): string {
    switch (status) {
      case 1:
        return 'Pago de propiedad' ;
        break;
      case 2:
        return 'Pago de broker' ;
        break;
      case 3:
        return 'Pago de aseguradora' ;
        break;
      default:
        return 'N/A'
    }
  
  }

}
