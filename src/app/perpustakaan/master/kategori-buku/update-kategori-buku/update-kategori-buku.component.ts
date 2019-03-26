import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { KategoriBuku } from './../kategori-buku.model';
import { KategoriBukuService } from './../kategori-buku.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-kategori-buku',
  templateUrl: './update-kategori-buku.component.html',
  styleUrls: ['./update-kategori-buku.component.css']
})
export class UpdateKategoriBukuComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private kategoriBukuService: KategoriBukuService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this.formBuilder.control('', [Validators.required]),
      deskripsi: this.formBuilder.control('')
    });

    this.activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this.kategoriBukuService.findById(kode).subscribe((response: any) => {
        if(response.status == 200) {
          console.log(response.body);
          const value: KategoriBuku = response.body;
          this.formGroup.patchValue(value);
        } else {
          this.router.navigate(['/', 'perpustakaan', 'master', 'kategori', 'buku']);
        }
      }, error => {
        console.error('Data error');
      });
    });
  }

  send(events: any) {
    const value: KategoriBuku = this.formGroup.value;
    this.kategoriBukuService.update(value).subscribe((response: any) => {
      if(response.status == 200) {
        this.router.navigate(['/', 'perpustakaan', 'master', 'kategori', 'buku']);
      }
    }, error => {
      console.error(error);
    });
  }

}
