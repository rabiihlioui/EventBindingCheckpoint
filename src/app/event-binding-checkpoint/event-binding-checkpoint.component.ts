import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-checkpoint',
  templateUrl: './event-binding-checkpoint.component.html',
  styleUrls: ['./event-binding-checkpoint.component.css']
})
export class EventBindingCheckpointComponent implements OnInit {

  color: string
  errorMessage = "Your input is not a color"
  error = false

  constructor() { }

  ngOnInit() {
  }

  isColor(newColor: string) {
    var s = new Option().style
    s.color = newColor
    this.error = !(s.color == newColor.toLocaleLowerCase())
  }

  changeColor(newColor: string) {
    this.isColor(newColor)
    if (!this.error)
      this.color = newColor
  }

}
