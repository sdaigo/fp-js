document.querySelector('#msg1').innerHTML = '<h1>hello world</h1>'

// 1.
function printMessage(elementId, format, message) {
  document.querySelector(
    `#${elementId}`,
  ).innerHTML = `<${format}>${message}</${format}>`
}

printMessage('msg2', 'h1', 'hello world!')

// 2. composition
function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)))
}

function addToDom(elementId) {
  return function(formattedText) {
    document.querySelector(`#${elementId}`).innerHTML = formattedText
  }
}

function h1(message) {
  return `<h1>${message}</h1>`
}

function h2(message) {
  return `<h2>${message}</h2>`
}

function echo(message) {
  return message
}

function repeat(num) {
  return function(message) {
    return Array.from(Array(num), (v, k) => k)
      .map(n => message)
      .join(' ')
  }
}

const printMessage2 = compose(
  addToDom('msg3'),
  h1,
  echo,
)
printMessage2('hello world!!')

const printMessage3 = compose(
  console.log,
  repeat(2),
  h2,
  echo,
)
printMessage3('Get Functional!')
