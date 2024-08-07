import { Chart, ChartDataItem, ChartMapping } from './chart';

describe('Chart', () => {
  let chart: Chart;

  beforeEach(() => {
    chart = new Chart();
  });

  describe('processChartData', () => {
    it('should process data for line chart correctly', () => {
      const data = [
        { date: '2024-01-01T00:00:00Z', value: 100 },
        { date: '2024-01-02T00:00:00Z', value: 150 },
      ];
      const mapping: ChartMapping = { name: 'date', value: 'value' };
      const result = chart.processChartData(data, 'line', mapping);

      expect(result).toEqual([
        {
          name: 'transactions',
          series: [{ name: 'Jan-24', value: 250 }],
        },
      ]);
    });

    it('should return data as is for unsupported chart types', () => {
      const data = [{ name: 'Test', value: 123 }];
      const mapping: ChartMapping = { name: 'name', value: 'value' };
      const result = chart.processChartData(data, 'unsupported', mapping);

      expect(result).toEqual(data);
    });
  });

  describe('processMonthlyData', () => {
    it('should aggregate data by month correctly', () => {
      const data: ChartDataItem[] = [
        { name: '2024-01-01T00:00:00Z', value: 100 },
        { name: '2024-01-02T00:00:00Z', value: 150 },
        { name: '2024-02-01T00:00:00Z', value: 200 },
      ];
      const result = chart.processMonthlyData(data);

      expect(result).toEqual([
        { name: 'Jan-24', value: 250 },
        { name: 'Feb-24', value: 200 },
      ]);
    });

    it('should handle empty data array', () => {
      const data: ChartDataItem[] = [];
      const result = chart.processMonthlyData(data);

      expect(result).toEqual([]);
    });
  });

  describe('processLineChartData', () => {
    it('should map data according to mapping and process it', () => {
      const data = [
        { date: '2024-01-01T00:00:00Z', amount: 100 },
        { date: '2024-02-01T00:00:00Z', amount: 200 },
      ];
      const mapping: ChartMapping = { name: 'date', value: 'amount' };
      const result = chart.processLineChartData(data, mapping);

      expect(result).toEqual([
        {
          name: 'transactions',
          series: [
            { name: 'Jan-24', value: 100 },
            { name: 'Feb-24', value: 200 },
          ],
        },
      ]);
    });

    it('should handle missing mapping gracefully', () => {
      const data = [{ date: '2024-01-01T00:00:00Z', amount: 100 }];
      const result = chart.processLineChartData(data, undefined);

      expect(result).toEqual(data);
    });

    it('should handle missing data gracefully', () => {
      const mapping: ChartMapping = { name: 'date', value: 'amount' };
      const result = chart.processLineChartData(null, mapping);

      expect(result).toBeNull();
    });
  });
});
