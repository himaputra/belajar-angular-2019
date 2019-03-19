import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {

  pelangganFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.pelangganFormGroup = new FormGroup({
      'id': new FormControl(),
      'nama': new FormControl(),
      'alamat': new FormControl()
    });
  }

  handler(event: any) {
    console.log(this.pelangganFormGroup.value);
  }
}
