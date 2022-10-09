import classnames from "classnames";

import "./Typography.scss";

const Title = ({ tag = "h1", children, className, ...props }: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__title", {
    [className]: !!className,
  });

  return (
    <CustomTag {...props} className={titleClasses}>
      {children}
    </CustomTag>
  );
};

const Subtitle = ({ tag = "h2", children, className, ...props }: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__title", {
    [className]: !!className,
  });

  return (
    <CustomTag {...props} className={titleClasses}>
      {children}
    </CustomTag>
  );
};

const Text = ({ tag = "p", children, className, ...props }: any) => {
  const CustomTag = tag;
  const titleClasses = classnames("typography__title", {
    [className]: !!className,
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
