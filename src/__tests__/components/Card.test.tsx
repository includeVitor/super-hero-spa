import { render } from '@testing-library/react'
import Card from '../../components/Card'

describe('Card', () => {
  it('should match the snapshot card selected', () => {
    const { container } = render(
      <Card
        id="20"
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

  it('should match the snapshot card not selected', () => {
    const { container } = render(
      <Card
        id="20"
        title="snapshot"
        url=""
        description="snapshot"
        handleCombat={jest.fn()}
        handleView={jest.fn()}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
