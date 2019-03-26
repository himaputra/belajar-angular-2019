import { Component, OnInit } from '@angular/core';
import { Model as Data} from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  counterClick: number = 0;
  jabatan: string = "Trainer";

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

  clickHandler(events: any) {
    this.counterClick++;
    console.log(events);
  }

  clickHandler2(events: any) {
    console.log(events.data);
  }
}
