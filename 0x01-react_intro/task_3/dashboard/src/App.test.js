import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders a div with the class App-header', () => {
    const { container } = render(<App />);
    expect(container.querySelector('div.App-header')).toBeInTheDocument();
  });

  it('renders a div with the class App-body', () => {
    const { container } = render(<App />);
    expect(container.querySelector('div.App-body')).toBeInTheDocument();
  });

  it('renders a div with the class App-footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('div.App-footer')).toBeInTheDocument();
  });
});
