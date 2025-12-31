import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [ MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('newYear2026');
     days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  year = new Date().getFullYear();
  private intervalId!: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateCountdown(); // render immediately

    this.intervalId = setInterval(() => {
      this.updateCountdown();
      this.cdr.detectChanges(); // tell Angular to update UI
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const deadline = new Date(nextYear, 0, 1, 0, 0, 0); // Jan 1 next year 00:00:00
    
    const distance = deadline.getTime() - now.getTime();

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

}
