import React, { useState } from 'react'

import googleLogo from './googleLogo.png'
import SearchResult from '../SearchResult'
import SearchBar from '../SearchBar'
import { generateLottoNums } from '../../helpers/utils'

import styles from './styles.module.scss'

function GoogleHome() {
  const [googleInput, setGoogleInput] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [error, setError] = useState(false)

  const searchable = googleInput.toLowerCase() === 'william shakespeare'
  const luckyNumbers = `Your next lottery numbers: ${generateLottoNums().join(
    ', '
  )}. Good Luck!`

  const handleSearchByEnter = (e) => {
    if (e.keyCode === 13 && searchable) {
      setShowResult(true)
    } else if (e.keyCode === 13 && !searchable) {
      setError(true)
    }
  }

  const handleSearch = () => {
    if (searchable) {
      setShowResult(true)
    } else {
      setError(true)
    }
  }

  return (
    <>
      {!showResult && (
        <div className={styles.googleHomeContainer}>
          <div className={styles.googleLogo}>
            <img src={googleLogo} alt='google logo' />
          </div>
          <SearchBar
            onChange={setGoogleInput}
            onKeyDown={handleSearchByEnter}
            placeholder='Search "William Shakespeare"'
            isHome={true}
          />
          {error && (
            <div className={styles.error}>Psst. Maybe check your spelling?</div>
          )}
          <div className={styles.buttons}>
            <button
              className={styles.searchButton}
              onClick={handleSearch}
              variant='contained'
            >
              Google Search
            </button>
            <button
              className={styles.searchButton}
              onClick={() => alert(luckyNumbers)}
              variant='contained'
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      )}
      {showResult && (
        <SearchResult
          searchBarValue={googleInput}
          setShowResult={setShowResult}
        />
      )}
    </>
  )
}

export default GoogleHome
