import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SharedService } from './services/shared.service';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private service: SharedService) { }
  title = 'Krish_Goyal_Frontend';
  isDark: boolean = true;
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.service.currentTheme.subscribe((theme: string) => {
        theme === 'dark' ? this.isDark = true : this.isDark = false;
      }));
  }

  ngOnDestoy(): void {
    this.subscription.unsubscribe();
  }
}
