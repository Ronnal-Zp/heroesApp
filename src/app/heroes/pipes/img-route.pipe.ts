import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../../shared/interfaces/general.interface';

@Pipe({
  name: 'imgRoute'
})
export class ImgRoutePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `../../../../assets/heroes/${ heroe.id }.jpg`
  }

}
