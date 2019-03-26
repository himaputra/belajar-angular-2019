import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RakBukuService } from './../rak-buku.service';
import { Component, OnInit } from '@angular/core';
import { RakBuku } from '../rak-buku.model';

@Component({
  selector: 'app-detail-rak-buku',
  templateUrl: './detail-rak-buku.component.html',
  styleUrls: ['./detail-rak-buku.component.css']
})
export class DetailRakBukuComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private rakService: RakBukuService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nama: this.formBuilder.control(''),
      nomor: this.formBuilder.control('')
    });

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.rakService.findById(kode).subscribe((response: any) => {
        if(response.status == 200) {
          const value: RakBuku = response.body;
          this.formGroup.patchValue({
            id: value.id,
            nama: value.nama,
            nomor: value.nomor
          });
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'rak'])
        }
      }, error => {
        console.error('Data Error');
      });
    });
  }

}
