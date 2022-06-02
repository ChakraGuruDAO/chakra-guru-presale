import { createIcon, Icon, IconProps } from "@chakra-ui/react";

export const FirstIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
    <path
      d="M12.8423 6.81818V17H11.3011V8.35938H11.2415L8.8054 9.95028V8.47869L11.3459 6.81818H12.8423Z"
      fill="currentColor"
    />
  </Icon>
);
