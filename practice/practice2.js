class Item {
  constructor(name, type, stock, alreadyWarned) {
    this.name = name;
    this.type = type;
    this.stock = stock;
    this.alreadyWarned = alreadyWarned;
  }
}
class InventoryManager {
  constructor(item) {
    this.item = item;
  }
  addItem(item) {
    this.item = item;
    return console.log(
      `[추가] ${item.type} - ${item.name} (재고: ${item.stock}개)`
    );
  }
  updateStock(name, newStock) {
    if (newStock < 0) {
      return console.log('[업데이트 오류] 재고는 0 이상이어야 합니다');
    }

    console.log(`[업데이트] ${name} 재고: ${newStock}개`);
    if (newStock < 5) {
      this.item.stock = newStock;
      this.item.alreadyWarned = true;
      console.log(`[재고 부족 경고] ${name}: 재고가 5개 미만입니다!`);
    } else {
      this.item.stock = newStock;
      this.item.alreadyWarned = false;
    }

    return;
  }
  checkStock() {
    let warncheck = false;
    let start = new Date().getTime();
    let timerId = setInterval(() => {
      if (this.item.alreadyWarned && !warncheck) {
        console.log(`[자동경고] ${this.item.name}: 재고가 5개 미만입니다!`);
        warncheck = true;
      }
      let end = new Date().getTime();
      if (end - start >= 5000) {
        clearTimeout(timerId);
        return console.log('[재고 검사 종료]');
      }
    }, 1000);
  }
}

const inventory = new InventoryManager();

// 아이템 등록
const item1 = new Item('고급 고양이 사료', '사료', 10);
inventory.addItem(item1);

// 재고 업데이트
inventory.updateStock('고급 고양이 사료', 4); // 5개 미만 → 경고 발생
inventory.updateStock('고급 고양이 사료', -1); // 음수 입력 → 오류 발생

// 재고 상태 검사 시작 (5초 후 종료)
inventory.checkStock();
