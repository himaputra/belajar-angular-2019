import { ActivatedRoute, Router } from '@angular/router';
import { AnggotaService } from './../anggota.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Anggota } from '../anggota.model';

@Component({
  selector: 'app-update-anggota',
  templateUrl: './update-anggota.component.html',
  styleUrls: ['./update-anggota.component.css']
})
export class UpdateAnggotaComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private anggotaService: AnggotaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this.formBuilder.control('', [Validators.required]),
      ttl: this.formBuilder.control('', [Validators.required]),
      jenisKelamin: this.formBuilder.control('', [Validators.required]),
      alamat: this.formBuilder.control('')
    });

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.anggotaService.findById(kode).subscribe((response: any) => {
        if(response.status == 200) {
          const value: Anggota = response.body;
          this.formGroup.patchValue(value);
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'anggota'])
        }
      }, error => {
        console.log(error);
      });
    });
  }

  send() {
    const value: Anggota = this.formGroup.value;
    this.anggotaService.update(value).subscribe((response: any) => {
      if(response.status == 200) {
        alert('Data berhasil diperbarui');
        this.router.navigate(['/', 'perpustakaan', 'master', 'anggota']);
      }
    }, error => {
      console.log(error);
    });
  }

}
