import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  ngOnInit(): void {
    console.log("videos component initialized");
  }
}
