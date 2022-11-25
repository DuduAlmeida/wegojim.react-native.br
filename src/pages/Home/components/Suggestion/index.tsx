import { SuggestionProps } from "./types";

import "./Suggestion.scss";

export const Suggestion = ({ text, ...props }: SuggestionProps) => (
  <section className="home-suggestion" {...props}>
    <div className="home-suggestion__description">SUGESTÃO DO DIA</div>
    <div className="home-suggestion__title">{text}</div>
  </section>
);
