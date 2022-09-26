import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'section-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class SectionOneComponent implements OnInit {
  @Input() color: string = "green";

  colorClasses = { 
    blue: false,
    green: false,
    red: false
  }

  ngOnInit(): void {
    this.colorClasses.blue = this.color === "blue";
    this.colorClasses.green = this.color === "green";
    this.colorClasses.red = this.color === "red";
  }
}
