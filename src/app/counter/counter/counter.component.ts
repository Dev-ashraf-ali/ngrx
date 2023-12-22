import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter: number = 0;
  onIncrement(){
    this.counter++;
  }

  ondecrement(){
    this.counter--;
  }

  onreseat(){
    this.counter = 0;
  }
}
