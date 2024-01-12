class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('자자 - 버스 안에서');
  }
}

class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age);
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log('가르친다');
  }
}

class Student extends Person {
  constructor(name, age, stuNo, grade) {
    super(name, age);
    this.stuNo = stuNo;
    this.grade = grade;
  }
  study() {
    console.log('공부한다');
  }
  // 오버라이딩 -> 부모의 메서드를 자식이 재정의 하는 것
  eat() {
    console.log('급식 먹자');
  }
}

const Kim = new Person('김', 20)
console.log(Kim);
const Lee = new Student('이', 15, 20200112, 5)
console.log(Lee);
const Park = new Teacher('박', 30, 12341234)
console.log(Park);

Kim.eat();
Lee.eat();
Park.teach();

// console.dir(globalThis)

function test() {
  console.log(globalThis === this);
  console.log(this);
}
test()