import Typography from "components/Typography";
import { ExerciseComponentProps } from "./types";

const Exercise = ({
  title,
  series,
  repetitions,
  demonstrationUrl,
}: ExerciseComponentProps) => {
  return (
    <li className="exercise">
      <Typography.Text color="primary">{title}</Typography.Text>
      <div className="exercise__content">
        <button className="exercise__toggle" />

        <section>
          <Typography.Text tag="p" color="white">
            <Typography.Text tag="span" color="primary">
              {series}
            </Typography.Text>
            séries,{" "}
            <Typography.Text tag="span" color="primary">
              {repetitions}
            </Typography.Text>{" "}
            repetições
          </Typography.Text>
        </section>
      </div>
    </li>
  );
};

export default Exercise;
