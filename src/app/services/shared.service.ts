import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  theme = new BehaviorSubject<string>("dark");
  currentTheme = this.theme.asObservable();
  changeTheme(newTheme:string){
    this.theme.next(newTheme);
  }
}
