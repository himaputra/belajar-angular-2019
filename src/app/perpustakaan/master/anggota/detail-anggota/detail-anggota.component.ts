import { Anggota } from './../anggota.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnggotaService } from './../anggota.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-anggota',
  templateUrl: './detail-anggota.component.html',
  styleUrls: ['./detail-anggota.component.css']
})
export class DetailAnggotaComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private anggotaService: AnggotaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nama: this.formBuilder.control(''),
      ttl: this.formBuilder.control(''),
      jenisKelamin: this.formBuilder.control(''),
      alamat: this.formBuilder.control('')
    });

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.anggotaService.findById(kode).subscribe((response: any) => {
        if(response.status == 200) {
          const value: Anggota = response.body;
          this.formGroup.patchValue({
            id: value.id,
            nama: value.nama,
            ttl: value.ttl,
            jenisKelamin: value.jenisKelamin,
            alamat: value.alamat
          });
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'anggota'])
        }
      }, error => {
        console.error('Data error');
      });
    });
  }

}
