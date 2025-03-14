class Pet {
  constructor(name, species, vaccinations, healthCheckDate, alreadyWarned) {
    this.name = name;
    this.species = species;
    this.vaccinations = vaccinations;
    this.healthCheckDate = healthCheckDate;
    this.alreadyWarned = alreadyWarned;
  }
  addVaccination(vaccination) {
    if (this.vaccinations.includes(vaccination)) {
      return console.log(
        `[예방접종 중복] ${this.name}: ${vaccination}은 이미 등록되어 있습니다.`
      );
    } else {
      this.vaccinations.push(vaccination);
      return console.log(`[예방접종 추가] ${this.name}: ${vaccination}`);
    }
  }
  updateHealthCheckDate(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = `${year}-${month}-${day}`;
    this.healthCheckDate = date;

    console.log(`[검강검진 업데이트] ${this.name} : ${dateStr}`);
  }
}

class PetHealthManager {
  constructor(pet) {
    this.pet = pet;
  }

  registerPet(pet) {
    this.pet = pet;
    const year = this.pet.healthCheckDate.getFullYear();
    const month = ('0' + (this.pet.healthCheckDate.getMonth() + 1)).slice(-2);
    const day = ('0' + this.pet.healthCheckDate.getDate()).slice(-2);
    const dateStr = `${year}-${month}-${day}`;

    return console.log(
      `[등록] ${this.pet.species} - ${this.pet.name} (예방접종: ${this.pet.vaccinations}, 검강검진: ${dateStr}) `
    );
  }

  checkHealthStatus() {
    let start = new Date().getTime();
    let warncheck = false;
    let timerId = setInterval(() => {
      let diffMilliseconds =
        new Date().getTime() - this.pet.healthCheckDate.getTime();

      let diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

      if (diffDays > 365 && !warncheck) {
        this.pet.alreadyWarned = true;

        console.log(
          `[건강검진 경고] ${this.pet.name}: 1년 이상 건강검진을 받지 않았습니다!`
        );

        warncheck = true;
      }
      let end = new Date().getTime();
      if (end - start >= 10000) {
        clearTimeout(timerId);
        return console.log('[검사 종료]');
      }
    }, 3000);
  }
}

const manager = new PetHealthManager();

// 펫 등록
const pet1 = new Pet('나비', '고양이', ['종합백신'], new Date('2023-03-10'));
manager.registerPet(pet1);

// 예방접종 추가
pet1.addVaccination('광견병');
pet1.addVaccination('광견병'); // 중복 테스트

// 건강 상태 검사 시작
manager.checkHealthStatus();

// 5초 후 건강검진 업데이트 (경고 초기화 테스트)
setTimeout(() => {
  pet1.updateHealthCheckDate(new Date());
}, 5000);
