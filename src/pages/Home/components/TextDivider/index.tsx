import classNames from "classnames";

import "./TextDivider.scss";

const TextDivider = ({ children, className, ...props }: any) => {
  return (
    <div
      className={classNames("text-divider", {
        [className]: className,
      })}
      {...props}
    >
      <div className="text-divider__text">{children}</div>
    </div>
  );
};

export default TextDivider;
