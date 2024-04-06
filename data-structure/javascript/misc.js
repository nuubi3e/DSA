const isActive = true

function weirdJS(propertyName, ...values) {
  console.clear()
  let classNames = ""
  let i = 0
  while (i < values.length) {
    classNames += `${propertyName[i]}${values[i]}`
    i++
  }
  classNames += ';'

  console.log(classNames.replaceAll('\n', ""));

}

/**
 * In JS we can call functions using `` (template literals) 
 * if we do so then that function will recieve two kinds of values first will be string array containing value we write as a string inside `` then after that if we pass some values using ${} then value passed inside of ${}
 * 
 *  */
weirdJS`
background-color: ${isActive ? "red" : "blue"};
color: ${isActive ? "red" : "blue"};
font-weight: ${isActive ? "800" : "500"}
`
