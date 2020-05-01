import { Component } from '@angular/core';
import {MandosService} from '../services/mandos.service';
import {Mando} from '../models/mando.model'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private mandoservice:MandosService) {}

  mandardato(dato){
    console.log(dato);
    const model= new Mando();
    model.estado=dato;
    console.log(model);
    this.mandoservice.insertarmando(model).subscribe(
      (val) => {
        console.log("POST call successful value returned in body", 
                    val);
    },
    response => {
        console.log("POST call in error", response);
    },
    () => {
        console.log("The POST observable is now completed.");
    }
    );
  }

}
