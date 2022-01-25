/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Main from './'

describe('<Main />', () => {
    it('should render the headings', () => {
    render(<Main />)
    expect( screen.getByRole('heading', {name: /react avançado/i})).toBeInTheDocument()
    })
})
