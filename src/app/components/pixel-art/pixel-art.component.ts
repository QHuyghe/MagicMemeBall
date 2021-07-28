import { Component } from '@angular/core';

@Component({
  selector: 'app-pixel-art',
  templateUrl: './pixel-art.component.html',
  styleUrls: ['./pixel-art.component.scss']
})
export class PixelArtComponent {
  god: {rowIndex: number, squares: SquareObject[]}[];

  availableColors = ['blue', 'green', 'red', 'yellow'];
  activeColor = 'yellow';

  displayContextMenu = false;
  contextX = 0;
  contextY = 0;
  cursorDragging = false;

  constructor() { 
    const rows = Math.floor(window.innerHeight / (window.innerWidth / 100))
    this.god = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const squares: SquareObject[] = [];
      for (let i = 0; i < 100; i++) {
        squares.push(new SquareObject(i, rowIndex))
      }
      this.god.push({ rowIndex, squares})
    }
  }

  showContextMenu(event: any) {
    this.contextX = event.clientX;
    this.contextY = event.clientY;
    this.displayContextMenu = true;
  }

  setActiveColor(color: string) {
    this.displayContextMenu = false;
    this.activeColor = color;
  }

  updateColor(square: SquareObject) {
    if (square.color === this.activeColor) {
      square.color = 'white';
      return;
    }
    square.color = this.activeColor;
  }

  updateColorDragging(square: SquareObject) {
    if (this.cursorDragging) {
      square.color = this.activeColor;
    }
  }
}

class SquareObject {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number, color = 'white') {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}