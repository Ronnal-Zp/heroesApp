import { filter, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'heroes-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {

  public heroeForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      )
      .subscribe(heroe => {

        if(!heroe) return this.router.navigateByUrl('/');

        this.heroeForm.reset(heroe);
        return;
      })
  }

  get currentHero(): Heroe {
    const heroe = this.heroeForm.value as Heroe;
    return heroe;
  }

  public onSubmit(): void {
    if(this.heroeForm.invalid) return;

    if(this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe(heroe => {
          this.showSnackBar('¡Heroe actualizado!');
        })
    } else {
      this.heroesService.addHero(this.currentHero)
        .subscribe(heroe => {
          this.showSnackBar('¡Heroe creado!');
          this.router.navigate(['heroes/edit', heroe.id])
        })
    }
  }

  public showSnackBar(message: string) {
    this.matSnackBar.open(message, 'Ok', {
      duration: 2500
    })
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: this.heroeForm.value
    });


    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHeroe(this.currentHero.id)),
        filter((isDeleted: boolean) => isDeleted)
      )
      .subscribe(() => {
        this.router.navigate(['/heroes/list'])
      })
  }


}
