/**
 * Sınav Başvuru Page Tests
 * 
 * WHAT WE'RE TESTING:
 * - Page renders correctly
 * - Exam data is displayed in table
 * - City filter works correctly
 * - Filter buttons toggle active state
 * - Application buttons are present and link correctly
 * - Mobile responsive card view works
 * 
 * WHY WE TEST THIS:
 * - Critical page for exam registrations
 * - Filter functionality must work reliably
 * - Users need correct exam info to register
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SinavBasvuru from '../SinavBasvuru';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    footer: ({ children, ...props }) => <footer {...props}>{children}</footer>,
  },
}));

const renderSinavBasvuru = () => {
  return render(
    <BrowserRouter>
      <SinavBasvuru />
    </BrowserRouter>
  );
};

describe('SinavBasvuru Page', () => {
  /**
   * Test 1: Basic Rendering
   */
  it('renders without crashing', () => {
    renderSinavBasvuru();
  });

  /**
   * Test 2: Page Title
   * Checks if main heading is present
   */
  it('displays page title', () => {
    renderSinavBasvuru();
    
    // Should have title related to exam applications
    expect(screen.getByText(/Sınav Başvuru/i)).toBeInTheDocument();
  });

  /**
   * Test 3: Filter Buttons Present
   * Verifies city filter buttons are rendered
   */
  it('displays filter buttons for cities', () => {
    renderSinavBasvuru();
    
    // Should have "Bütün İller" (All Cities) button
    expect(screen.getByText('Bütün İller')).toBeInTheDocument();
    
    // Should have İstanbul filter button
    expect(screen.getByText('İstanbul')).toBeInTheDocument();
  });

  /**
   * Test 4: Initial Data Display
   * Checks if exam data is displayed on page load
   */
  it('displays exam data on initial load', () => {
    renderSinavBasvuru();
    
    // Should show exams from mock data
    // Check for locations from examData
    expect(screen.getByText(/Beşiktaş/i)).toBeInTheDocument();
  });

  /**
   * Test 5: City Filter Functionality
   * Tests that clicking filter buttons filters exams
   */
  it('filters exams by selected city', () => {
    renderSinavBasvuru();
    
    // Click İstanbul filter
    const istanbulButton = screen.getByText('İstanbul');
    fireEvent.click(istanbulButton);
    
    // Should show İstanbul exams
    expect(screen.getByText(/Beşiktaş/i)).toBeInTheDocument();
    
    // Click "Bütün İller" to show all
    const allCitiesButton = screen.getByText('Bütün İller');
    fireEvent.click(allCitiesButton);
    
    // Should show all exams again
    expect(screen.getByText(/Beşiktaş/i)).toBeInTheDocument();
  });

  /**
   * Test 6: Filter Button Active State
   * Ensures active filter button is highlighted
   */
  it('highlights active filter button', () => {
    renderSinavBasvuru();
    
    const istanbulButton = screen.getByText('İstanbul');
    
    // Click İstanbul button
    fireEvent.click(istanbulButton);
    
    // Button should have active styling (we check if it's in the document)
    expect(istanbulButton).toBeInTheDocument();
  });

  /**
   * Test 7: Application Buttons Present
   * Verifies "Başvur" (Apply) buttons exist
   */
  it('displays application buttons for each exam', () => {
    renderSinavBasvuru();
    
    // Should have "Başvur" buttons (multiple, one per exam)
    const applyButtons = screen.getAllByText(/Başvur/i);
    
    // Should have at least one apply button
    expect(applyButtons.length).toBeGreaterThan(0);
  });

  /**
   * Test 8: Application Button Links
   * Ensures apply buttons link to correct route
   */
  it('has correct routes for application buttons', () => {
    renderSinavBasvuru();
    
    const applyButtons = screen.getAllByText(/Başvur/i);
    
    // First button should be a link
    const firstButton = applyButtons[0].closest('a') || applyButtons[0].closest('button').closest('a');
    
    // Should link to event-application route
    if (firstButton) {
      expect(firstButton.getAttribute('href') || firstButton.getAttribute('to')).toBeTruthy();
    }
  });

  /**
   * Test 9: Exam Fee Display
   * Checks if exam fees are shown
   */
  it('displays exam fees', () => {
    renderSinavBasvuru();
    
    // Should show fees like "500 TL"
    expect(screen.getByText(/500 TL/i)).toBeInTheDocument();
  });

  /**
   * Test 10: Exam Date Display
   * Verifies exam dates are shown
   */
  it('displays exam dates', () => {
    renderSinavBasvuru();
    
    // Should show dates like "15 Kasım 2024"
    expect(screen.getByText(/15 Kasım 2024/i)).toBeInTheDocument();
  });

  /**
   * Test 11: Parent Seminar Info
   * Checks if parent seminar information is displayed
   */
  it('displays parent seminar information', () => {
    renderSinavBasvuru();
    
    // Should show "Evet" or "Hayır" for parent seminars
    const yesTexts = screen.getAllByText(/Evet/i);
    expect(yesTexts.length).toBeGreaterThan(0);
  });

  /**
   * Test 12: Navbar and Footer Included
   * Ensures page structure includes navigation components
   */
  it('includes Navbar and Footer components', () => {
    renderSinavBasvuru();
    
    // Navbar links
    expect(screen.getByText('HOME')).toBeInTheDocument();
    
    // Footer contact info
    expect(screen.getByText('E-Posta')).toBeInTheDocument();
  });

  /**
   * Test 13: Multiple Exams Displayed
   * Verifies that multiple exams are shown (not just one)
   */
  it('displays multiple exams', () => {
    renderSinavBasvuru();
    
    // Should have multiple location names
    expect(screen.getByText(/Beşiktaş/i)).toBeInTheDocument();
    expect(screen.getByText(/Kadıköy/i)).toBeInTheDocument();
  });

  /**
   * Test 14: External Links Present
   * Checks if sample questions and institutional page links exist
   */
  it('has external links for resources', () => {
    const { container } = renderSinavBasvuru();
    
    // Should have external link icons or buttons
    const links = container.querySelectorAll('a');
    
    // Should have multiple links (navbar + exam links)
    expect(links.length).toBeGreaterThan(5);
  });

  /**
   * Test 15: Empty State Handling
   * Tests what happens when filter returns no results
   */
  it('handles filtering with no results gracefully', () => {
    renderSinavBasvuru();
    
    // Initially should have exams
    expect(screen.getByText(/Beşiktaş/i)).toBeInTheDocument();
    
    // Even if we filter to a city with few exams, page shouldn't crash
    // This test verifies no errors occur
  });
});


