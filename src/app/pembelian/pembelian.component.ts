import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  pembelianFormGroup: FormGroup;
  
  ngOnInit() {
    this.pembelianFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        id: this.formBuilder.control('')
      }),
      items: this.formBuilder.array([])
    });
  }

  addItems() {
    let item = this.formBuilder.group({
      item: this.formBuilder.group({
        id: this.formBuilder.control('')
      }),
      qty: this.formBuilder.control(0),
      price: this.formBuilder.control(0)
    });
    this.items.push(item);
  }

  get items(): FormArray {
    return this.pembelianFormGroup.get('items') as FormArray;
  }

  submited() {
    console.log(this.pembelianFormGroup);
  }
}
