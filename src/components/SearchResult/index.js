import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Container, Grid, Hidden } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import SearchIcon from '@material-ui/icons/Search'
import ReceiptIcon from '@material-ui/icons/Receipt'
import ImageIcon from '@material-ui/icons/Image'
import YouTubeIcon from '@material-ui/icons/YouTube'
import RoomIcon from '@material-ui/icons/Room'

import config from '../../config'
import useApi from '../../hooks/useApi'
import ReviewModal from '../ReviewModal'
import SearchBar from '../SearchBar'
import ResultsList from '../ResultsList'
import googleLogo from '../GoogleHome/googleLogo.png'
import linkedInProfile from './linkedInProfile.jpeg'
import resultMap from './resultMap.png'

import styles from './styles.module.scss'

function SearchResult({ searchBarValue, setShowResult, testError = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const apiOptions = {
    method: 'GET',
    headers: { 'x-api-key': config.SHAKESPEARE_API_KEY },
    url: config.SHAKESPEARE_URL
  }
  const { data, loading, error } = useApi(apiOptions)

  return (
    <div data-testid='search-result-component'>
      {loading && !error && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={3}
          alignItems='center'
          className={styles.topBar}
        >
          <Grid
            item
            sm={2}
            xs={12}
            className={styles.googleLogo}
            onClick={() => setShowResult(false)}
          >
            <img src={googleLogo} alt='google logo' />
          </Grid>
          <Grid item sm={8} xs={12} className={styles.searchBarWrapper}>
            <SearchBar value={searchBarValue} />
          </Grid>
          <Hidden only='xs'>
            <Grid
              item
              sm={2}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <a href='https://www.linkedin.com/in/jake-h-jung-b4a514b3/'>
                <img
                  src={linkedInProfile}
                  className={styles.profilePic}
                  alt='linkedin profile pic'
                />
              </a>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
      <Container maxWidth='xl' style={{ borderBottom: '1px solid #ebebeb' }}>
        <Grid container spacing={3}>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <ul className={styles.settingsList}>
              <li>
                <SearchIcon fontSize='small' />
                All
              </li>
              <li>
                <ReceiptIcon fontSize='small' style={{ color: grey[500] }} />{' '}
                News
              </li>
              <li>
                <ImageIcon fontSize='small' style={{ color: grey[500] }} />{' '}
                Image
              </li>
              <li>
                <YouTubeIcon fontSize='small' style={{ color: grey[500] }} />{' '}
                Videos
              </li>
              <li>
                <RoomIcon fontSize='small' style={{ color: grey[500] }} /> Maps
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      {!error && (
        <>
          <Container maxWidth='xl'>
            <Grid container>
              <Grid item sm={2} xs={12}></Grid>
              <Grid item sm={8} xs={12} className={styles.searchResultCount}>
                About 93,200,000 results (299792458 m/s)
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth='xl'>
            <Grid container>
              <Grid item sm={2} xs={12}></Grid>
              <Grid
                item
                sm={8}
                md={7}
                lg={6}
                xl={6}
                xs={12}
                className={styles.searchResult}
              >
                <img
                  src={resultMap}
                  style={{ marginBottom: 7, cursor: 'pointer' }}
                  onClick={() =>
                    window.open('https://bit.ly/3awZJ1R', '_blank')
                  }
                  alt='map to Stratford-upon-Avon, United Kingdom'
                />
                {!loading && (
                  <ResultsList data={data} setIsModalOpen={setIsModalOpen} />
                )}
              </Grid>
            </Grid>
          </Container>
        </>
      )}
      {isModalOpen && (
        <ReviewModal
          data={data}
          open={isModalOpen}
          handleClose={setIsModalOpen}
        />
      )}
      {(error || testError) && (
        <div style={{ marginTop: 16 }}>Uh oh, something went wrong.</div>
      )}
    </div>
  )
}

SearchResult.propTypes = {
  searchBarValue: PropTypes.string,
  setShowResult: PropTypes.func
}

export default SearchResult
