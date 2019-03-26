import { Component, OnInit } from '@angular/core';
import { DataMahasiswaService } from '../data-mahasiswa.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  list: Array<string>;

  constructor(private dataService: DataMahasiswaService) { }

  ngOnInit() {
    this.list = this.dataService.list;
  }

}
