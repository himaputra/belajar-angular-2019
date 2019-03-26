import { RakBuku } from './../rak-buku.model';
import { RakBukuService } from './../rak-buku.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-rak-buku',
  templateUrl: './new-rak-buku.component.html',
  styleUrls: ['./new-rak-buku.component.css']
})
export class NewRakBukuComponent implements OnInit {

  formGroup: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  constructor(
    private rakService: RakBukuService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this.formBuilder.control('', [Validators.required]),
      nomor: this.formBuilder.control('', [Validators.required])
    });
  }

  send() {
    const data: RakBuku = this.formGroup.value;
    this.rakService.save(data).subscribe(response => {
      if(response.status == 200) {
        alert('Data berhasil disimpan');
        this.submitted.emit('berhasil');
      }
    });
  }
}
