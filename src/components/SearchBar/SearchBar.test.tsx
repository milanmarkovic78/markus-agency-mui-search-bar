import React from "react";
import { render } from "@testing-library/react";
import SearchBar from './SearchBar';

describe("SearchBar Component", () => {
  test("Renders Markus SearchBar component", () => {
    render(<SearchBar />);
  });
});