import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeAnimation } from 'src/app/app.animations';
import { Chanson } from 'src/app/modeles/chanson';
import { ChansonService } from 'src/app/modeles/chanson.service';

@Component({
  selector: 'app-audio-player-button',
  templateUrl: './audio-player-button.component.html',
  styleUrls: ['./audio-player-button.component.scss'],
  animations: [fadeAnimation]
})
export class AudioPlayerButtonComponent implements OnInit {

  public isAudioplayerToggled = false;
  chanson: Chanson|undefined;
  sub: Subscription;
  public audioList;

  constructor(private chansonService: ChansonService) {
    this.sub = this.chansonService.getSelectedSong().subscribe(title => {
      this.chanson = title;
      this.audioList = [
          {
            url: this.chanson.url,
            title: this.chanson.trackname,
            cover: '/assets/cover.jpg',
          }
        ];

    });
    console.log(this.audioList);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 200);
  }

  afficherAudioPlayer(): void {
    this.isAudioplayerToggled = !this.isAudioplayerToggled;
    if (this.isAudioplayerToggled) {
      setTimeout(() => {
        this.init();
      }, 100);
    }
  }

  init(): void {
    const controls = document.getElementsByClassName('controls');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < controls.length; i++) {
      const e = controls[i] as HTMLElement;
      e.remove();

    }

    const timeline = document.getElementsByClassName('time-line');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < timeline.length; i++) {
      const e = timeline[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      e.style.fontSize = 'xx-small';
      e.style.color = 'black';
    }

    const title = document.getElementsByClassName('title');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < title.length; i++) {
      const e = title[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      e.style.fontSize = 'small';
      e.style.fontWeight = 'bolder';
      e.style.color = 'black';
      e.style.margin = '0';
    }

    const slidecont = document.getElementsByClassName('slidecontainer');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < slidecont.length; i++) {
      const e = slidecont[i] as HTMLElement;

      e.style.marginTop = '0.5vw';
    }

    const cover = document.getElementsByTagName('img');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < cover.length; i++) {
      const e = cover[i] as HTMLElement;
      if ((cover[i].parentNode as HTMLElement).className  === 'cover ng-star-inserted' ){
        e.style.maxHeight = '4vw';
        e.style.maxWidth = '4vw';
      }
    }

    const wrapper = document.getElementsByClassName('wrapper');
    for (let i = 0; i < cover.length; i++) {
      const e = wrapper[i] as HTMLElement;
      e.style.height = 'max-content';
    }

    const container = document.getElementsByClassName('container');
    for (let i = 0; i < cover.length; i++) {
      const e = container[i] as HTMLElement;
      e.style.alignContent = 'center';
    }

    // const slider = document.getElementsByClassName('slider');
    // // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < slider.length; i++) {
    //   const e = slider[i] as HTMLElement;
    //   e.style().color = 'black'
    // }
  }


}
