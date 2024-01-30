import type { Meta, StoryObj } from "@storybook/react"
import Heading from "./Heading"

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    size: "medium",
    headingText: "h1 heading",
  },
}
export const H2: Story = {
  args: {
    size: "medium",
    headingLevel: "h2",
    headingText: "h2 heading",
  },
}
export const H3: Story = {
  args: {
    size: "medium",
    headingLevel: "h3",
    headingText: "h3 heading",
  },
}
export const H4: Story = {
  args: {
    size: "medium",
    headingLevel: "h4",
    headingText: "h4 heading",
  },
}
export const H5: Story = {
  args: {
    size: "medium",
    headingLevel: "h5",
    headingText: "h5 heading",
  },
}
export const H6: Story = {
  args: {
    size: "medium",
    headingLevel: "h6",
    headingText: "h6 heading",
  },
}
