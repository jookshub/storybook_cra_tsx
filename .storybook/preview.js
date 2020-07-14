import React from "react";
import {
  addDecorator,
  getStorybook
} from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

addDecorator((Story) => (
    <Story />
));

export { getStorybook };
