import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  standalone: true,
  templateUrl: './parents.html',
  styleUrl: './parents.css'
})
export class Parents {

  activeFaq: number | null = null;

  toggleFaq(index: number): void {
    this.activeFaq =
      this.activeFaq === index ? null : index;
  }
}