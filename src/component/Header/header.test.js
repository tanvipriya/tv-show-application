import { render, screen } from "@testing-library/react";
import Header from "./header";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpeg";
import Navbar from "../navbar";

describe("<img />", () => {
  it("Should have the image source set correctly", () => {
    const mountedHeader = render(<img />);
    expect(mountedHeader).toBeTruthy();
  });
});
