import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-nuevocontacto',
  templateUrl: './nuevocontacto.page.html',
  styleUrls: ['./nuevocontacto.page.scss'],
})
export class NuevocontactoPage implements OnInit {


  nuevoContacto = {} as Contacto;
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }
nuevo(){};
}
