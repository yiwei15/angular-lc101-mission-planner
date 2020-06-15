import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments:object[]= [
    {name: 'Habitat dome'}, 
    {name: 'Drones'}, 
    {name: 'Food containers'}, 
    {name: 'Oxygen tanks'}
  ]; 

  constructor() { }

  ngOnInit() {
  }

  addEquipment (newEquipmentVal: string) {
    this.equipments.push({name:newEquipmentVal});
  }
  equipmentBeingEdited: object = null;

  editClick(equipment: object)  {
    this.equipmentBeingEdited = equipment;
  }

  save(updatedEquipmentVal: string, equipment: object)  {
    equipment['name'] = updatedEquipmentVal;
    this.equipmentBeingEdited = null;
  }
}
