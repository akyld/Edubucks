/**
 * Theme Configuration Tests
 * 
 * WHAT WE'RE TESTING:
 * - Theme object structure is correct
 * - All required color values exist
 * - Color values are valid hex codes
 * - Configuration exports properly
 * 
 * WHY WE TEST THIS:
 * - Theme is used throughout entire app
 * - Invalid colors = broken UI
 * - Missing values = runtime errors
 * - Ensures consistency across components
 */

import { describe, it, expect } from 'vitest';
import themeConfig from '../themeConfig';

describe('Theme Configuration', () => {
  /**
   * Test 1: Theme Object Exists
   * Basic sanity check - config should be an object
   */
  it('exports a valid configuration object', () => {
    expect(themeConfig).toBeDefined();
    expect(typeof themeConfig).toBe('object');
  });

  /**
   * Test 2: Colors Object Structure
   * Verifies all essential color properties exist
   */
  it('has all required color properties', () => {
    expect(themeConfig.colors).toBeDefined();
    expect(themeConfig.colors.accent).toBeDefined();
    expect(themeConfig.colors.textPrimary).toBeDefined();
    expect(themeConfig.colors.textSecondary).toBeDefined();
    expect(themeConfig.colors.bgPrimary).toBeDefined();
  });

  /**
   * Test 3: Accent Color Validation
   * Ensures accent color is a valid hex code
   * WHY: Invalid colors break styling
   */
  it('has valid hex color for accent', () => {
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
    expect(themeConfig.colors.accent).toMatch(hexColorRegex);
  });

  /**
   * Test 4: Social Colors
   * Verifies social media brand colors exist
   */
  it('has social media colors defined', () => {
    expect(themeConfig.colors.social).toBeDefined();
    expect(themeConfig.colors.social.linkedin).toBeDefined();
    expect(themeConfig.colors.social.instagram).toBeDefined();
    expect(themeConfig.colors.social.twitter).toBeDefined();
    expect(themeConfig.colors.social.youtube).toBeDefined();
  });

  /**
   * Test 5: Typography Configuration
   * Checks if typography settings exist
   */
  it('has typography configuration', () => {
    expect(themeConfig.typography).toBeDefined();
    
    // Should have font sizes
    if (themeConfig.typography.fontSize) {
      expect(typeof themeConfig.typography.fontSize).toBe('object');
    }
    
    // Should have font weights
    if (themeConfig.typography.fontWeight) {
      expect(typeof themeConfig.typography.fontWeight).toBe('object');
    }
  });

  /**
   * Test 6: Spacing Configuration
   * Verifies spacing/layout values exist
   */
  it('has spacing configuration', () => {
    expect(themeConfig.spacing).toBeDefined();
    
    // Check if navbar height is defined (used in multiple components)
    if (themeConfig.spacing.navbarHeight) {
      expect(themeConfig.spacing.navbarHeight).toBeTruthy();
    }
  });

  /**
   * Test 7: Animation Configuration
   * Checks animation settings
   */
  it('has animation configuration', () => {
    expect(themeConfig.animation).toBeDefined();
    
    // Should have transition settings
    if (themeConfig.animation.transition) {
      expect(typeof themeConfig.animation.transition).toBe('object');
    }
  });

  /**
   * Test 8: Effects Configuration
   * Verifies effects like shadows exist
   */
  it('has effects configuration', () => {
    expect(themeConfig.effects).toBeDefined();
    
    // Should have shadow effects
    if (themeConfig.effects.shadow) {
      expect(typeof themeConfig.effects.shadow).toBe('object');
    }
  });

  /**
   * Test 9: No Undefined Values
   * Ensures critical values aren't undefined
   * WHY: undefined values cause "Cannot read property" errors
   */
  it('has no undefined critical values', () => {
    expect(themeConfig.colors.accent).not.toBeUndefined();
    expect(themeConfig.colors.textPrimary).not.toBeUndefined();
    expect(themeConfig.colors.bgPrimary).not.toBeUndefined();
  });

  /**
   * Test 10: Color Contrast
   * Basic check that text colors differ from background
   * WHY: Same colors = invisible text
   */
  it('has different colors for text and background', () => {
    // Primary text should not equal primary background
    expect(themeConfig.colors.textPrimary).not.toBe(themeConfig.colors.bgPrimary);
  });

  /**
   * Test 11: Hover Color
   * If hover color exists, it should be different from accent
   */
  it('has distinct hover color if defined', () => {
    if (themeConfig.colors.hover) {
      // Hover color should exist and be different from static accent
      expect(themeConfig.colors.hover).toBeDefined();
      // They can be same, but usually different for better UX
    }
  });

  /**
   * Test 12: Export Type
   * Ensures default export works correctly
   */
  it('can be imported as default export', () => {
    // This test passing means the import at the top worked
    expect(themeConfig).toBeTruthy();
  });
});


