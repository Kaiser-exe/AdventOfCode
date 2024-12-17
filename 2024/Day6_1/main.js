fetch('./Day6_1/input.txt')
  .then((res) => res.text())
  .then((text) => {
    let result = 0
    let arr
    let guardPos = []

    // rotate the map 90 deg
    // TODO: function should rotate map to the left instead of the right
    const rotateMapLeft = () => {
      console.log(arr)
      arr = arr[0].map((cell, i) => arr.map(row => row[i]))
      arr = arr.map(row => row.reverse())
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(guardPos[2])) {
          guardPos[0] = i // row
          guardPos[1] = arr[i].indexOf(guardPos[2]) // column
        }
      }
      console.log(arr)
    }

    // load map and guard position
    arr = text.split('\r\n').map(row => row.split(''))
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes('^' || '>' || 'v' || '<')) {
        guardPos.push(i) // row
        guardPos.push(arr[i].indexOf('^' || '>' || 'v' || '<')); // column
        guardPos.push(arr[guardPos[0]][guardPos[1]]);
      }
    }

    // initial map rotations
    switch (guardPos[2]) {
      case '<':
        rotateMapLeft()
        break;
      case '^':
        rotateMapLeft()
        rotateMapLeft()
        break;
      case '>':
        rotateMapLeft()
        rotateMapLeft()
        rotateMapLeft()
        break;
    }

    // calculate result
    while (guardPos[0] !== arr.length-1) {
      switch (arr[guardPos[0] + 1][guardPos[1]]) {
        case '#':
          rotateMapLeft()
          break;
        case '.':
          arr[guardPos[0]][guardPos[1]] = 'X';
          arr[++guardPos[0]][guardPos[1]] = guardPos[2];
          result++;
          break;
        default:
          guardPos[0]++;
          break;
      }
      console.log(arr)
      }
    console.log(arr)

    document.getElementsByClassName('day6')[0].innerHTML += result
  })
  .catch((e) => console.error(e))