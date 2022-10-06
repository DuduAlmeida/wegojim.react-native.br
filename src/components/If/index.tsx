import { IfProps } from './types';

export const If = ({
  condition = true,
  renderIf = <></>,
  renderElse = <></>,
  children,
}: IfProps): JSX.Element => {
  const ifElement = children ? children : renderIf;
  return <>{condition ? ifElement : renderElse}</>;
};
