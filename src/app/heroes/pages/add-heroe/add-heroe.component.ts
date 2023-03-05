import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../../../shared/interfaces/general.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss']
})
export class AddHeroeComponent implements OnInit {

  defaultHeroe: Heroe = {
    superhero: "",
    publisher: Publisher.DCComics,
    first_appearance: "",
    alter_ego: "",
    characters: "",
    alt_img: ""
  }


  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {

    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroesService.getHeroeById( id ) )
        )
        .subscribe( heroe => {
          this.defaultHeroe = { ...heroe }
        })
    }    

  }


  saveHeroe() { 

    if( !(this.defaultHeroe.superhero.trim().length > 0) &&
        !(this.defaultHeroe.first_appearance.trim().length > 0) ) {
      return;
    }


    if (this.defaultHeroe.alt_img?.length == 0) {
      this.defaultHeroe.alt_img = "assets/no-image.png";
    }


    if( this.defaultHeroe.id ) {

      this.heroesService.updateHeroe( this.defaultHeroe )
        .subscribe( heroe => {
          this.defaultHeroe = { ...heroe };
          this.openSnackBar('😎 !Heroe actualizado¡');
        });

    } else {

      this.heroesService.addHeroe( this.defaultHeroe )
        .subscribe( heroe => {
          this.defaultHeroe = { ...heroe }
          this.openSnackBar('💥 ¡Heroe creado!')
          this.router.navigate(['/heroes/edit', `${heroe.id}`]);
        })

    }
  }


  deleteHeroe() {

    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { ...this.defaultHeroe }
    });

    dialogRef.afterClosed()
      .pipe(
        switchMap( (confirm) => {
            if(confirm) return this.heroesService.deleteHeroe( this.defaultHeroe.id! )
            else return of(null);
        })
      )
      .subscribe()
  } 


  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
      panelClass: 'text-success',

    })
  }
    
}
