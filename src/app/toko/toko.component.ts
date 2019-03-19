import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toko',
  templateUrl: './toko.component.html',
  styleUrls: ['./toko.component.css']
})
export class TokoComponent implements OnInit {

  tokoFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.tokoFormGroup = new FormGroup({
      'id': new FormControl(),
      'nama': new FormControl(),
      'alamat': new FormControl()
    });

  }

  handler(event: any) {
    console.log(this.tokoFormGroup.value);
  }
}
