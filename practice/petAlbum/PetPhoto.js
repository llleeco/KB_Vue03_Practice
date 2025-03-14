import { Pet } from './Pet.js';

export class PetPhoto extends Pet {
  constructor(name, species, adoptionDate, photoPath, recordDate) {
    super(name, species, adoptionDate);
    this.photoPath = photoPath;
    this.recordDate = recordDate;
  }
}
