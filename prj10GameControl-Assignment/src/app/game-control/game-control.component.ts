import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number: number = 0;
  gameInterval;
  isRunning: boolean = false;

  //out to the app component where game control is used. use alis intervalFired
  @Output('intervalFired') gameIntervalFired: EventEmitter<number> = new EventEmitter<number>();

  @Output('resetFired') gameResetFired: EventEmitter<any> = new EventEmitter();

  @Input('totalCount') totalCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.gameInterval = setInterval(() => {
      this.isRunning = true;
      this.number++;
      this.gameIntervalFired.emit(this.number);
    }, 1000);
  }

  onStopGame(){
    if(!this.isRunning) return;

    this.isRunning = false;
    clearInterval(this.gameInterval);
  }

  onClearGame(){
    this.onStopGame();
    this.number = 0;
  }

  onResetGame(){
    this.onClearGame();
    this.gameResetFired.emit();
  }
}
