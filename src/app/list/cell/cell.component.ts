import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Model } from '../list.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() dataPribadi: Model;
  @Input() jabatan: string;
  @Output() clicked = new EventEmitter<string>();
  @Output() clicked2 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handle() {
    this.clicked.emit(this.dataPribadi._nama);
  }

  handle2(event) {
    this.clicked2.emit(event);
  }

}
