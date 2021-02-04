import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

function SearchBar({ onChange, onKeyDown, placeholder, isHome, value }) {
  return (
    <div
      className={`${styles.searchBar}`}
      style={{ paddingRight: isHome ? 0 : 20 }}
    >
      <div className={styles.iconWrapper}>
        <SearchIcon />
      </div>
      <input
        data-testid='search-bar'
        autoFocus={isHome}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
      />
      {isHome && (
        <div className={styles.iconWrapper}>
          <MicIcon />
        </div>
      )}
    </div>
  )
}

SearchBar.defaultProps = {
  onChange: () => {
    return
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  isHome: PropTypes.bool,
  value: PropTypes.string
}

export default SearchBar
