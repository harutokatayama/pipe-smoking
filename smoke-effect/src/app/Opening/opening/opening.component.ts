import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {
  @Output() openingEnded: EventEmitter<boolean> = new EventEmitter();
  public setLoadingNum;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigateByUrl('/top');
    this.setLoadingTitle();
    this.click();

    setTimeout( _ => {
      this.openingEnded.emit(true);
    }, 4200);
  }

  click() {
    const videoElement = document.querySelector('video');
    videoElement.play();
    videoElement.playbackRate = 2.7;
  }

  // 後ほどquerySelectorAllで改良
  setLoadingTitle() {
    this.setLoadingNum = Math.floor(Math.random() * Math.floor(2));

    return this.setLoadingNum;
  }

}
