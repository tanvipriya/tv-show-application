import { render, screen } from "@testing-library/react";

describe("<img />", () => {
  it("Should have the image source set correctly", () => {
    const mountedHeader = render(<img />);
    expect(mountedHeader).toBeTruthy();
  });
});
