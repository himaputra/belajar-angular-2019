import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RakBuku } from './rak-buku.model';

@Injectable({
  providedIn: 'root'
})
export class RakBukuService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get('/api/rak/list');
  }

  findById(id: string) {
    return this.httpClient.get(`/api/rak/${id}`, {observe:'response'});
  }

  save(rak: RakBuku) {
    return this.httpClient.post('/api/rak/', rak, {observe: 'response'});
  }

  update(rak: RakBuku) {
    return this.httpClient.put('/api/rak/', rak, {observe: 'response'});
  }

  delete(id: string) {
    return this.httpClient.delete(`api/rak/${id}`, {observe: 'response'});
  }
}
