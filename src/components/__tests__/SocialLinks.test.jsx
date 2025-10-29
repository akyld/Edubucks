/**
 * SocialLinks Component Tests
 * 
 * WHAT WE'RE TESTING:
 * - Component renders correctly
 * - All social links are present
 * - Links have correct URLs
 * - Links open in new tab (target="_blank")
 * - Accessibility attributes are present
 * 
 * WHY WE TEST THIS:
 * - Ensure social links don't break
 * - Verify external links are secure (noopener noreferrer)
 * - Check accessibility for screen readers
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SocialLinks from '../SocialLinks';

describe('SocialLinks Component', () => {
  /**
   * Test 1: Basic Rendering
   * Checks if component renders without crashing
   */
  it('renders without crashing', () => {
    render(<SocialLinks />);
  });

  /**
   * Test 2: All Social Links Present
   * Verifies that all 4 social media links are rendered
   * Uses aria-label to find links (good for accessibility)
   */
  it('renders all social media links', () => {
    render(<SocialLinks />);
    
    // getByLabelText finds elements by aria-label attribute
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument();
  });

  /**
   * Test 3: Correct URLs
   * Ensures each link points to the correct URL
   */
  it('has correct URLs for each social platform', () => {
    render(<SocialLinks />);
    
    const linkedIn = screen.getByLabelText('LinkedIn');
    const instagram = screen.getByLabelText('Instagram');
    const twitter = screen.getByLabelText('Twitter');
    const youtube = screen.getByLabelText('YouTube');
    
    expect(linkedIn).toHaveAttribute('href', 'https://linkedin.com/company/edubucks');
    expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/edubucks_org');
    expect(twitter).toHaveAttribute('href', 'https://twitter.com/edubucks');
    expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/channel/UC8EkXbL5QZMhfUya2BU0efA');
  });

  /**
   * Test 4: External Links Security
   * Verifies links open in new tab and have security attributes
   * WHY: target="_blank" without rel="noopener noreferrer" is a security risk
   */
  it('opens links in new tab with security attributes', () => {
    render(<SocialLinks />);
    
    const allLinks = screen.getAllByRole('link');
    
    allLinks.forEach(link => {
      // Every link should open in new tab
      expect(link).toHaveAttribute('target', '_blank');
      
      // Security: prevents new page from accessing window.opener
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  /**
   * Test 5: Custom ClassName
   * Tests that custom CSS classes are applied
   */
  it('applies custom className prop', () => {
    const { container } = render(<SocialLinks className="custom-class" />);
    const socialContainer = container.querySelector('.custom-class');
    
    expect(socialContainer).toBeInTheDocument();
  });

  /**
   * Test 6: Correct Number of Links
   * Simple sanity check - should have exactly 4 social links
   */
  it('renders exactly 4 social links', () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole('link');
    
    expect(links).toHaveLength(4);
  });
});


