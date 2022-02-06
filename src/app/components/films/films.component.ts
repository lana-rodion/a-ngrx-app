import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Film } from './film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films$: Observable<Film>;
  inputTitle: string = '';

  constructor(private store: Store<{ films: Film[] }>) { 
    this.films$ = store.select( 'films')
      .pipe(
        map(result => {
          return this.sort(result);
        })
      );
  }
  
  sort(_result: Film[]): any {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
