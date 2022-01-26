import { render } from '@testing-library/react'
import EmptyImage from '../../components/EmptyImage'

describe('EmptyImage', () => {
  it('should match the snapshot', () => {
    const { container } = render(<EmptyImage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
