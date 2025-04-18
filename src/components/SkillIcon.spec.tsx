import { describe, test, expect } from "vitest";
import renderWithTheme from "../tests/test-helpers";
import SkillIcon from "./SkillIcon";

describe("skill icon tests", () => {
  test("should render react with an icon", () => {
    const { getByTestId } = renderWithTheme(<SkillIcon name="React" />);

    expect(getByTestId("skill-icon-name")).toBeDefined();
    expect(getByTestId("skill-icon-name").innerHTML).toContain("React");
  });
});
