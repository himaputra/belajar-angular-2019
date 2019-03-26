import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../list.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() dataDiri: Model[];
  constructor() { }

  ngOnInit() {
  }

}
