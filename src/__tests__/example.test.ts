import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
  it('should perform basic assertion', () => {
    expect(1 + 1).toBe(2);
  });

  it('should check string equality', () => {
    const greeting = 'Hello, Vitest!';
    expect(greeting).toContain('Vitest');
  });

  it('should verify array contents', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toHaveLength(5);
    expect(numbers).toContain(3);
  });
});

// Browser-specific test example
describe('Browser Environment Test', () => {
  it('should have access to browser APIs', () => {
    expect(typeof window).toBe('object');
    expect(typeof document).toBe('object');
  });

  it('should manipulate DOM', () => {
    const div = document.createElement('div');
    div.textContent = 'Test Content';
    expect(div.textContent).toBe('Test Content');
  });
});
