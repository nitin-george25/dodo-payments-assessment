import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { Numbers } from '../../core/controllers/numbers';
import { CommonModule } from '@angular/common';

interface Settings {
  className?: string;
  style?: string;
}

@Component({
  selector: 'app-number-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './number-card.component.html',
  styleUrl: './number-card.component.scss',
})
export class NumberCardComponent {
  @Input() title: string = 'Not Available';
  @Input() value: number = 0;
  @Input() growth: number = 0;
  @Input() settings: Settings = {};

  private numbers: Numbers = new Numbers();
  displayValue: string = '';
  displayGrowth: string = '';

  constructor() {}

  ngOnInit(): void {
    this.displayValue = this.numbers.formatCurrency(this.value, 'USD');
    this.displayGrowth = this.numbers.formatPercentage(this.growth);
  }
}
