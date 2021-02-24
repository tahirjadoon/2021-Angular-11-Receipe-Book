import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameIntervalFired(number: number){
    if(number % 2 === 0){
      this.evenNumbers.push(number);
    }
    else{
      this.oddNumbers.push(number);
    }
  }

  onGameReset(){
    //this.oddNumbers = []; //this created a brand new empty array
    //this.evenNumbers = [];

    this.oddNumbers.length = 0;
    this.evenNumbers.length = 0;
  }
}
