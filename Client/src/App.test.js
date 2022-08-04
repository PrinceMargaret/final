import {render, screen} from '@testing-library/react'

import React from 'react'
import '@testing-library/jest-dom'
import App from './App'

// test App css
test( 'App css', () => {
  render(<App />)
  const app = screen.getByTestId('App')
  expect(app).toHaveClass('App')
}
)

// test App logo
test( 'App logo', () => {
  render(<App />)
  const logo = screen.getByAltText('logo')
  expect(logo).toBeInTheDocument()
}
)

// test App title
test( 'App title', () => {
  render(<App />)
  const title = screen.getByText('Muzix')
  expect(title).toBeInTheDocument()
}
)
// render Home page and check if it renders
test( 'Home page', () => {
  render(<App />)
  const home = screen.getByText('Home')
  expect(home).toBeInTheDocument()
}
)






