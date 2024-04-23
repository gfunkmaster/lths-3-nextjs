import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the extend-expect module
import WelcomeButton from '../../app/components/welcome-button';
import { useRouter } from 'next/router';

// Mock useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
  })),
}));

describe('WelcomeButton', () => {
  it('renders a link to the dashboard', () => {
    render(<WelcomeButton />);

    // Assert that the link text and href are correct
    const linkElement = screen.getByText('Dashboard');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/dashboard');
  });

  it('applies correct styles', () => {
    render(<WelcomeButton />);

    // Assert that the link has the correct class names
    const linkElement = screen.getByText('Dashboard');
    expect(linkElement).toHaveClass('px-6');
    expect(linkElement).toHaveClass('py-3');
    expect(linkElement).toHaveClass('text-lg');
    expect(linkElement).toHaveClass('font-medium');
    expect(linkElement).toHaveClass('text-white');
    expect(linkElement).toHaveClass('bg-blue-500');
    expect(linkElement).toHaveClass('rounded-lg');
    expect(linkElement).toHaveClass('shadow-md');
    expect(linkElement).toHaveClass('hover:bg-blue-600');
    expect(linkElement).toHaveClass('transition-colors');
  });
});
