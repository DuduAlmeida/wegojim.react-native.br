import { If } from "components/If";
import classNames from "classnames";
import Typography from "components/Typography";
import { ExerciseComponentProps } from "./types";

import "./Exercise.scss";

const Exercise = ({
  id = "",
  title,
  series,
  onToggle,
  repetitions,
  isActive = false,
  isRepetitionsAText,
}: ExerciseComponentProps) => {
  return (
    <li
      className={classNames("exercise-card", {
        "exercise-card--active": isActive,
      })}
    >
      <Typography.Text color="primary" className="exercise-card__title">
        {title}
      </Typography.Text>
      <div className="exercise-card__content">
        <button
          className="exercise-card__toggle"
          onClick={() => onToggle(String(id))}
        />

        <section>
          <Typography.Text tag="p" color="white">
            <Typography.Text tag="span" color="primary">
              {series}
            </Typography.Text>{" "}
            séries,{" "}
            <Typography.Text tag="span" color="primary">
              {repetitions}
            </Typography.Text>
            <If condition={!isRepetitionsAText}> repetições</If>.
          </Typography.Text>
        </section>
      </div>
    </li>
  );
};

export default Exercise;
