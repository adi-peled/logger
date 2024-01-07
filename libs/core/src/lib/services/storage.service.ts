import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getFromLocalStorage(key: string) {
    const data = localStorage.getItem(key) || '';
    return data ? JSON.parse(data) : null;
  }
}
