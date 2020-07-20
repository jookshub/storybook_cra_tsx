import {
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React from "react";
import App from "./App";

export default {
  title: "Test",
  decorators: [withKnobs]
};

export const Test = () => (
  <div>{text('Card Text', 'Action Card')}</div>
);

export const LintDemo = () => (
  <App/>
);