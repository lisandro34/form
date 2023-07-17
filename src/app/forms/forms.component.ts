import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  selectedItems:string[]= [];

  Datos: Array<any> = [
    { name: 'Taller vehicular', checked: false, id: "0" },
    { name: 'Repuestero', checked: false, id: "1" },
    { name: 'Cristales / Cerrajeria', checked: false, id: "2" },
    { name: 'Serv. Tecnico Electrodomesticos', checked: false, id: "3" },
    { name: 'Estudio Investigador', checked: false, id: "4" },
    { name: 'Estudio Liquidador', checked: false, id: "5" },
    { name: 'Estudio Juridico', checked: false, id: "6" },
    { name: 'Clinicas y sanitarios', checked: false, id: "7" },
    { name: 'Otros', checked: false, id: "8" }
  ];

  getDatosId(e:any, id:string){
    if(e.target.checked){
        this.selectedItems.push(id);
        console.log(this.selectedItems);
      
    }
    // else{
    //     console.log(id + 'Uncheched'); 
    //     this.selectedItems = this.selectedItems.filter(m=>m!=id);
    // }

    console.log('seleccionaste: ' + this.selectedItems);
}

}
