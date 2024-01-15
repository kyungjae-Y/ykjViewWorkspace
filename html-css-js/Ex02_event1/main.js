const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const loc = document.querySelector('.loc');

document.addEventListener('mousemove', e => {
  // 해당 이벤트의 노드객체를 알 수 있다
  console.log(e.currentTarget);
  const x = e.clientX;
  const y = e.clientY;
  console.log(`x : ${x} y : ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  loc.style.left = `${x}px`;
  loc.style.top = `${y}px`;
  loc.innerHTML = `x : ${x} ,y : ${y}`;
})