import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent implements OnInit {

  produkFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.produkFormGroup = new FormGroup({
      'id': new FormControl(),
      'toko': new FormControl(),
      'nama': new FormControl(),
      'harga': new FormControl(),
      'kuantitas': new FormControl()

    });
  }

  handler(event: any) {
    console.log(this.produkFormGroup.value);
  }

}
