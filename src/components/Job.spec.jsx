import React from "react";
import Job from "./Job";
import renderWithTheme from "../tests/test-helpers";

describe("job tests", () => {
  it("should render a job with the relevant information", () => {
    const { getByTestId } = renderWithTheme(
      <Job
        title="astronaut"
        description="fly big rockets"
        place="the moon"
        years="July 20, 1969"
      />
    );

    const title = getByTestId("job-title");
    const description = getByTestId("job-description");
    const place = getByTestId("job-place");
    const years = getByTestId("job-years");

    expect(title.innerHTML).toBe("astronaut");
    expect(description.getElementsByTagName("p")[0].innerHTML).toBe(
      "fly big rockets"
    );
    expect(place.innerHTML).toBe("the moon");
    expect(years.innerHTML).toBe("July 20, 1969");
  });
});
