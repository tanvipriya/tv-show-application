import { render, screen } from "@testing-library/react";
import { Link } from "react-router-dom";
import routeData from "react-router";
import Navbar from "./navbar";
const mockLocation = {
  pathname: "/welcome",
  hash: "",
  search: "",
  state: "",
};
beforeEach(() => {
  jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
});
describe("should show Navbar  component to click the paticular season", () => {
  it("Should have the image source set correctly", () => {});
});
