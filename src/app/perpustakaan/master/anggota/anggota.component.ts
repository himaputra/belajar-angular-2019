import { AnggotaService } from './anggota.service';
import { Component, OnInit } from '@angular/core';
import { Anggota } from './anggota.model';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css']
})
export class AnggotaComponent implements OnInit {

  list: Array<Anggota> = [];
  
  constructor(private anggotaService: AnggotaService) { }

  ngOnInit() {
    this.anggotaService.findAll().subscribe((response: any) => {
      this.list = response;
    }, error => {
      console.log(error);
    });
  }

  removeById(id: string) {
    this.anggotaService.delete(id).subscribe(response => {
      if(response.status == 200) {
        this.ngOnInit();
      }
    });
  }

}
