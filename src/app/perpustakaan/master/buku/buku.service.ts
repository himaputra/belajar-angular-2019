import { Buku } from './buku.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get('/api/buku/json/list');
  }

  findById(id: string) {
    return this.httpClient.get(`/api/buku/${id}`, {observe: "response"});
  }

  save(buku: Buku) {
    return this.httpClient.post('/api/buku/', buku, {observe: "response"});
  }
}
