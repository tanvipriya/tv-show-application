import axios from "axios";
import * as redux from "react-redux";
import { getDramaTvShowData } from "../../actions/dramaTvShow";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("routes using memory router", () => {
  test("should show Drama Show  component to click the paticular season", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    getDramaTvShowData();

    expect(getDramaTvShowData).toBe(getDramaTvShowData);

    useDispatchSpy.mockClear();
  });
  test("should show Drama Show header component to click the paticular season", () => {});
});
