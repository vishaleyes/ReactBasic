const square = function (x) {
      return x*x;
};

const squareArrow = (x) => {
     return x*x;
};


const squareArrowNew = (x) => x*x;


const getFitstName = (fullname) => fullname.split(' ')[0];

console.log(square(9));
console.log(squareArrow(8));
console.log(squareArrowNew(4));

console.log(getFitstName("Vishal Panchal"));
