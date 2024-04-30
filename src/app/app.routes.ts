import { HomeComponent } from './components/home/home.component';
import { MySpaceComponent } from './components/my-space/my-space.component';
import { EventsComponent } from './components/events/events.component';
import { VideosComponent } from './components/videos/videos.component';
import { LiveComponent } from './components/live/live.component';
import { RegisterComponent } from './components/register/register.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "my-space", component: MySpaceComponent },
  { path: "events", component: EventsComponent },
  { path: "videos", component: VideosComponent },
  { path: "live", component: LiveComponent },
  { path: "register", component: RegisterComponent }
];
