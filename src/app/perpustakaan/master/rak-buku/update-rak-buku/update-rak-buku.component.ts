import { RakBuku } from './../rak-buku.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RakBukuService } from './../rak-buku.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-rak-buku',
  templateUrl: './update-rak-buku.component.html',
  styleUrls: ['./update-rak-buku.component.css']
})
export class UpdateRakBukuComponent implements OnInit {

  formGroup: FormGroup;
  
  constructor(
    private rakService: RakBukuService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this.formBuilder.control('', [Validators.required]),
      nomor: this.formBuilder.control('', [Validators.required])
    });

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.rakService.findById(kode).subscribe((response: any) => {
        if(response.status == 200) {
          const value: RakBuku = response.body;
          this.formGroup.patchValue(value);
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'rak']);
        }
      }, error => {
        console.log(error);
      });
    });
  }

  send() {
    const value: RakBuku = this.formGroup.value;
    this.rakService.update(value).subscribe((response: any) => {
      if(response.status == 200) {
        alert('Data berhasil diperbarui');
        this.router.navigate(['/', 'perpustakaan', 'master', 'rak']);
      }
    }, error => {
      console.log(error);
    });
  }

}
