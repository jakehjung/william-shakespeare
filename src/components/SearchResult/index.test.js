import { render, screen } from '@testing-library/react'
import SearchResult from './index'

describe('Search Result', () => {
  it('shows error if data fetch error is true', async () => {
    render(<SearchResult testError={true} />)
    expect(screen.getByText('Uh oh, something went wrong.')).toBeInTheDocument()
  })
})
