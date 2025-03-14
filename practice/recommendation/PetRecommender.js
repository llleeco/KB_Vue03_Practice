import fs from 'fs/promises';

export class PetRecommender {
  list = [];
  constructor(recommendedPet, customer) {
    this.recommendedPet = recommendedPet;
    this.customer = customer;
  }

  recommendPet(customer) {
    this.customer = customer;
    if (
      customer.lifestyle == '활동적' &&
      customer.housing == '단독주택' &&
      customer.familyMembers == '어린이 없음'
    ) {
      this.recommendedPet = '골든 리트리버';
    } else if (
      customer.lifestyle == '조용한' &&
      customer.housing == '아파트' &&
      customer.familyMembers == '어린이 있음'
    ) {
      this.recommendedPet = '고양이';
    }

    this.list.push({
      name: this.customer.name,
      recommendedPet: this.recommendedPet,
    });
  }
  saveToFile() {
    fs.appendFile(
      './pet_recommendations.json',
      JSON.stringify(this.list),
      (err) => {
        if (err) {
          return console.error(err);
        }
      }
    );
  }
}
