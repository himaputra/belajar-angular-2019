import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get('/api/transaksi');
  }
}
