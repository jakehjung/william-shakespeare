import React from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList } from 'react-window'
import { ListItem } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import Moment from 'react-moment'
import 'moment-timezone'

import { chooseRandom, generateInitial } from '../../helpers/utils'
import { avatarColors } from '../../data'

import styles from './styles.module.scss'

function VirtualizedList({ data, listHeight }) {
  const avatarInfo = {}

  const renderRow = (props) => {
    const { index, style } = props
    let backgroundColor = chooseRandom(avatarColors)
    let initial = generateInitial()

    if (avatarInfo.hasOwnProperty(index)) {
      if (avatarInfo[index].color) {
        backgroundColor = avatarInfo[index].color
      }
      if (avatarInfo[index].initial) {
        initial = avatarInfo[index].initial
      }
    } else {
      avatarInfo[index] = { color: backgroundColor, initial }
    }

    return (
      <ListItem style={style} key={index}>
        <div className={styles.reviewContainer}>
          <div className={styles.avatar} style={{ backgroundColor }}>
            {initial}
          </div>
          <div className={styles.rightCol}>
            <div className={styles.name}>{data[index].author}</div>
            <div className={styles.rating}>
              <Rating
                style={{ color: '#e57f3f', marginRight: 3, marginBottom: 3 }}
                size='small'
                readOnly
                value={data[index].rating}
                precision={0.5}
              />
              <Moment format='MM/DD/YYYY'>{data[index].publish_date}</Moment>
            </div>
            <div className={styles.body}>{data[index].body}</div>
          </div>
        </div>
      </ListItem>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <FixedSizeList
        height={listHeight}
        width='100%'
        alignItems='flex-start'
        itemSize={110}
        itemCount={data.length}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  )
}

VirtualizedList.propTypes = {
  data: PropTypes.array,
  listHeight: PropTypes.number
}

export default VirtualizedList
