import { renderHook } from '@testing-library/react-hooks'
import { useDebounce } from '../../lib/hooks/useDebounce'

describe('useDebounce.test', () => {
  it('should work correclty', () => {
    const { result } = renderHook(() => useDebounce('term', 500))

    expect(result.current).toBe('term')
  })
})
