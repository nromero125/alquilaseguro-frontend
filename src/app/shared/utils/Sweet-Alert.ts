import Swal, { SweetAlertIcon } from 'sweetalert2';
export class SweetAlert {
  async AlertConfirm(
    Title: string,
    Text: string,
    TypeSuccessErrorOrWarning: SweetAlertIcon
  ): Promise<boolean> {
    const a = await Swal.fire({
      title: Title,
      text: Text,
      icon: TypeSuccessErrorOrWarning,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      confirmButtonColor:'#f64e60'
      
    });
    return a.isConfirmed;
  }

  async AlertConfirm_with_input(
    Title: string,
    Text: string,
    InputLabel:string,
    TypeSuccessErrorOrWarning: SweetAlertIcon
  ): Promise<any> {
    const a = await Swal.fire({
      title: Title,
      text: Text,
      input: 'text',
      inputLabel: InputLabel,
      icon: TypeSuccessErrorOrWarning,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      
    });
    return a;
  }
  Default(
    Title: string,
    Text: string,
    TypeSuccessErrorOrWarning: SweetAlertIcon
  ): void {
    Swal.fire(Title, Text, TypeSuccessErrorOrWarning);
  }

  ErrorAlert(
  ): void {
    Swal.fire({
      title: 'Advertencia',
      text: 'Esta sección se encuentra en desarrollo',
      icon: 'warning',
      padding: '3em',
      showCloseButton: true,
      confirmButtonColor: '#e3292e',
    });
  }
  
}
