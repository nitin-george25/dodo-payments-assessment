import {
  AfterViewInit,
  Component,
  effect,
  Input,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { TableHeader } from './types';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NzDatePickerModule,
    NzInputModule,
    NzSelectModule,
    NzTagModule,
    ReactiveFormsModule,
  ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss',
})
export class DatatableComponent implements OnInit, AfterViewInit {
  @Input() title: string = '';
  @Input() data: any;
  @Input() headers: TableHeader[] = [];

  formGroup = new FormGroup({});
  filterKey: string | undefined;
  filterValue: string | undefined;
  filterType: string = 'text';
  filterDateValue: Date[] | undefined;

  private _data: WritableSignal<any[]> = signal([]);

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];
  activeColumn: TableHeader | undefined;

  isFilterOpen: boolean = false;
  selectedFilterKey: string = '';
  appliedFilters: { key: string; value: string }[] = [];
  filteredData: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() {
    effect(() => {
      this.dataSource.data = this._data();
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngOnInit(): void {
    this._data = signal(this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = this.headers.map((header) => header.key);
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    } else {
      console.error('Paginator not initialized');
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    } else {
      console.error('Sort not initialized');
    }
  }

  headerSelect(headerKey: string): void {
    this.filterType = this.headers.find((h) => h.key === headerKey)?.type || '';
  }

  setActiveColumn(column: TableHeader): void {
    this.activeColumn = column;
  }

  openFilter(): void {
    this.isFilterOpen = true;
  }

  closeFilter(): void {
    this.isFilterOpen = false;
  }

  filterData(): void {
    let filteredData = this.data;

    this.appliedFilters.forEach((filter) => {
      console.log('filter by', filter, filteredData);
      if (filter.key === 'date') {
        const [start, end] = filter.value.split(',');
        filteredData = filteredData.filter((row: any) => {
          const date = new Date(row[filter.key]);
          return date >= new Date(start) && date <= new Date(end);
        });
      } else {
        filteredData = filteredData.filter((row: any) => {
          return (
            row[filter.key] &&
            row[filter.key]
              .toString()
              .toLowerCase()
              .includes(filter.value.toLowerCase())
          );
        });
      }

      this.filterKey = undefined;
      this.filterValue = undefined;
      this.filterDateValue = undefined;
    });

    this.dataSource.data = filteredData;

    this.closeFilter();
  }

  removeFilter(index: number): void {
    this.appliedFilters.splice(index, 1);
    this.filterData();
  }

  applyFilter(key?: string, value?: string, dateValue?: Date[]): void {
    if (!key || (!value && !dateValue)) {
      return;
    }

    if (value) this.appliedFilters.push({ key, value });

    if (dateValue) {
      const [start, end] = dateValue;
      this.appliedFilters.push({ key, value: `${start},${end}` });
    }

    this.filterData();
  }

  getLabelFromKey(key: string): string {
    return this.headers.find((h) => h.key === key)?.label || '';
  }

  formatValue(key: string, value: string): string {
    const header = this.headers.find((h) => h.key === key);
    const type = header?.type;

    if (type === 'date') {
      const [start, end] = value.split(',');
      console.log('start', start, 'end', end);

      return `${new Date(start).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })} - ${new Date(end).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })}`;
    }

    return value;
  }
}
