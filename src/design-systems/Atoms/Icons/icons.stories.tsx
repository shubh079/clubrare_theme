import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { ComponentType } from "react";

import { IconProps, CheckIconProps } from "./interface";
import { InfoIcon } from "./icons";

export default {
  title: "Atoms/Icons",
  component: InfoIcon,
  argTypes: {
    className: {
      defaultValue: "w-8 h-8",
      table: {
        disabled: true,
      },
    },
  },
} as ComponentMeta<typeof InfoIcon>;

interface ComponentProps extends IconProps, CheckIconProps {
  Icon: ComponentType<IconProps | CheckIconProps>;
}

const Template: ComponentStory<React.FC<ComponentProps>> = ({
  Icon,
  ...iconProps
}) => <Icon width={32} height={32} {...iconProps} />;

export const Info = Template.bind({});
Info.args = { Icon: InfoIcon };

// export const Badge = Template.bind({});
// Badge.args = { Icon: BadgeIcon };
