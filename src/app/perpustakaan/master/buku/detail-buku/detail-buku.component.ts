import { ActivatedRoute, Router } from '@angular/router';
import { BukuService } from './../buku.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from '@angular/core/src/render3/util';
import { Buku } from '../buku.model';

@Component({
  selector: 'app-detail-buku',
  templateUrl: './detail-buku.component.html',
  styleUrls: ['./detail-buku.component.css']
})
export class DetailBukuComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private bukuService: BukuService,
    private formBuilder: FormBuilder,
    private acitivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nama: this.formBuilder.control(''),
      isbn: this.formBuilder.control(''),
      tahunTerbit: this.formBuilder.control(''),
      daftarKategori: this.formBuilder.array([]),
      rak: this.formBuilder.group({
        id: this.formBuilder.control('')
      })
    });

    this.acitivatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.bukuService.findById(kode).subscribe((response: any) => {
        if (response.status == 200) {
          const value: Buku = response.body;
          this.formGroup.patchValue(value);
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'buku']);
        }
      }, error => {
        console.log(error);
      });
    });
  }

}
