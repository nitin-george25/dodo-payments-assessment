import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatatableComponent } from './datatable.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;
  let paginator: MatPaginator;
  let sort: MatSort;

  beforeEach(async () => {
    paginator = jasmine.createSpyObj('MatPaginator', ['firstPage', 'nextPage', 'previousPage', 'lastPage']);
    sort = jasmine.createSpyObj('MatSort', ['sortChange', 'active', 'direction']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        ReactiveFormsModule,
        NzDatePickerModule,
        NzSelectModule,
        NzTagModule,
        NzInputModule,
        MatIconModule,
        BrowserAnimationsModule,
        DatatableComponent, // Import the standalone component
      ],
      providers: [
        { provide: MatPaginator, useValue: { page: of({}), pageSize: 10 } },
        { provide: MatSort, useValue: { sortChange: of({}) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize dataSource and displayedColumns', () => {
      component.data = [{ id: 1, name: 'Test' }];
      component.headers = [{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }];
      component.ngOnInit();

      expect(component.dataSource.data).toEqual(component.data);
      expect(component.displayedColumns).toEqual(['id', 'name']);
    });
  });

  describe('headerSelect', () => {
    it('should set filterType based on header type', () => {
      component.headers = [{ key: 'id', label: 'ID', type: 'number' }];
      component.headerSelect('id');

      expect(component.filterType).toBe('number');
    });
  });

  describe('setActiveColumn', () => {
    it('should set active column', () => {
      const column = { key: 'id', label: 'ID', type: 'number' };
      component.setActiveColumn(column);

      expect(component.activeColumn).toBe(column);
    });
  });

  describe('openFilter', () => {
    it('should set isFilterOpen to true', () => {
      component.openFilter();
      expect(component.isFilterOpen).toBeTrue();
    });
  });

  describe('closeFilter', () => {
    it('should set isFilterOpen to false', () => {
      component.closeFilter();
      expect(component.isFilterOpen).toBeFalse();
    });
  });

  describe('applyFilter', () => {
    it('should apply filter and reset filter state', () => {
      spyOn(component, 'resetFilterState');
      spyOn(component, 'closeFilter');
      spyOn(component.table, 'filterData');

      component.data = [{ id: 1, name: 'Test' }];
      component.headers = [{ key: 'name', label: 'Name' }];
      component.applyFilter('name', 'Test', undefined);

      expect(component.appliedFilters).toEqual([{ key: 'name', value: 'Test' }]);
      expect(component.table.filterData).toHaveBeenCalledWith(component.data, component.appliedFilters);
      expect(component.resetFilterState).toHaveBeenCalled();
      expect(component.closeFilter).toHaveBeenCalled();
    });

    it('should not apply filter if no key or value', () => {
      spyOn(component.table, 'filterData');
      component.applyFilter(undefined, undefined, undefined);
      expect(component.table.filterData).not.toHaveBeenCalled();
    });
  });

  describe('resetFilterState', () => {
    it('should reset filter state', () => {
      component.filterKey = 'name';
      component.filterValue = 'Test';
      component.filterDateValue = [new Date(), new Date()];

      component.resetFilterState();

      expect(component.filterKey).toBeUndefined();
      expect(component.filterValue).toBeUndefined();
      expect(component.filterDateValue).toBeUndefined();
    });
  });

  describe('removeFilter', () => {
    it('should remove a filter and reapply filters', () => {
      spyOn(component.table, 'filterData');
      component.appliedFilters = [{ key: 'name', value: 'Test' }];

      component.removeFilter(0);

      expect(component.appliedFilters.length).toBe(0);
      expect(component.table.filterData).toHaveBeenCalledWith(component.data, []);
    });
  });

  describe('getLabelFromKey', () => {
    it('should return the label for a given key', () => {
      component.headers = [{ key: 'name', label: 'Name' }];
      expect(component.getLabelFromKey('name')).toBe('Name');
    });

    it('should return an empty string if key not found', () => {
      component.headers = [{ key: 'name', label: 'Name' }];
      expect(component.getLabelFromKey('unknown')).toBe('');
    });
  });
});
