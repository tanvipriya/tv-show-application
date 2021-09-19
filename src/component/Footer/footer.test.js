import { render, screen } from "@testing-library/react";
import Footer from "./footer";

test("renders learn react link", () => {
  const { debug } = render(<Footer />);
  debug();
});
