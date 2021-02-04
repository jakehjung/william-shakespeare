import React from 'react'
import { List, ListItem } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import PropTypes from 'prop-types'

import { resultData } from '../../data'
import { calculateAverageScore } from '../../helpers/utils'

import styles from './styles.module.scss'

function ResultsList({ data, setIsModalOpen }) {
  const avgReview = calculateAverageScore(data)

  return (
    <List component='nav' className={styles.list}>
      {resultData.map((d) => {
        const isShakespeare = d.title === 'William Shakespeare'
        const isBenJohnson = d.title === 'Ben Johnson'
        return (
          <ListItem
            key={`resultItem-${d.id}`}
            button
            className={styles.listItem}
            onClick={() => {
              if (isShakespeare) {
                setIsModalOpen(true)
              } else if (isBenJohnson) {
                window.open('https://bit.ly/36GXWpJ', '_blank')
              } else {
                window.open('https://bit.ly/36XrYGb', '_blank')
              }
            }}
          >
            <div className={styles.leftCol}>
              <span>{d.id}</span>
            </div>
            <div className={styles.midCol}>
              <p className={styles.title}>{d.title}</p>
              <p className={styles.detail}>{d.detail}</p>
              <p className={styles.location}>{d.location}</p>
              <p className={styles.avgReview}>
                <Rating
                  readOnly
                  value={isShakespeare ? avgReview : d.avgReview}
                  precision={0.5}
                />
                ({isShakespeare ? data.length : d.count})
              </p>
            </div>
            <div className={styles.rightCol}>
              <p></p>
            </div>
          </ListItem>
        )
      })}
    </List>
  )
}

ResultsList.propTypes = {
  data: PropTypes.array,
  setIsModalOpen: PropTypes.func
}

export default ResultsList
