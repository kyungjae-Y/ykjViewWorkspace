// 접근제어자 - 캡슐화 => private getter setter

class Student {
  static count = 0;
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    Student.count++
  }

  static fromObject(object) {
    if (!!object?.id && !!object?.name) {
      return new Student(object.id, object.name)
    }
  }
  static fromList(list) {
    if (!Array.isArray(list)) return null
    return new Student(list[0], list[1])
  }

  #getName = () => this.#name

  get name() {
    return this.#name
  }

  set name(name) {
    this.#name = name
  }

  get id() {
    return this.#id
  }

  // set id(id) {
  //   this.#id = id
  // }
}

const stu1 = new Student(2019122104, 'Park')
const stu2 = new Student(2019206028, 'Kim')
const stu3 = new Student(2019153237, 'Lee')
console.log(stu1);
console.log(stu1.name);

const stu4 = Student.fromObject({
  name: '홍길동',
  id: 1234123
})
console.log(stu4 instanceof Student);

const stu5 = Student.fromList([12341234, '둘리'])
console.log(stu5);