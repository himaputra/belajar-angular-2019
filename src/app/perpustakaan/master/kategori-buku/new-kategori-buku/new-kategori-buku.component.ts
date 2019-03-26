import { KategoriBuku } from './../kategori-buku.model';
import { KategoriBukuService } from './../kategori-buku.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-kategori-buku',
  templateUrl: './new-kategori-buku.component.html',
  styleUrls: ['./new-kategori-buku.component.css']
})
export class NewKategoriBukuComponent implements OnInit {

  kategoriFormGroup: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  constructor(private _kategoriBukuService: KategoriBukuService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.kategoriFormGroup = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this.formBuilder.control('', [Validators.required]),
      deskripsi: this.formBuilder.control('')
    });
  }
  
  send(events: any) {
    const data: KategoriBuku = this.kategoriFormGroup.value;
    this._kategoriBukuService.save(data).subscribe(response => {
      if(response.status == 200) {
        alert('Data berhasil disimpan');
        this.submitted.emit('berhasil');
      }
    });
  }
}
