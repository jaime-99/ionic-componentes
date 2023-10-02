import { Component, OnInit } from '@angular/core';

interface componente {
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  componentes:componente[]=[

    {
      icon:'american-football',
      name:'Action-Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'logo-apple',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'happy-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'accessibility-outline',
      name:'Button',
      redirectTo:'/button'
    },
    {
      icon:'game-controller-outline',
      name:'Card',
      redirectTo:'/ion-card'
    },
  ];







}
