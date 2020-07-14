import {addons} from "@storybook/addons";
import {create} from "@storybook/theming/create";

// see https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#using-managerjs
const theme = create(
  {
    base: "light",

    brandTitle: "Storybook TypeScript Demo",
    brandImage: "/logo512.png"
  });

addons.setConfig(
  {
    theme
  });
