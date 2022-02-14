export interface hotel {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: number[];
  bookedDates: string[];
  price: number;
}

export type hotels = hotel[];

export function cloneDate(date: Date): Date;

export function addDays(date: Date, days: number): any;

export const backendPort: number;
export const localStorageKey: string;

export class FlatRentSdk {
  database: hotels;

  /**
   * Get flat by ID.
   *
   * @param {string} id Flat ID.
   * @returns {Promise<Object|null>} Flat.
   */
  get(id: string): Promise<hotel | null>;

  /**
   * Search for flats.
   *
   * @param {Object} parameters Search parameters
   * @param {string}parameters.city City name
   * @param {Date} parameters.checkInDate Check-in date
   * @param {Date} parameters.checkOutDate Check-out date
   * @param {number} [parameters.priceLimit] Max price for a night
   * @returns {Object[]} List of suitable flats.
   */
  search(parameters: {
    city: string;
    checkInDate: Date;
    checkOutDate: Date;
    priceLimit?: number;
  }): hotels[] | Error;

  /**
   * Book flat.
   *
   * @param {number} flatId
   * @param {Date} checkInDate
   * @param {Date} checkOutDate
   * @returns {number}
   */
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;

  private _assertDatesAreCorrect(checkInDate: any, checkOutDate: any): void;

  private _resetTime(date: Date): void;

  private _calculateDifferenceInDays(startDate: Date, endDate: Date): number;

  private _generateDateRange(from: any, to: any): Date[];

  private _generateTransactionId: () => number;

  private _areAllDatesAvailable(flat: hotel, dateRange: Date[]): boolean;

  private _formatFlatObject(flat: hotel, nightNumber: number): hotel;

  private _readDatabase(): hotels | null;

  private _writeDatabase(database: hotels): void;

  private _syncDatabase(database: hotels): void;
}
