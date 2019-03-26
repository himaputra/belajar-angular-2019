import { Anggota } from './anggota.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnggotaService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get('/api/anggota/json/list');
  }

  findById(id: string) {
    return this.httpClient.get(`/api/anggota/${id}`, {observe: 'response'});
  }

  save(anggota: Anggota) {
    return this.httpClient.post('/api/anggota/', anggota, {observe: 'response'});
  }

  update(anggota: Anggota) {
    return this.httpClient.put('/api/anggota/', anggota, {observe: 'response'});
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/anggota/${id}`, {observe: "response"});
  }
}
