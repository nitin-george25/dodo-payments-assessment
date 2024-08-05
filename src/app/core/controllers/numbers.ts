export class Numbers {
  constructor() {}
  formatNumber(value: number): string {
    return value.toLocaleString();
  }

  getCurrencySymbol(currency: string): string {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'GBP':
        return '£';
      case 'INR':
        return '₹';
      default:
        return '';
    }
  }

  formatCurrency(value: number, currency: string): string {
    if (value >= 1000000) {
      return `${this.getCurrencySymbol(currency)} ${(value / 1000000).toFixed(
        0
      )}M`;
    } else if (value >= 1000) {
      return `${this.getCurrencySymbol(currency)} ${(value / 1000).toFixed(
        0
      )}K`;
    } else {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: currency,
      });
    }
  }

  formatPercentage(value: number): string {
    const formattedValue = value.toFixed(2);

    if (value >= 0) {
      return `+${formattedValue}%`;
    }

    return `${formattedValue}%`;
  }

  formatGrowth(value: number): string {
    return value >= 0 ? `+${value}%` : `${value}%`;
  }
}
