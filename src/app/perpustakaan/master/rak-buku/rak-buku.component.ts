import { RakBukuService } from './rak-buku.service';
import { Component, OnInit } from '@angular/core';
import { RakBuku } from './rak-buku.model';

@Component({
  selector: 'app-rak-buku',
  templateUrl: './rak-buku.component.html',
  styleUrls: ['./rak-buku.component.css']
})
export class RakBukuComponent implements OnInit {

  listRak: Array<RakBuku> = [];
  
  constructor(private rakService: RakBukuService) { }

  ngOnInit() {
    this.rakService.findAll().subscribe(
      (response: any) => {
        this.listRak = response;
      }, error => {
        console.log(error);
      }
    );
  }

  removeById(id: string) {
    this.rakService.delete(id).subscribe(response => {
      if(response.status == 200) {
        this.ngOnInit();
      }
    });
  }

}
