import { Component } from '@angular/core';

@Component({
  selector: 'heroes-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

}
