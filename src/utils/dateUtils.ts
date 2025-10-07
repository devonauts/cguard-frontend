/**
 * Date utilities to replace moment.js functionality
 * Using native Date API and date-fns for better performance
 */
import { format, parseISO, isValid, parse } from 'date-fns';

export const dateUtils = {
  /**
   * Check if a value is a Date object or a valid date string
   */
  isDate(value: any): boolean {
    return value instanceof Date || 
           (typeof value === 'string' && isValid(parseISO(value)));
  },

  /**
   * Convert a value to ISO string format
   */
  toISOString(value: any): string {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (typeof value === 'string' && isValid(parseISO(value))) {
      return parseISO(value).toISOString();
    }
    return new Date(value).toISOString();
  },

  /**
   * Format a date using date-fns
   */
  format(date: Date | string, formatString: string = 'yyyy-MM-dd'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatString);
  },

  /**
   * Parse a date string
   */
  parse(dateString: string, formatString?: string): Date {
    if (formatString) {
      return parse(dateString, formatString, new Date());
    }
    return parseISO(dateString);
  },

  /**
   * Check if a date is valid
   */
  isValid(date: any): boolean {
    if (date instanceof Date) {
      return isValid(date);
    }
    if (typeof date === 'string') {
      return isValid(parseISO(date));
    }
    return false;
  }
};