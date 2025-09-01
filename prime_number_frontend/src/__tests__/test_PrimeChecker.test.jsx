import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// NOTE: The PrimeChecker component does not exist yet in the codebase.
// Once implemented, update this import to the correct path and remove .skip from the describe/test blocks.
// import PrimeChecker from '../PrimeChecker';

// Utility to mock fetch responses
function mockFetchOnce(data, ok = true, status = 200) {
  global.fetch = jest.fn().mockResolvedValue({
    ok,
    status,
    json: async () => data,
  });
}

describe.skip('PrimeChecker form behavior (to be enabled when component exists)', () => {
  test.skip('Form renders and handles correct integer input', () => {
    // render(<PrimeChecker />);
    // const input = screen.getByLabelText(/enter a number/i);
    // fireEvent.change(input, { target: { value: '37' } });
    // expect(input).toHaveValue(37);
    // const submit = screen.getByRole('button', { name: /check/i });
    // expect(submit).toBeEnabled();
  });

  test.skip('Input validation errors shown for non-integer inputs', async () => {
    // render(<PrimeChecker />);
    // const input = screen.getByLabelText(/enter a number/i);

    // fireEvent.change(input, { target: { value: 'abc' } });
    // expect(await screen.findByText(/please enter a valid integer/i)).toBeInTheDocument();

    // fireEvent.change(input, { target: { value: '12.3' } });
    // expect(await screen.findByText(/please enter a valid integer/i)).toBeInTheDocument();

    // fireEvent.change(input, { target: { value: '' } });
    // expect(await screen.findByText(/input is required/i)).toBeInTheDocument();
  });

  test.skip('Submission simulates backend and displays correct prime result', async () => {
    // Mock backend success returning isPrime true
    // mockFetchOnce({ isPrime: true });

    // render(<PrimeChecker apiBase="/api" />);
    // const input = screen.getByLabelText(/enter a number/i);
    // fireEvent.change(input, { target: { value: '13' } });
    // fireEvent.click(screen.getByRole('button', { name: /check/i }));

    // await waitFor(() => {
    //   expect(screen.getByText(/13 is prime/i)).toBeInTheDocument();
    // });

    // Ensure fetch was called with correct URL (example contract)
    // expect(global.fetch).toHaveBeenCalledWith('/api/prime?number=13', expect.any(Object));
  });

  test.skip('Submission simulates backend and displays correct non-prime result', async () => {
    // mockFetchOnce({ isPrime: false });

    // render(<PrimeChecker apiBase="/api" />);
    // const input = screen.getByLabelText(/enter a number/i);
    // fireEvent.change(input, { target: { value: '12' } });
    // fireEvent.click(screen.getByRole('button', { name: /check/i }));

    // await waitFor(() => {
    //   expect(screen.getByText(/12 is not prime/i)).toBeInTheDocument();
    // });
  });

  test.skip('Error state for backend/network issues is shown', async () => {
    // Simulate a network error or non-ok response
    // global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    // render(<PrimeChecker apiBase="/api" />);
    // const input = screen.getByLabelText(/enter a number/i);
    // fireEvent.change(input, { target: { value: '7' } });
    // fireEvent.click(screen.getByRole('button', { name: /check/i }));

    // await waitFor(() => {
    //   expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    // });
  });
});
