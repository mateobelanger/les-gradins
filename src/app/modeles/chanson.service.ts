import { Injectable } from '@angular/core';
import { Chanson } from './chanson';
import { BehaviorSubject, Observable} from 'rxjs';
import { Tracklist } from 'src/tracklist';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  private chansonActuelle: BehaviorSubject<Chanson> = new BehaviorSubject<Chanson>(Tracklist[0]);

  getSelectedSong(): Observable<Chanson>{
    return this.chansonActuelle.asObservable();
  }

  async setSelectedSong(c: Chanson): Promise<any>{


    return new Promise((resolve) => {
      this.chansonActuelle.next(c);
      resolve('Nouvelle piste sélectionnée');
    });
  }
  constructor() {
  }
}
