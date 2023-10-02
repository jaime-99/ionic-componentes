import { Component, OnInit } from '@angular/core';


interface tipo {
    name:string;
    selected:boolean;

}

@Component({
  selector: 'app-chec-box',
  templateUrl: './chec-box.page.html',
  styleUrls: ['./chec-box.page.scss'],
})
export class ChecBoxPage implements OnInit {

  constructor() { }


  data = [

    {
      name:'primary',
      selected:true
    },
    {
      name: 'danger',
      selected:false
    },

    {
      name:'primary',
      selected:true
    },
    {
      name:'danger',
      selected:false

    }


  ]


  ngOnInit() {
  }


  onclick(item:tipo){
    console.log(item)
  }

  verData (){
    console.log(this.data);
  }
}
