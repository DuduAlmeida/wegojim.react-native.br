import classnames from "classnames";

import "./Typography.scss";

const Title = ({
  tag = "h1",
  children,
  className,
  centered = false,
  ...props
}: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__title", {
    [className]: !!className,
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
  ...props
}: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__subtitle", {
    [className]: !!className,
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
  ...props
}: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__text", {
    [className]: !!className,
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
