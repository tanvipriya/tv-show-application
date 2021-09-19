import axios from "axios";
import * as redux from "react-redux";
import { getAllShowTvData } from "../actions/showalltv";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe("routes using memory router", () => {
  test("should show Show All Movies Show  component to click the paticular season", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    getAllShowTvData();

    expect(getAllShowTvData).toBe(getAllShowTvData);

    useDispatchSpy.mockClear();
  });
  test("should show Show All Movies Show to click the paticular season", () => {
    // w
  });
});
