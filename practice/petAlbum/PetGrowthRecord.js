import { Pet } from './Pet.js';

export class PetGrowthRecord extends Pet {
  constructor(name, species, adoptionDate, description, recordDate) {
    super(name, species, adoptionDate);
    this.description = description;
    this.recordDate = recordDate;
  }
}
