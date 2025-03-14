import fs from 'fs/promises';
export class PetAlbumManager {
  list = [];
  constructor(pet) {
    this.pet = pet;
  }
  addRecord(pet) {
    this.pet = pet;

    console.log(`[등록 완료] ${pet.name}: Photo가 등록되었습니다.`);

    fs.appendFile('pet_album.json', data, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('[파일 저장 완료] 앨범 기록이 파일로 저장되었습니다.');
    });
  }
}
