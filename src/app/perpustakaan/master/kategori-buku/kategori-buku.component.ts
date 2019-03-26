import { Component, OnInit } from '@angular/core';
import { KategoriBuku } from './kategori-buku.model';
import { KategoriBukuService } from './kategori-buku.service';

@Component({
  selector: 'app-kategori-buku',
  templateUrl: './kategori-buku.component.html',
  styleUrls: ['./kategori-buku.component.css']
})
export class KategoriBukuComponent implements OnInit {

  list: Array<KategoriBuku> = [];

  constructor(private _kategoriBukuService: KategoriBukuService) { }

  ngOnInit() {
    this._kategoriBukuService.findAll().subscribe(
      (response: any) => {
        this.list = response;
      }, error => {
        console.log(error);
      }
    );
  }

  detailData(id: string) {
    this._kategoriBukuService.findById(id).subscribe(
      (response: any) => {
        console.log(response);
        if(response.status == 200) {
          console.log(response.body);
        } else {
          alert(`Data kategori buku dengan ${id} tidak ditemukan!`);
        }
      }, error => {
        console.log(error);
      }
    )
  }

  removeById(id: string) {
    this._kategoriBukuService.delete(id).subscribe(response => {
      if(response.status == 200) {
        this.ngOnInit();
      }
    });
  }
}
