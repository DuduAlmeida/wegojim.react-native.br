import classnames from "classnames";

import "./Typography.scss";

const Title = ({
  tag = "h1",
  children,
  className,
  centered = false,
  color = "primary",
  ...props
}: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__title", {
    [className]: !!className,
    [`typography__title--${color}`]: !!color,
    "typography__title--centered": !!centered,
  });

  return (
    <CustomTag {...props} className={titleClasses}>
      {children}
    </CustomTag>
  );
};

const Subtitle = ({
  children,
  className,
  tag = "h2",
  centered = false,
  color = "primary",
  ...props
}: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__subtitle", {
    [className]: !!className,
    [`typography__subtitle--${color}`]: !!color,
    "typography__subtitle--centered": !!centered,
  });

  return (
    <CustomTag {...props} className={titleClasses}>
      {children}
    </CustomTag>
  );
};

const Text = ({
  tag = "p",
  children,
  className,
  centered = false,
  color = "primary",
  ...props
}: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__text", {
    [className]: !!className,
    [`typography__text--${color}`]: !!color,
    "typography__text--centered": !!centered,
  });

  return (
    <CustomTag {...props} className={titleClasses}>
      {children}
    </CustomTag>
  );
};

export default {
  Text,
  Title,
  Subtitle,
};
