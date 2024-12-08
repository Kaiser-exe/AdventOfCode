fetch('./Day3_1/input.txt')
  .then((res) => res.text())
  .then((text) => {
    let result = 0;
    let arr;

    // prepare data from file
    const regExp = /(mul\([0-9]{1,3},[\d]{1,3}\))/g;
    arr = [...text.matchAll(regExp)];

    // calculate result
    let calcArr;

    for (let i = 0; i < arr.length; i++) {
      calcArr = arr[i][0].replace('mul(', '').replace(')', '').split(',');

      result += calcArr[0] * calcArr[1];
    }

    document.getElementsByClassName('day3')[0].innerHTML += result
  })
  .catch((e) => console.error(e));