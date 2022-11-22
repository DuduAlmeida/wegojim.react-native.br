import { SuggestionProps } from "./types";

export const Suggestion = ({ text }: SuggestionProps) => (
  <li className="home-suggestion">
    <div className="home-suggestion__description">SUGESTÃO DO DIA</div>
    <div className="home-suggestion__title">{text}</div>
  </li>
);
