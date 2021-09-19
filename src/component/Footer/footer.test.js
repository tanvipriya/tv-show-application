import { render, screen } from "@testing-library/react";
import Footer from "./footer";

test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // const HelloWorld = () => <h1>Hello World</h1>;
  const { debug } = render(<Footer />);
  debug();
  // expect(linkElement).toBeInTheDocument();
});
