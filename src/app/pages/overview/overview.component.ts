import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NumberCardComponent } from '../../custom-elements/number-card/number-card.component';
import { ChartComponent } from '../../custom-elements/chart/chart.component';
import { Transaction } from '../transactions/types';
import { DataService } from '../../core/services/data.service';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NumberCardComponent,
    ChartComponent,
  ],
  standalone: true,
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  value: number = 1400;
  growth: number = 5;

  transactions: Transaction[] = [];
  chartsColorScheme = {
    domain: ['#555555'],
    name: 'cool',
    selectable: true,
    group: ScaleType.Linear,
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Component initialization logic goes here
    this.dataService.getData('transactions.json').subscribe((data) => {
      this.transactions = data;
    });
  }
}
