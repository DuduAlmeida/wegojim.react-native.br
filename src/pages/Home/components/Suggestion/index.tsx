import { SuggestionProps } from "./types";

import "./Suggestion.scss";

export const Suggestion = ({ text }: SuggestionProps) => (
  <section className="home-suggestion">
    <div className="home-suggestion__description">SUGESTÃO DO DIA</div>
    <div className="home-suggestion__title">{text}</div>
  </section>
);
