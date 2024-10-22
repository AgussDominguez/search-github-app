import { act, renderHook } from '@testing-library/react-hooks';
import { templateNameStore, useTemplateName } from './useTemplateName';

describe('useTemplateName', () => {
  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      templateNameStore.setState({ templateName: 0 });
    });
  });

  it('should initialize with templateName 0', () => {
    const { result } = renderHook(() => useTemplateName());
    expect(result.current.templateName).toBe(0);
  });

  it('should inc templateName', () => {
    const { result } = renderHook(() => useTemplateName());

    act(() => {
      result.current.inc();
    });

    expect(result.current.templateName).toBe(1);
  });

  it('should dec templateName', () => {
    const { result } = renderHook(() => useTemplateName());

    act(() => {
      result.current.dec();
    });

    expect(result.current.templateName).toBe(-1);
  });

  it('should update templateName across multiple hooks', () => {
    const { result: result1 } = renderHook(() => useTemplateName());
    const { result: result2 } = renderHook(() => useTemplateName());

    act(() => {
      result1.current.inc();
    });

    expect(result1.current.templateName).toBe(1);
    expect(result2.current.templateName).toBe(1);
  });
});
