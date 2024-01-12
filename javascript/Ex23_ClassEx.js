// Counter 라는 클래스를 만들고 value 변수를 캡슐화하기
// public increase() 메서드 통해서 value 값 증가시키기
// 예외조건 set 통해서 value 수정할 때 음수값은 들어가지 않게 설정
// 음수가 들어오면 기본값 0으로 변경

class Counter {
  #value;
  constructor(value) {
    if (value < 0 || isNaN(value)) {
      console.log('올바르지 않은 값 범위');
      this.#value = 0;
    } else {
      this.#value = value
    }
  }
  static createCounter(value) {
    if (isNaN(value)) return null
    if (value < 0) {
      console.log('음수값은 넣을 수 없습니다')
      return null
    }
    return new Counter(value)
  }

  get value() {
    return this.#value
  }

  set value(value) {
    this.#value = value < 0 ? 0 : value;
  }

  increase() {
    this.#value++
  }
}

const counter1 = new Counter(-100)

const counter = new Counter(5)
console.log(counter);
console.log(counter.value);
counter.increase()
counter.increase()
counter.increase()
console.log(counter.value);

counter.value = -100
console.log(counter.value);