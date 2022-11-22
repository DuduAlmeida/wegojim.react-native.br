import { TopicProps } from "./types";

export const Topic = ({ text }: TopicProps) => (
  <li className="home-topic">
    <div className="home-topic__description">SUGESTÃO DO DIA</div>
    <div className="home-topic__title">{text}</div>
  </li>
);
