const _ = require('lodash')
const test = require('tape')

// data
const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 },
]

// 命令形のアプローチ
let totalGrades = 0
let totalStudentsFound = 0

for (let i = 0; i < enrollment.length; i++) {
  let student = enrollment[i]
  if (student != null) {
    if (student.enrolled > 1) {
      totalGrades += student.grade
      totalStudentsFound++
    }
  }
}

const average_1 = totalGrades / totalStudentsFound

// fp
// 1. 対象となる学生を選択（2つ以上の授業を受けている）
// 2. 対象学生の成績を抽出
// 3. 対象学生全員の成績の平均値を計算”
const average_2 = _.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map('grade')
  .mean()
  .value()

test('test', t => {
  const expected = 90
  t.equal(average_1, expected)
  t.equal(average_2, expected)
  t.end()
})
