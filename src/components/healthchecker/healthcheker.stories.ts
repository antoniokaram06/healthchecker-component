import type { Meta, StoryObj } from "@storybook/react";
import { HealthChecker } from "./healthchecker";

const meta = {
  title: "Example/HealthChecker",
  component: HealthChecker,
  tags: ["docsPage"],
  argTypes: {
    testString: {
      control: { type: "text" },
    }
  },
} satisfies Meta<typeof HealthChecker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    testString: "Test"
  },
};
