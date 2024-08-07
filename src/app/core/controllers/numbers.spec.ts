import { Numbers } from './numbers';

describe('Numbers', () => {
  let numbers: Numbers;

  beforeEach(() => {
    numbers = new Numbers();
  });

  describe('formatNumber', () => {
    it('should format a number with commas', () => {
      expect(numbers.formatNumber(1234567)).toBe('1,234,567');
    });

    it('should format a number less than 1000 without commas', () => {
      expect(numbers.formatNumber(123)).toBe('123');
    });
  });

  describe('getCurrencySymbol', () => {
    it('should return $ for USD', () => {
      expect(numbers.getCurrencySymbol('USD')).toBe('$');
    });

    it('should return € for EUR', () => {
      expect(numbers.getCurrencySymbol('EUR')).toBe('€');
    });

    it('should return £ for GBP', () => {
      expect(numbers.getCurrencySymbol('GBP')).toBe('£');
    });

    it('should return ₹ for INR', () => {
      expect(numbers.getCurrencySymbol('INR')).toBe('₹');
    });

    it('should return an empty string for unknown currency', () => {
      expect(numbers.getCurrencySymbol('ABC')).toBe('');
    });
  });

  describe('formatCurrency', () => {
    it('should format millions correctly', () => {
      expect(numbers.formatCurrency(2500000, 'USD')).toBe('$ 2.50M');
    });

    it('should format thousands correctly', () => {
      expect(numbers.formatCurrency(4500, 'USD')).toBe('$ 4.50K');
    });

    it('should format values less than a thousand correctly', () => {
      expect(numbers.formatCurrency(123, 'USD')).toBe('$123.00');
    });

    it('should handle different currencies correctly', () => {
      expect(numbers.formatCurrency(123, 'EUR')).toBe('€123.00');
      expect(numbers.formatCurrency(123, 'GBP')).toBe('£123.00');
      expect(numbers.formatCurrency(123, 'INR')).toBe('₹123.00');
    });
  });

  describe('formatPercentage', () => {
    it('should format positive percentages with a plus sign', () => {
      expect(numbers.formatPercentage(12.3456)).toBe('+12.35%');
    });

    it('should format negative percentages without a plus sign', () => {
      expect(numbers.formatPercentage(-12.3456)).toBe('-12.35%');
    });

    it('should format zero percentages with a plus sign', () => {
      expect(numbers.formatPercentage(0)).toBe('+0.00%');
    });
  });

  describe('formatGrowth', () => {
    it('should format positive growth with a plus sign', () => {
      expect(numbers.formatGrowth(12)).toBe('+12%');
    });

    it('should format negative growth without a plus sign', () => {
      expect(numbers.formatGrowth(-12)).toBe('-12%');
    });

    it('should format zero growth without a sign', () => {
      expect(numbers.formatGrowth(0)).toBe('+0%');
    });
  });
});
