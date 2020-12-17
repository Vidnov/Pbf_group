this.get_fibonachi = (choise) => {
  if (choise <= 1) {
    return choise;
  } else {
    return this.get_fibonachi(choise-1)+this.get_fibonachi(choise-2)
  }
};

exports.module = {};
