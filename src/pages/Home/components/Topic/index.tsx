import { TopicProps } from "./types";

import "./Topic.scss";

export const Topic = ({ text }: TopicProps) => (
  <li className="home-topic">
    <div className="home-topic__title">{text}</div>
  </li>
);
