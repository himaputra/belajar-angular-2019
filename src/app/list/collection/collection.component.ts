import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  imageUrl = "https://cdn.pixabay.com/photo/2017/12/29/18/47/nature-3048299__340.jpg";
  clicked = 0;

  keyboardInput: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  handleWithClick() {
    this.clicked++;
  }

  inputKeyboard(event: any) {
    console.log(event);
    this.keyboardInput = event.target.value;
  }

}
