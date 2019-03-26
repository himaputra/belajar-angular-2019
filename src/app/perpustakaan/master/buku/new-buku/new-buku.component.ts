import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { BukuService } from './../buku.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { Buku } from '../buku.model';

@Component({
  selector: 'app-new-buku',
  templateUrl: './new-buku.component.html',
  styleUrls: ['./new-buku.component.css']
})
export class NewBukuComponent implements OnInit {

  formGroup: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  constructor(
    private bukuService: BukuService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nama: this.formBuilder.control(''),
      isbn: this.formBuilder.control(''),
      tahunTerbit: this.formBuilder.control(''),
      daftarKategori: this.formBuilder.array([]),
      rak: this.formBuilder.group({
        id: this.formBuilder.control('')
      })
    });
  }

  addKategori() {
    this.kategori.push(this.formBuilder.group({
      id: this.formBuilder.control('')
    }));
  }

  removeKategori(index: number) {
    this.kategori.removeAt(index);
  }

  get kategori(): FormArray {
    return this.formGroup.get('daftarKategori') as FormArray;
  }

  send() {
    const data: Buku = this.formGroup.value;
    this.bukuService.save(data).subscribe((response: any) => {
      if(response.status == 200) {
        alert('Data berhasil disimpan');
        this.submitted.emit('Berhasil');
      }
    });
  }

}
