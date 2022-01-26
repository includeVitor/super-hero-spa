import { render } from '@testing-library/react'
import Card from '../../components/Card'

describe('Card', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Card
        title="snapshot"
        url=""
        description="snapshot"
        handleCombat={jest.fn()}
        handleView={jest.fn()}
        $selected
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
