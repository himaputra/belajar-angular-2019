import { TransaksiService } from './transaksi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent implements OnInit {

  
  constructor(
    private transaksiService: TransaksiService
    ) { }

  ngOnInit() {
  }

}
