import { Component, OnInit } from '@angular/core';
import { BukuService } from './buku.service';
import { Buku } from './buku.model';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  list: Array<Buku> = [];

  constructor(private bukuService: BukuService) { }

  ngOnInit() {
    this.bukuService.findAll().subscribe((response: any) => {
      this.list = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
