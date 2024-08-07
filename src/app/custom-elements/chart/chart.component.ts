import { Component, Input } from '@angular/core';
import {
  Chart,
  ChartDataItem,
  ChartMapping,
} from '../../core/controllers/chart';

import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { ChartSettings } from './types';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() data: any[] = [];
  @Input() type: string = 'line';
  @Input() mapping: ChartMapping = { name: 'date', value: 'amount' };
  @Input() settings: ChartSettings = {
    className: '',
    colorScheme: {
      domain: ['#555555'],
      name: 'cool',
      selectable: true,
      group: ScaleType.Linear,
    },
  };

  chart: Chart = new Chart();
  chartData: ChartDataItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.chartData = this.chart.processChartData(
      this.data,
      this.type,
      this.mapping
    );
  }
}
