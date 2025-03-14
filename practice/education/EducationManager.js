import fs from 'fs/promises';

export class EducationManager {
  list = [];
  constructor(program) {
    this.program = program;
  }
  registerProgram(program) {
    this.program = program;
    this.list.push({
      title: program.title,
      description: program.description,
      isCompleted: false,
    });
    return console.log(`[등록 완료] 교육 과정: ${program.title}`);
  }
  completeProgramWithFunction = function (title) {
    for (let i in this.list) {
      if (i.title == title) {
        i.isCompleted = true;
      }
    }
    console.log(`[이수 완료 - 일반 함수] ${title}`);
  };
  completeProgramWithArrowFunction = (title) => {
    for (let i of this.list) {
      if (i.title == title) {
        i.isCompleted = true;
      }
    }
    console.log(`[이수 완료 - 화살표 함수] ${title}`);
  };

  saveToFile() {
    fs.appendFile(
      './education_records.json',
      JSON.stringify(this.list),
      (err) => {
        if (err) {
          return console.error(err);
        }
      }
    );
    console.log('[파일 저장 완료] 교육 기록이 파일로 저장되었습니다.');
  }
}
