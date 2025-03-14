let alreadyConsultationlist = [];
export class ConsultationManager {
  constructor(customer) {
    this.customer = this.customer;
  }
  registerConsultation(customer) {
    if (!/^010-\d{3,4}-\d{4}$/.test(customer.phone)) {
      return console.log(
        `[상담 등록 오류] ${customer.name}: 잘못된 전화번호 형식입니다.`
      );
    }

    if (alreadyConsultationlist.includes(customer.name)) {
      console.log(
        `[상담 중복 오류] ${customer.name}: 이미 등록된 상담 기록입니다.`
      );
    } else {
      alreadyConsultationlist.push(customer.name);
      this.customer = customer;
      console.log(
        `[상담 등록] ${this.customer.name} - 선호 펫: ${this.customer.pet}`
      );

      setTimeout(() => {
        return console.log(`[저장 완료] ${customer.name} 상담 기록 저장 완료!`);
      }, 1000);
    }
  }

  autoEndConsultation() {
    setTimeout(() => {
      console.log('[상담 기록 저장 종료]');
    }, 5000);
  }
}
