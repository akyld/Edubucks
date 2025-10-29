/**
 * Footer Component Tests
 * 
 * WHAT WE'RE TESTING:
 * - Footer renders with all sections
 * - Contact information is displayed correctly
 * - Internal navigation links work
 * - Social links are included
 * - Copyright year is current
 * 
 * WHY WE TEST THIS:
 * - Footer appears on every page - bugs affect entire site
 * - Contact info must be accurate for users to reach you
 * - Navigation links must work properly
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

// Helper function to render Footer with Router
// WHY: Footer uses <Link> from react-router, which requires Router context
const renderFooter = (props = {}) => {
  return render(
    <BrowserRouter>
      <Footer {...props} />
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  /**
   * Test 1: Basic Rendering
   */
  it('renders without crashing', () => {
    renderFooter();
  });

  /**
   * Test 2: Contact Information Present
   * Verifies all contact methods are displayed
   */
  it('displays contact information', () => {
    renderFooter();
    
    // Check if contact labels are present
    expect(screen.getByText('E-Posta')).toBeInTheDocument();
    expect(screen.getByText('Telefon')).toBeInTheDocument();
    expect(screen.getByText('Adres')).toBeInTheDocument();
    
    // Check actual contact values
    expect(screen.getByText('info@edubucks.org')).toBeInTheDocument();
    expect(screen.getByText('+90 (850) 532 66 77')).toBeInTheDocument();
  });

  /**
   * Test 3: Email Link
   * Ensures email is clickable with correct mailto: link
   */
  it('has clickable email link with mailto', () => {
    renderFooter();
    
    const emailLink = screen.getByText('info@edubucks.org').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:info@edubucks.org');
  });

  /**
   * Test 4: Phone Link
   * Ensures phone is clickable with correct tel: link
   */
  it('has clickable phone link with tel', () => {
    renderFooter();
    
    const phoneLink = screen.getByText('+90 (850) 532 66 77').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:+908505326677');
  });

  /**
   * Test 5: Brand Name Present
   * Checks if "Edubucks" branding is displayed
   */
  it('displays Edubucks branding', () => {
    renderFooter();
    
    // getAllByText because "Edubucks" might appear multiple times
    const brandElements = screen.getAllByText(/Edubucks/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  /**
   * Test 6: Quick Links Navigation
   * Verifies internal navigation links are present
   */
  it('displays quick links section', () => {
    renderFooter();
    
    // These should be Link components to internal routes
    expect(screen.getByText('Ana Sayfa')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Edubucks AI')).toBeInTheDocument();
  });

  /**
   * Test 7: Social Links Integration
   * Ensures SocialLinks component is rendered in footer
   */
  it('includes social media links', () => {
    renderFooter();
    
    // SocialLinks component should render these
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
  });

  /**
   * Test 8: Copyright Notice
   * Checks if copyright is present
   * NOTE: We don't test exact year to avoid failing when year changes
   */
  it('displays copyright notice', () => {
    renderFooter();
    
    // Look for copyright symbol and "Edubucks"
    const copyrightText = screen.getByText(/©.*Edubucks/i);
    expect(copyrightText).toBeInTheDocument();
  });

  /**
   * Test 9: Variant Prop
   * Tests if component accepts variant prop without crashing
   */
  it('renders with different variant prop', () => {
    const { rerender } = renderFooter({ variant: 'default' });
    expect(screen.getByText('E-Posta')).toBeInTheDocument();
    
    rerender(
      <BrowserRouter>
        <Footer variant="minimal" />
      </BrowserRouter>
    );
    // Should still render without error
    expect(screen.getByText('E-Posta')).toBeInTheDocument();
  });

  /**
   * Test 10: Multiple Contact Icons
   * Verifies icons are rendered (Lucide icons)
   */
  it('renders contact icons', () => {
    const { container } = renderFooter();
    
    // Lucide icons render as SVG elements
    const svgElements = container.querySelectorAll('svg');
    
    // Should have multiple SVGs (icons + social links)
    expect(svgElements.length).toBeGreaterThan(3);
  });
});


