export class Table {
  constructor() {}

  filterData(data: any, appliedFilters: { key: string; value: string }[]): any[] {
    let filteredData = data;

    appliedFilters.forEach((filter) => {
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
    });

    return filteredData;
  }

  formatValue(value:string, type: string): string {
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
