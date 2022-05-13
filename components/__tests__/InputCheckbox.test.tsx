import { render, screen } from "@testing-library/react";
import InputCheckbox from "components/InputCheckbox";

test("input checkbox unchecked state", () => {
  render(
    <InputCheckbox checked={false} handleChange={() => {}}>
      test
    </InputCheckbox>
  );

  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("input checkbox checked state", async () => {
  render(
    <InputCheckbox checked={true} handleChange={() => {}}>
      test
    </InputCheckbox>
  );

  expect(screen.getByRole("checkbox")).toBeChecked();
});
