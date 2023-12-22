import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  count: number = 0;
  items: any[] = [
    {
      id: 1,
      name: "pipe",
      amount: 40,
      items: 0
    },
    {
      id: 2,
      name: "plyer",
      amount: 50,
      items: 0
    },
    {
      id: 3,
      name: "tester",
      amount: 20,
      items: 0
    },
    {
      id: 4,
      name: "tape",
      amount: 30,
      items: 0
    },
    {
      id: 5,
      name: "W.B Seat",
      amount: 400,
      items: 0
    },
    {
      id: 5,
      name: "W.B Seat",
      amount: 400,
      items: 0
    },
    {
      id: 5,
      name: "W.B Seat",
      amount: 400,
      items: 0
    },
    {
      id: 5,
      name: "W.B Seat",
      amount: 400,
      items: 0
    },
    {
      id: 5,
      name: "W.B Seat",
      amount: 400,
      items: 0
    }
  ]

  onDecrement(){
    this.count--;
  }

  onIncrement(){
    this.count++;
  }

  onReset(){
    this.count = 0;
  }

}
