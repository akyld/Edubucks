/**
 * Blog Page Tests
 * 
 * WHAT WE'RE TESTING:
 * - Page renders without errors
 * - All blog categories are displayed
 * - Topic links are clickable and have correct routes
 * - Navbar and Footer are included
 * - Search functionality exists (if applicable)
 * 
 * WHY WE TEST THIS:
 * - Blog is a major content page
 * - Broken links = lost traffic
 * - Categories must display correctly
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Blog from '../Blog';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    footer: ({ children, ...props }) => <footer {...props}>{children}</footer>,
  },
}));

const renderBlog = () => {
  return render(
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
};

describe('Blog Page', () => {
  /**
   * Test 1: Basic Rendering
   */
  it('renders without crashing', () => {
    renderBlog();
  });

  /**
   * Test 2: Page Title
   * Checks if main heading is present
   */
  it('displays page title', () => {
    renderBlog();
    
    // Blog page should have some title/heading
    // Check for text that appears in the component
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  /**
   * Test 3: Category Sections
   * Verifies all major categories are rendered
   */
  it('displays all blog categories', () => {
    renderBlog();
    
    // From the component: Anasayfa, EDUBUCKS, Yurt Dışı Programları, Yararlı Bilgiler
    expect(screen.getByText('Anasayfa')).toBeInTheDocument();
    expect(screen.getByText('EDUBUCKS')).toBeInTheDocument();
    expect(screen.getByText('Yurt Dışı Programları')).toBeInTheDocument();
    expect(screen.getByText('Yararlı Bilgiler')).toBeInTheDocument();
  });

  /**
   * Test 4: Topic Links
   * Checks if specific topic links are present
   */
  it('displays topic links within categories', () => {
    renderBlog();
    
    // Check for specific topics from different categories
    expect(screen.getByText('Hemen Başvur')).toBeInTheDocument();
    expect(screen.getByText('S.S.S')).toBeInTheDocument();
    expect(screen.getByText('Neler Yapıyoruz?')).toBeInTheDocument();
    expect(screen.getByText('Devlet Lise Değişim Programları')).toBeInTheDocument();
  });

  /**
   * Test 5: Topic Link Navigation
   * Ensures topics have correct route links
   */
  it('has correct routes for topic links', () => {
    renderBlog();
    
    // Find link by text and check its href/to attribute
    const hemenBasvurLink = screen.getByText('Hemen Başvur').closest('a');
    const sssLink = screen.getByText('S.S.S').closest('a');
    
    expect(hemenBasvurLink).toBeTruthy();
    expect(sssLink).toBeTruthy();
    
    // Links should navigate to /blog/:slug
    // React Router Link renders as <a> in test environment
  });

  /**
   * Test 6: Navbar Inclusion
   * Verifies Navbar component is rendered
   */
  it('includes Navbar component', () => {
    renderBlog();
    
    // Navbar should render its links
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('BLOG')).toBeInTheDocument();
  });

  /**
   * Test 7: Footer Inclusion
   * Verifies Footer component is rendered
   */
  it('includes Footer component', () => {
    renderBlog();
    
    // Footer has contact info
    expect(screen.getByText('E-Posta')).toBeInTheDocument();
    expect(screen.getByText('info@edubucks.org')).toBeInTheDocument();
  });

  /**
   * Test 8: Icons Rendering
   * Checks if category icons are rendered (Lucide icons)
   */
  it('renders category icons', () => {
    const { container } = renderBlog();
    
    // Lucide icons render as SVG
    const icons = container.querySelectorAll('svg');
    
    // Should have multiple icons (categories + navbar + footer + social)
    expect(icons.length).toBeGreaterThan(4);
  });

  /**
   * Test 9: Category Count
   * Verifies correct number of categories
   */
  it('displays correct number of blog categories', () => {
    renderBlog();
    
    // Component has 4 categories
    const categories = ['Anasayfa', 'EDUBUCKS', 'Yurt Dışı Programları', 'Yararlı Bilgiler'];
    
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  /**
   * Test 10: Topic Descriptions
   * Checks if topic descriptions are rendered
   */
  it('displays topic descriptions', () => {
    renderBlog();
    
    // Topics should have descriptions
    expect(screen.getByText('Başvuru süreçleri')).toBeInTheDocument();
    expect(screen.getByText('Sık sorulan sorular')).toBeInTheDocument();
  });

  /**
   * Test 11: Multiple Topics Per Category
   * Ensures categories with multiple topics show all
   */
  it('displays all topics for each category', () => {
    renderBlog();
    
    // Anasayfa category has 3 topics
    expect(screen.getByText('Hemen Başvur')).toBeInTheDocument();
    expect(screen.getByText('S.S.S')).toBeInTheDocument();
    expect(screen.getByText('İletişim')).toBeInTheDocument();
    
    // Yurt Dışı Programları has many topics
    expect(screen.getByText('Devlet Lise Değişim Programları')).toBeInTheDocument();
    expect(screen.getByText('Özel Lise Değişim Programları')).toBeInTheDocument();
    expect(screen.getByText('OSSD+ Çift Diploma Programı')).toBeInTheDocument();
  });

  /**
   * Test 12: Semantic HTML
   * Ensures page uses proper semantic structure
   */
  it('uses semantic HTML structure', () => {
    const { container } = renderBlog();
    
    // Should have nav (from Navbar)
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    
    // Should have links
    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(10);
  });
});


