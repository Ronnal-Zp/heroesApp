import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../../shared/interfaces/general.interface';

@Pipe({
  name: 'imgRoute'
})
export class ImgRoutePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    
    if(heroe.id?.includes('marvel') || heroe.id?.includes('dc')) {
      return `assets/heroes/${ heroe.id }.jpg`
    } 

    if(heroe.alt_img) {
      return heroe.alt_img;
    }

    return "assets/no-image.png";
  }

}
