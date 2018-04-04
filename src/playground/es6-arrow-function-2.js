const multiplier = {
    number: 100,
    numbers: [5,10,15],
    calculateLived(){
        return this.numbers.map((num) => this.number + ' has multiple with '+num+ ' = '+ this.number * num);
    }
};

console.log(multiplier.calculateLived());