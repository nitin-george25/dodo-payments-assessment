import { Component, OnInit } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DataService } from '../../core/services/data.service';
import { DatatableComponent } from '../../custom-elements/datatable/datatable.component';
import { TableHeader } from '../../custom-elements/datatable/types';
import { Transaction } from './types';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [DatatableComponent, MatProgressSpinnerModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  data: Transaction[] = [];
  headers: TableHeader[] = [
    { key: 'id', label: 'ID', type: 'text' },
    { key: 'date', label: 'Date', type: 'date' },
    { key: 'customer_name', label: 'Customer', type: 'text' },
    { key: 'amount', label: 'Amount', type: 'currency' },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('transactions.json').subscribe((data) => {
      this.data = data;
    });
  }
}
