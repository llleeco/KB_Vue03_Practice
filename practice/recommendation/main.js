import { Customer } from './Customer.js';
import { PetRecommender } from './PetRecommender.js';

const recommender = new PetRecommender();

const customer1 = new Customer('홍길동', '활동적', '단독주택', '어린이 없음');
const customer2 = new Customer('이몽룡', '조용한', '아파트', '어린이 있음');

recommender.recommendPet(customer1);
recommender.recommendPet(customer2);
await recommender.saveToFile();
