export class Storage {
  static set(key: string, value: unknown) {
    const _val: string = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, _val);
  }

  static get<T>(key: string): T | null {
    const _val: string | null = localStorage.getItem(key);
    return _val === null ? _val : (JSON.parse(_val) as T);
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
