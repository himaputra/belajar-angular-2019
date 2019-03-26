import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataMahasiswaService } from '../data-mahasiswa.service';
import { Mahasiswa } from '../mahasiswa.model';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  formGroup: FormGroup;
  list: string[];

  constructor(private dataService: DataMahasiswaService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'namaLengkap': new FormControl('')
    });
    this.list = this.dataService.list;
  }

  kirim() {
    let value: Mahasiswa = this.formGroup.value;
    this.dataService.addItem(value.namaLengkap);
  }

}
