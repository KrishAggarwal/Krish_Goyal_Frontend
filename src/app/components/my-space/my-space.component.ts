import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-space',
  standalone: true,
  imports: [],
  templateUrl: './my-space.component.html',
  styleUrl: './my-space.component.css'
})
export class MySpaceComponent implements OnInit {
  ngOnInit(): void {
    console.log("my space component initialized");
  }
}
