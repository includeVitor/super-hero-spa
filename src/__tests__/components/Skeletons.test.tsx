import { render } from '@testing-library/react'
import { LoadingCharacters } from '../../components/Skeletons'

describe('Skeletons', () => {
  it('LoadingCharacters should match the snapshot', () => {
    const { container } = render(<LoadingCharacters />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
