import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import Footer, { FOOTER_LINKS } from '../components/footer';

afterEach(cleanup);

describe('Renders the Footer with its proper links.', () => {
  it('Should contain the four lisnks', () => {
    render(<Footer />);
    const footerLinks = screen.getAllByRole('navigation');
    FOOTER_LINKS.forEach((link, index) => {
      expect(footerLinks[index]).toHaveTextContent(link.label);
    });
  });
});
