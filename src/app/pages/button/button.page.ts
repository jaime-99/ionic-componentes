import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  heart=false;

  constructor() { }

  ngOnInit() {

  }

  llenarCorazon(){
    this.heart = !this.heart // si esta en true pasa a false y si esta en false pasa a true
    console.log(this.heart)
  }



}
