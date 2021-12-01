const hex = document.querySelector('.hex');
const newcolor = document.querySelector('.newcolor');


const randomColor = () => {
  const hexColor = Math.random().toString(16).substring(2, 8);

  document.body.style.backgroundColor = `#${hexColor}`;
  hex.innerHTML = `#${hexColor}`;
};

document.addEventListener('keyup', keyevent => {
    if (keyevent.code === 'Space') {
      randomColor();
    }
  })

newcolor.addEventListener('click',randomColor  );
randomColor();