import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {


  constructor( private alertController:AlertController) { }

  ngOnInit() {

  }

  async alert(){
  const alert = await this.alertController.create({
    header: 'ALERTA',
    buttons: [
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('se dio click a confirmado');
        },
      },
      {
        text: 'Salir',
        role:'cancel',
        htmlAttributes: {
          'aria-label': 'close',
        },
        handler:() => {
          console.log('se dio click a exit')
        }
      },
    ],
  });
  await alert.present();
}

}
