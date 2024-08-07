import { Table } from './table';

describe('Table', () => {
  let table: Table;

  beforeEach(() => {
    table = new Table();
  });

  describe('filterData', () => {
    it('should filter data by date range', () => {
      const data = [
        { date: '2023-01-01', name: 'John' },
        { date: '2023-02-01', name: 'Jane' },
        { date: '2023-03-01', name: 'Doe' },
      ];
      const appliedFilters = [{ key: 'date', value: '2023-01-01,2023-02-15' }];
      const filteredData = table.filterData(data, appliedFilters);

      expect(filteredData).toEqual([
        { date: '2023-01-01', name: 'John' },
        { date: '2023-02-01', name: 'Jane' },
      ]);
    });

    it('should filter data by string matching', () => {
      const data = [
        { date: '2023-01-01', name: 'John' },
        { date: '2023-02-01', name: 'Jane' },
        { date: '2023-03-01', name: 'Doe' },
      ];
      const appliedFilters = [{ key: 'name', value: 'Jo' }];
      const filteredData = table.filterData(data, appliedFilters);

      expect(filteredData).toEqual([{ date: '2023-01-01', name: 'John' }]);
    });

    it('should handle multiple filters', () => {
      const data = [
        { date: '2023-01-01', name: 'John', category: 'A' },
        { date: '2023-02-01', name: 'Jane', category: 'B' },
        { date: '2023-03-01', name: 'Doe', category: 'A' },
      ];
      const appliedFilters = [
        { key: 'date', value: '2023-01-01,2023-03-01' },
        { key: 'category', value: 'A' },
      ];
      const filteredData = table.filterData(data, appliedFilters);

      expect(filteredData).toEqual([
        { date: '2023-01-01', name: 'John', category: 'A' },
        { date: '2023-03-01', name: 'Doe', category: 'A' },
      ]);
    });

    it('should return all data if no filters are applied', () => {
      const data = [
        { date: '2023-01-01', name: 'John' },
        { date: '2023-02-01', name: 'Jane' },
        { date: '2023-03-01', name: 'Doe' },
      ];
      const appliedFilters: {key: string, value: string}[] = [];
      const filteredData = table.filterData(data, appliedFilters);

      expect(filteredData).toEqual(data);
    });

    it('should return an empty array if no data matches the filter', () => {
      const data = [
        { date: '2023-01-01', name: 'John' },
        { date: '2023-02-01', name: 'Jane' },
        { date: '2023-03-01', name: 'Doe' },
      ];
      const appliedFilters = [{ key: 'name', value: 'Nonexistent' }];
      const filteredData = table.filterData(data, appliedFilters);

      expect(filteredData).toEqual([]);
    });
  });

  describe('formatValue', () => {
    it('should format date range correctly', () => {
      const value = '2023-01-01,2023-12-31';
      const formattedValue = table.formatValue(value, 'date');

      expect(formattedValue).toBe('Jan 01, 2023 - Dec 31, 2023');
    });

    it('should return the value as is if type is not date', () => {
      const value = 'some value';
      const formattedValue = table.formatValue(value, 'string');

      expect(formattedValue).toBe('some value');
    });
  });
});
