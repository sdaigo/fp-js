const test = require('tape')

const input = [80, 90, 100]

const sum = (total, current) => total + current
const total = arr => arr.reduce(sum)
const size = arr => arr.length
const divide = (n, m) => n / m

const average = arr => divide(total(arr), size(arr))

test('test', t => {
  const actual = average(input)
  const expected = 90
  t.equal(actual, expected, 'true')
  t.end()
})
