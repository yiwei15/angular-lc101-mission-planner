import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5, quantity:0},
       {name: 'Space Camera', mass: 20, quantity:0},
       {name: 'Food', mass: 150, quantity:0},
       {name: 'Oxygen Tanks', mass: 400, quantity:0},
       {name: 'AE-35 Unit', mass: 5, quantity:0},
       {name: 'ISS Supplies', mass: 800, quantity:0},
       {name: 'Water', mass: 250, quantity:0},
       {name: 'Satellite', mass: 1200, quantity:0},
       {name: 'R2 Unit', mass: 32, quantity:0}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   changeColor: boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item:object)  {
      let index = this.equipmentItems.indexOf(item);
      this.equipmentItems[index]['quantity'] +=1;
      this.cargoHold.push(item);
      this.cargoMass += item["mass"];
      let massBudgetRemaining = this.maximumAllowedMass - this.cargoMass;
      return massBudgetRemaining <= 200;
   }

   reset()  {
    this.cargoHold= [];
    this.cargoMass= 0;
    this.changeColor = false;
    for (let i=0; i<this.equipmentItems.length; i++)  {
      this.equipmentItems[i]['quantity']=0;
    }
   }  
}
