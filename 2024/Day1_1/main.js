fetch('./Day1_1/input.txt')
  .then((res) => res.text())
  .then((text) => {
    let result = 0;
    let arr1 = [0];
    let arr2 = [0];

    // prepare data from file
    text = text.replaceAll('\n', '   ')
    text.split('   ').forEach(el => {
      if (arr1.length === arr2.length) {
        arr1.push(Number(el));
      }
      else {
        arr2.push(Number(el));
      }
    })

    arr1 = arr1.toSorted();
    arr2 = arr2.toSorted()

    // calculate result
    for (let i = 0; i < arr1.length; i++) {
      result += arr2[i] < arr1[i] ? arr1[i] - arr2[i] : arr2[i] - arr1[i];
    }

    document.getElementsByClassName('day1')[0].innerHTML += result
  })
  .catch((e) => console.error(e));