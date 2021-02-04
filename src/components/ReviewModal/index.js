import React, { useState, useCallback } from 'react'
import { Modal } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import * as R from 'ramda'
import PropTypes from 'prop-types'

import { calculateAverageScore, sortReviews } from '../../helpers/utils'
import useRefCallback from '../../hooks/useRefCallback'

import styles from './styles.module.scss'
import VirtualizedList from '../VirtualizedList'

function ReviewModal({ open, data, handleClose }) {
  const dataCopy = R.clone(data).sort(
    (a, b) => new Date(b.publish_date) - new Date(a.publish_date)
  )
  const avgReview = calculateAverageScore(dataCopy)

  const [reviewData, setReviewData] = useState(dataCopy)
  const [sortSelection, setSortSelection] = useState(1)
  const [listHeight, setListHeight] = useState()

  // Needed a way to set the initial list height, listen to resize, & cleanup after for the virtualized list height.
  // See src/hooks/useRefCallback.js
  const modalRef = useRefCallback(
    useCallback((node) => {
      if (node !== null) {
        setListHeight(node.offsetHeight - 201)

        const onResize = () => {
          setListHeight(node.offsetHeight - 201)
        }
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
      }
    }, [])
  )

  const handleSortChange = (e) => {
    setSortSelection(e.target.value)
    setReviewData(sortReviews(dataCopy, e.target.value))
  }

  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      className={styles.modal}
    >
      <div className={styles.modalBody} ref={modalRef} id='modalContainer'>
        <div className={styles.title}>William Shakespeare</div>
        <div className={styles.address}>
          Stratford-upon-Avon, United Kingdom
        </div>
        <div className={styles.reviewsContainer}>
          <div className={styles.stars}>
            <span className={styles.avgReview}>{avgReview.toFixed(1)}</span>
            <Rating
              readOnly
              value={avgReview}
              precision={0.5}
              style={{ color: '#e57f3f' }}
            />
            <span className={styles.reviewCount}>
              {dataCopy.length} reviews
            </span>
          </div>
          <div className={styles.sort}>
            <span className={styles.sortByText}>Sort by: </span>
            <select
              onChange={handleSortChange}
              value={sortSelection}
              className={styles.sortSelection}
            >
              <option value={1}>Newest</option>
              <option value={2}>Oldest</option>
              <option value={3}>Highest rating</option>
              <option value={4}>Lowest rating</option>
            </select>
          </div>
        </div>
        <div className={styles.reviewListContainer}>
          {listHeight && (
            <VirtualizedList data={reviewData} listHeight={listHeight} />
          )}
        </div>
      </div>
    </Modal>
  )
}

ReviewModal.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.array,
  handleClose: PropTypes.func
}

export default ReviewModal
