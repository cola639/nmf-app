import React from "react";
import { create } from "react-test-renderer";

import InfoModalScreen from "../InfoModalScreen";

it("InfoModalScreen renders correctly", () => {
  const tree = create(<InfoModalScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
