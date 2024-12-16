fetch('./Day4_1/input.txt')
  .then((res) => res.text())
  .then((text) => {
    let result = 0
    let arr

    // prepare data from file
    arr = text.trim().split('\n')
    let rowCount = arr[0].length - 1
    let columnCount = text.split('\n').length

    // calculate result
    const regExp = /(XMAS)/g
    let helper = ''

    // row
    for (let i = 0; i < rowCount; i++) {
      result += [...arr[i].matchAll(regExp)].length
      result += [...arr[i].split('').reverse().join('').matchAll(regExp)].length
    }

    // column
    for (let i = 0; i < columnCount; i++) {
      for (let j = 0; j < rowCount; j++) {
        helper += arr[j][i];
      }
      result += [...helper?.matchAll(regExp)].length
      result += [...helper?.split('').reverse().join('').matchAll(regExp)].length
      helper = ''
    }

    // diagonal
    for (let i = 0; i < rowCount-3; i++) {
      for (let j = 0; j < columnCount; j++) {
        // left
        helper += arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3]
        result += [...helper?.matchAll(regExp)].length
        result += [...helper?.split('').reverse().join('').matchAll(regExp)].length
        helper = ''

        // right
        helper += arr[i+3][j] + arr[i+2][j+1] + arr[i+1][j+2] + arr[i][j+3]
        result += [...helper?.matchAll(regExp)].length
        result += [...helper?.split('').reverse().join('').matchAll(regExp)].length
        helper = ''
      }
    }

    document.getElementsByClassName('day4')[0].innerHTML += result
  })
  .catch((e) => console.error(e))