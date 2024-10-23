import {act, renderHook} from '@testing-library/react-hooks';
import {countStore, useCount} from './useManageUsers';

describe('useCount', () => {
  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      countStore.setState({count: 0});
    });
  });

  it('should initialize with count 0', () => {
    const {result} = renderHook(() => useCount());
    expect(result.current.count).toBe(0);
  });

  it('should inc count', () => {
    const {result} = renderHook(() => useCount());

    act(() => {
      result.current.inc();
    });

    expect(result.current.count).toBe(1);
  });

  it('should dec count', () => {
    const {result} = renderHook(() => useCount());

    act(() => {
      result.current.dec();
    });

    expect(result.current.count).toBe(-1);
  });

  it('should update count across multiple hooks', () => {
    const {result: result1} = renderHook(() => useCount());
    const {result: result2} = renderHook(() => useCount());

    act(() => {
      result1.current.inc();
    });

    expect(result1.current.count).toBe(1);
    expect(result2.current.count).toBe(1);
  });
});
