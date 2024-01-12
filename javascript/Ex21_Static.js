// 객체끼리 공유하는 자원, 객체 생성하지 않고 바로 접근

// Student 클래스 만들어서 속성 id, name 만들기
// printInfo 시 id, name 출력

class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id,
      this.name = name,
      Student.count++
  }
  printInfo = () => {
    console.log(`id = ${id}`);
    console.log(`name = ${name}`);
  }
  static getTotalStudent = () => {
    console.log(`총 학생수는 ${Student.count} 명`);
  }
}

const stu1 = new Student(2019122104, 'Park')
const stu2 = new Student(2019206028, 'Kim')
const stu3 = new Student(2019153237, 'Lee')
Student.getTotalStudent()
console.log(stu1);
console.log(stu2);
console.log(stu3);