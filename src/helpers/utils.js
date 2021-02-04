function generateLottoNums() {
  const lottoNums = []

  while (lottoNums.length < 6) {
    const num = Math.floor(Math.random() * 45 + 1)

    if (!lottoNums.includes(num)) {
      lottoNums.push(num)
    }
  }

  return lottoNums
}

function calculateAverageScore(data) {
  const reviewCount = data.length
  const avgReview =
    data.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / reviewCount

  return avgReview
}

function sortReviews(data, sortType) {
  switch (sortType) {
    case '1':
      return data.sort(
        (a, b) => new Date(b.publish_date) - new Date(a.publish_date)
      )
    case '2':
      return data.sort(
        (a, b) => new Date(a.publish_date) - new Date(b.publish_date)
      )
    case '3':
      return data.sort((a, b) => b.rating - a.rating)
    case '4':
      return data.sort((a, b) => a.rating - b.rating)
    default:
      return data
  }
}

function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateInitial() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let initial = ''

  for (let i = 0; i < 2; i++) {
    initial += letters.charAt(Math.floor(Math.random() * letters.length))
  }

  return initial
}

export {
  generateLottoNums,
  calculateAverageScore,
  sortReviews,
  chooseRandom,
  generateInitial
}
