/**
 * Test Setup File
 * 
 * This file runs BEFORE all tests.
 * We use it to:
 * 1. Import testing utilities globally (no need to import in each test file)
 * 2. Set up environment variables
 * 3. Configure test environment
 */

import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
// This gives us helpful assertions like .toBeInTheDocument(), .toHaveClass(), etc.
expect.extend(matchers);

// Clean up after each test automatically
// This removes all rendered components from the DOM after each test
// Prevents tests from affecting each other
afterEach(() => {
  cleanup();
});

// Mock environment variables for tests
// Tests need these to work properly
process.env.VITE_FITBUCKS_URL = 'http://localhost:5174';

// Mock window.scrollTo (used by ScrollToTop component)
// jsdom doesn't implement scrollTo, so we mock it to prevent errors
global.scrollTo = vi.fn();

// Mock IntersectionObserver (used by Framer Motion)
// jsdom doesn't have this API, so we provide a mock implementation
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Mock window.matchMedia (used by responsive components)
// jsdom doesn't implement this, so we mock it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});


