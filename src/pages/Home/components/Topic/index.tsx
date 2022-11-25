import { TopicProps } from "./types";

import "./Topic.scss";

export const Topic = ({ text, ...props }: TopicProps) => (
  <li className="home-topic" {...props}>
    <div className="home-topic__title">{text}</div>
  </li>
);
