import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Welcome from "../app/page";

jest.mock('next/navigation', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

describe('Test Welcome Page', () => {
  test('should h1 be display', () => {
    render(<Welcome />)

    expect(screen.getByText("Bienvenido a Rick and Morty")).toBeInTheDocument()
  });

  test('should button be display', () => {
    render(<Welcome />)

    expect(screen.getByRole("button")).toHaveTextContent("Comenzar")
  });
})
