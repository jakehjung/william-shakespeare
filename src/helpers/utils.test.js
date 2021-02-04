import {
  generateLottoNums,
  generateInitial,
  chooseRandom,
  sortReviews,
  calculateAverageScore
} from './utils'

describe('Unit Testing', () => {
  it('generateLottoNums', () => {
    const lottoNums = generateLottoNums()
    expect(lottoNums.length).toBe(6)
  })

  it('calculateAverageScore', () => {
    const data = [{ rating: 1 }, { rating: 2 }, { rating: 3 }]
    const avgScore = calculateAverageScore(data)
    expect(avgScore).toBe(2)
  })

  it('generateInitial', () => {
    const initial = generateInitial()
    expect(initial.length).toBe(2)
  })

  it('sortReviews', () => {
    const reviews = [
      { publish_date: '2016-09-05T23:25:47.642350Z', rating: 0.5 },
      { publish_date: '2016-09-02T23:25:47.642388Z', rating: 0.7 },
      { publish_date: '2016-09-03T23:25:47.642388Z', rating: 0.6 }
    ]

    const dateSorted = sortReviews(reviews, '1')
    const ratingSorted = sortReviews(reviews, '3')

    const expectedDateSort = [
      { publish_date: '2016-09-02T23:25:47.642388Z', rating: 0.7 },
      { publish_date: '2016-09-03T23:25:47.642388Z', rating: 0.6 },
      { publish_date: '2016-09-05T23:25:47.642350Z', rating: 0.5 }
    ]
    const expectedRatingSort = [
      { publish_date: '2016-09-02T23:25:47.642388Z', rating: 0.7 },
      { publish_date: '2016-09-03T23:25:47.642388Z', rating: 0.6 },
      { publish_date: '2016-09-05T23:25:47.642350Z', rating: 0.5 }
    ]

    expect(dateSorted).toStrictEqual(expectedDateSort)
    expect(ratingSorted).toStrictEqual(expectedRatingSort)
  })
})
