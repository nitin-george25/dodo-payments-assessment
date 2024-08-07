export interface ChartMapping {
  name: string;
  value?: string;
  series?: ChartMapping[];
}

export interface ChartDataItem {
  name: string;
  value?: number;
  extra?: any;
  series?: ChartDataItem[];
}

export class Chart {
  constructor() {}

  processChartData(data: any, chartType: string, mapping: ChartMapping) {
    // Process data and return chart data
    switch (chartType) {
      case 'line':
        return this.processLineChartData(data, mapping);
      default:
        return data;
    }
  }

  processMonthlyData(data: ChartDataItem[]): ChartDataItem[] {
    const processedData: ChartDataItem[] = [];

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    data.forEach((item: ChartDataItem) => {
      const date = new Date(item.name);
      const month = months[date.getMonth()];
      const year = date.getFullYear().toString().slice(-2);
      const monthName = `${month}-${year}`;

      let monthData = processedData.find(
        (dataPoint) => dataPoint.name === monthName
      );

      if (!monthData) {
        monthData = {
          name: monthName,
          value: item.value,
        };
        processedData.push(monthData);
      } else {
        if (monthData.value) {
          monthData.value += item.value || 0;
        }
      }
    });

    return processedData;
  }

  processLineChartData(data: any, mapping?: ChartMapping) {
    if (!data || !mapping) {
      return data;
    }

    const chartData: ChartDataItem[] = [];

    data.forEach((item: any) => {
      const chartItem = {
        name: item[mapping.name],
        value: mapping.value ? item[mapping.value] : undefined,
      };

      chartData.push(chartItem);
    });

    console.log('chartData', this.processMonthlyData(chartData));

    return [
      { name: 'transactions', series: this.processMonthlyData(chartData) },
    ];
  }
}
