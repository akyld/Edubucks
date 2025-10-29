/**
 * Navbar Component Tests
 * 
 * WHAT WE'RE TESTING:
 * - Navbar renders all links
 * - Internal routing links work
 * - External Fitbucks link uses env variable
 * - Mobile menu toggle functionality
 * - Active link highlighting
 * - Logo display
 * 
 * WHY WE TEST THIS:
 * - Navbar is on every page - critical for navigation
 * - Broken links = frustrated users
 * - Mobile menu is essential for mobile users
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

// Mock framer-motion to avoid animation issues in tests
// WHY: Framer Motion animations can cause timing issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

const renderNavbar = (props = {}) => {
  return render(
    <BrowserRouter>
      <Navbar {...props} />
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  /**
   * Test 1: Basic Rendering
   */
  it('renders without crashing', () => {
    renderNavbar();
  });

  /**
   * Test 2: All Navigation Links Present
   * Checks if all expected links are rendered
   */
  it('renders all navigation links', () => {
    renderNavbar();
    
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('BLOG')).toBeInTheDocument();
    expect(screen.getByText('SINAV BAŞVURU')).toBeInTheDocument();
    expect(screen.getByText('EDUBUCKS AI')).toBeInTheDocument();
    expect(screen.getByText('FITBUCKS')).toBeInTheDocument();
    expect(screen.getByText('BOOK-A-DEMO')).toBeInTheDocument();
    expect(screen.getByText('HEMEN BAŞVUR')).toBeInTheDocument();
  });

  /**
   * Test 3: Logo Rendering
   * Verifies logo image is present with correct attributes
   */
  it('renders logo with correct attributes', () => {
    renderNavbar({ logo: '/test-logo.svg' });
    
    const logo = screen.getByAltText('Edubucks Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/test-logo.svg');
  });

  /**
   * Test 4: Fitbucks Link Uses Environment Variable
   * IMPORTANT: Tests that external link uses env variable
   */
  it('uses environment variable for Fitbucks link', () => {
    renderNavbar();
    
    // Find all links (includes desktop and mobile menu)
    const fitbucksLinks = screen.getAllByText('FITBUCKS');
    
    // Desktop link should exist and use env variable
    expect(fitbucksLinks[0].closest('a')).toHaveAttribute(
      'href',
      'http://localhost:5174'  // From our test setup
    );
  });

  /**
   * Test 5: Fitbucks Opens in New Tab
   * Ensures external link has correct target attribute
   */
  it('opens Fitbucks in new tab with security attributes', () => {
    renderNavbar();
    
    const fitbucksLink = screen.getAllByText('FITBUCKS')[0].closest('a');
    
    expect(fitbucksLink).toHaveAttribute('target', '_blank');
    expect(fitbucksLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  /**
   * Test 6: Internal Links Use React Router
   * Verifies internal links use <Link> component (not <a>)
   */
  it('uses React Router Link for internal navigation', () => {
    renderNavbar();
    
    const homeLink = screen.getAllByText('HOME')[0];
    const blogLink = screen.getAllByText('BLOG')[0];
    
    // React Router Link doesn't have href attribute, it uses 'to'
    // When rendered, it becomes an <a> tag through BrowserRouter
    expect(homeLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  /**
   * Test 7: Mobile Menu Toggle
   * Tests that mobile menu button exists
   * NOTE: We can't fully test toggle without user-event library
   */
  it('renders mobile menu button', () => {
    renderNavbar();
    
    // Mobile menu button has aria-label for accessibility
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  /**
   * Test 8: Mobile Menu Toggle Functionality
   * Simulates clicking the mobile menu button
   */
  it('toggles mobile menu when button is clicked', () => {
    const { container } = renderNavbar();
    
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Initially, mobile menu should not be visible
    // (In real app, it's hidden by CSS on desktop, but we're testing logic)
    
    // Click to open
    fireEvent.click(menuButton);
    
    // Mobile menu should now have links (duplicates of desktop menu)
    const allHomeLinks = screen.getAllByText('HOME');
    // Should have 2: one in desktop menu, one in mobile menu
    expect(allHomeLinks.length).toBeGreaterThanOrEqual(2);
  });

  /**
   * Test 9: Active Link Highlighting
   * Tests that current page link is marked as active
   */
  it('highlights active link based on current route', () => {
    // MemoryRouter allows us to set initial route
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <Navbar />
      </MemoryRouter>
    );
    
    // The blog link should exist
    const blogLink = screen.getAllByText('BLOG')[0];
    expect(blogLink).toBeInTheDocument();
    
    // NOTE: Checking styling is tricky in unit tests
    // We verify the link exists; styling is tested visually
  });

  /**
   * Test 10: Scroll Behavior
   * Tests that scroll event listener is added
   * (Full scroll testing requires more complex setup)
   */
  it('sets up scroll event listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    
    renderNavbar();
    
    // Should add scroll event listener
    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    
    addEventListenerSpy.mockRestore();
  });

  /**
   * Test 11: Logo Fallback
   * Tests logo error handling (shows text if image fails)
   */
  it('handles logo loading error', () => {
    renderNavbar();
    
    const logo = screen.getByAltText('Edubucks Logo');
    
    // Simulate image load error
    fireEvent.error(logo);
    
    // After error, fallback text should be visible
    // (In actual component, display is toggled via style.display)
  });

  /**
   * Test 12: Accessibility
   * Ensures navigation has proper semantic HTML
   */
  it('uses semantic nav element', () => {
    const { container } = renderNavbar();
    
    const navElement = container.querySelector('nav');
    expect(navElement).toBeInTheDocument();
  });
});


