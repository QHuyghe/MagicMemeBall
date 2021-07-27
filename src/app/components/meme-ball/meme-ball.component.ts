import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme-ball',
  templateUrl: './meme-ball.component.html',
  styleUrls: ['./meme-ball.component.scss']
})
export class MemeBallComponent {

  inputText: string = '';
  activeImg: string = 'assets/img/8ball.png';
  images = [
    'assets/img/no.png',
    'assets/img/yes.jpg',
    'assets/img/shrug.jpg',
    'assets/img/tryagain.jpg'
  ]
  loading: boolean = false;

  constructor() { }

  answer() {
    this.loading = true;
    setTimeout(() => {
      this.activeImg = this.images[Math.floor(Math.random() * 4)];
      this.loading = false;
    }, 3000);
  }
}
