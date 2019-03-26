import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BukuService } from './../buku.service';
import { Component, OnInit } from '@angular/core';
import { Buku } from '../buku.model';

@Component({
  selector: 'app-update-buku',
  templateUrl: './update-buku.component.html',
  styleUrls: ['./update-buku.component.css']
})
export class UpdateBukuComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private bukuService: BukuService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
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

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.bukuService.findById(kode).subscribe((response: any) => {
        if (response.status == 200) {
          const value: Buku = response.body;
          this.formGroup.patchValue({
            id: value.id,
            nama: value.nama,
            isbn: value.isbn,
            tahunTerbit: value.tahunTerbit,
            daftarKategori: value.daftarKategori,
            rak: value.rak.id
          });
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'buku']);
        }
      }, error => {
        console.log(error);
      });
    });
  }

}
