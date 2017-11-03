function shrink() {
  console.log('Wee');
  const test = document.querySelector('.main');
  test.classList.add('colorchange');
}

main.addEventListener('keydown', shrink);
