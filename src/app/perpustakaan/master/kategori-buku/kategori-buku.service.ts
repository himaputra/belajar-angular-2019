import { KategoriBuku } from './kategori-buku.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KategoriBukuService {

  constructor(private _httpClient: HttpClient) { }

  findAll() {
    return this._httpClient.get('/api/kategori/buku/json/list');
  }

  findById(id: string) {
    return this._httpClient.get(`/api/kategori/buku/${id}`, {observe: 'response'});
  }

  save(kategori: KategoriBuku) {
    return this._httpClient.post('/api/kategori/buku/', kategori, {observe: 'response'});
  }

  update(kategori: KategoriBuku) {
    return this._httpClient.put('/api/kategori/buku/', kategori, {observe: 'response'});
  }

  delete(id: string) {
    return this._httpClient.delete(`/api/kategori/buku/${id}`, {observe: 'response'});
  }
}
