import { Component, OnInit } from '@angular/core';
import { Model as Data} from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() { 
    let value = new Data();
    value._nama = "Himawan Eka Putra";
    value.umur = 22;
    value.alamat = "Cimahi";
    value.active = true;
    this.list.push(value);

    value = new Data();
    value._nama = "Dimas Maryanto";
    value.umur = 26;
    value.alamat = "Cibiru";
    value.active = true;
    this.list.push(value);
  }

  list: Array<Data> = [];
}
