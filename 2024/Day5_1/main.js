fetch('./Day5_1/input.txt')
  .then((res) => res.text())
  .then((text) => {
    let result = 0
    let rules
    let sites

    // prepare data from file
    sites = text.split('\r\n')
    rules = sites.splice(0, text.split('\r\n').indexOf(''))
    sites.splice(0, 1)

    // calculate result
    for (let i = 0; i < sites.length; i++) {
      let activeRules = []
      let help
      let correct = true
      for (let j = 0; j < rules.length; j++) {
        help = rules[j].split('|')
        if (sites[i].includes(help[0]) && sites[i].includes(help[1])) {
          activeRules.push(rules[j])
        }
      }
      if (!activeRules) {
        result += sites[i].split(',')[Math.round(sites[i].split(',').length / 2)]
      }
      else {
        help = sites[i].split(',')
        for (let j = 0; j < help.length-1; j++) {
          if (activeRules.filter((item) => { return item.split('|')[1] === help[j] }).length) {
            j = help.length
            correct = false
          }
          else {
            activeRules = activeRules.filter((item) => { return item.split('|')[0] !== help[j] })
          }
        }
        if (correct) {
          const index = Math.round(sites[i].split(',').length / 2)-1
          result += Number(sites[i].split(',')[index])
        }
      }
    }

    document.getElementsByClassName('day5')[0].innerHTML += result
  })
  .catch((e) => console.error(e))