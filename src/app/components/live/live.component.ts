import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {
  ngOnInit(): void {
    console.log("live component initialized");
  }
}
