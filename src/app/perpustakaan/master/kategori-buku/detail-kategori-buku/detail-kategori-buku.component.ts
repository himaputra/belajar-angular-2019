import { KategoriBuku } from './../kategori-buku.model';
import { KategoriBukuService } from './../kategori-buku.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-kategori-buku',
  templateUrl: './detail-kategori-buku.component.html',
  styleUrls: ['./detail-kategori-buku.component.css']
})
export class DetailKategoriBukuComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private kategoriBukuService: KategoriBukuService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nama: this.formBuilder.control(''),
      deskripsi: this.formBuilder.control('')
    });

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.kategoriBukuService.findById(kode).subscribe((response: any) => {
        if(response.status == 200) {
          console.log(response.body);
          const value: KategoriBuku = response.body;
          this.formGroup.patchValue({
            id: value.id,
            nama: value.nama,
            deskripsi: value.deskripsi
          });
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'kategori', 'buku']);
        }
      }, error => {
        console.error('Data Error');
      });
    });
  }

}
