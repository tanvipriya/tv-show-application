import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // const HelloWorld = () => <h1>Hello World</h1>;
  const { debug } = render(<App />);
  debug();
  // expect(linkElement).toBeInTheDocument();
});
