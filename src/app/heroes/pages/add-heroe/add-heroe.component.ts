import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss']
})
export class AddHeroeComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(res => console.log(res.get('id')))
  }

}
