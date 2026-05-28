import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CallOverlayComponent } from './features/chat/components/call-overlay/call-overlay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CallOverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
