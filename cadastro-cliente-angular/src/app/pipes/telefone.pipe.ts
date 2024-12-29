import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
  standalone: true
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

}
