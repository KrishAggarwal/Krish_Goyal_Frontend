import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private service: SharedService) { }

  isLight: boolean = false;
  isDark: boolean = true;

  changeTheme(theme: string): void {
    if (theme === 'light') {
      this.isLight = true;
      this.isDark = false;
      this.service.changeTheme('light');
    } else {
      this.isDark = true;
      this.isLight = false;
      this.service.changeTheme('dark');
    }
  }

  ngOnInit(): void {
    console.log("header component initialized");
  }
}
