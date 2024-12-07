fetch('./Day2_1/input.txt')
  .then((res) => res.text())
  .then((text) => {
    let result = 0;
    let arr;

    // prepare data from file
    arr = text.trim().split('\n')

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split(' ')
    }

    // calculate result
    for (let i = 0; i < arr.length; i++) {
      const asc = Number(arr[i][0]) < Number(arr[i][1])
      let count = 0;
      for (let j = 0; j < arr[i].length - 1; j++) {
        const diff = asc ? arr[i][j+1] - arr[i][j] : arr[i][j] - arr[i][j+1];
        if (diff >= 1 && diff <= 3) {
          count++;
        }
        else {
          j = arr[i].length;
        }
      }

      result += count === arr[i].length - 1 ?  1 : 0;
    }

    document.getElementsByClassName('day2')[0].innerHTML += result
  })
  .catch((e) => console.error(e));