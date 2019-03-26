import { Anggota } from './../anggota.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnggotaService } from '../anggota.service';

@Component({
  selector: 'app-new-anggota',
  templateUrl: './new-anggota.component.html',
  styleUrls: ['./new-anggota.component.css']
})
export class NewAnggotaComponent implements OnInit {

  formGroup: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  constructor(
    private anggotaService: AnggotaService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control('',[Validators.required, Validators.minLength(3)]),
      nama: this.formBuilder.control('', [Validators.required]),
      ttl: this.formBuilder.control('', [Validators.required]),
      jenisKelamin: this.formBuilder.control('', [Validators.required]),
      alamat: this.formBuilder.control('')
    });
  }

  send() {
    const data: Anggota = this.formGroup.value;
    this.anggotaService.save(data).subscribe(response => {
      if(response.status == 200) {
        alert('Data berhasl disimpan');
        this.submitted.emit('berhasil');
      }
    })
  }
}