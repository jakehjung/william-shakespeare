import { fireEvent, render, screen } from '@testing-library/react'
import GoogleHome from './index'

describe('Google Home', () => {
  it('shows error msg if incorrectly searched', () => {
    render(<GoogleHome />)
    fireEvent.click(screen.getByText('Google Search'))

    expect(
      screen.getByText('Psst. Maybe check your spelling?')
    ).toBeInTheDocument()
  })

  it('shows search result component if correctly searched', () => {
    render(<GoogleHome />)
    const input = screen.getByTestId('search-bar')

    fireEvent.change(input, { target: { value: 'William Shakespeare' } })
    fireEvent.click(screen.getByText('Google Search'))

    const searchResultComponent = screen.getByTestId('search-result-component')
    expect(searchResultComponent).toBeInTheDocument()
  })
})
