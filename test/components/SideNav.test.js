import React from 'react';
import { render, screen } from '@testing-library/react';
import SideNav from '../../app/ui/dashboard/sidenav';
import '@testing-library/jest-dom'; // Import the extend-expect module


describe('SideNav', () => {
  it('renders the component with proper structure', () => {
    render(<SideNav />);

    // Assert that the main container is rendered
    const mainContainer = screen.getByTestId('main-container');
    expect(mainContainer).toBeInTheDocument();

    // Assert that the Pokemon logo link is rendered
    const logoLink = screen.getByTestId('logo-link');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    // Assert that the hidden background div is rendered
    const hiddenBackgroundDiv = screen.getByTestId('hidden-background-div');
    expect(hiddenBackgroundDiv).toBeInTheDocument();
  });
});

