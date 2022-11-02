import { IonIcon } from "@ionic/react";
import { helpCircleOutline } from "ionicons/icons";

import { If } from "../If";
import classnames from "classnames";
import { CardProps } from "./types";
import Typography from "../Typography";

import "./Card.scss";

export const Card = ({
  entity = {},
  title = "",
  description = "",
  isSelected = false,
  onClick = () => {},
  hasSuggestion = false,
  hasContent = !!description,
  onSuggestionClick = () => {},
}: CardProps) => (
  <div
    className={classnames("wgj-card", {
      "wgj-card--selected": isSelected,
    })}
    onClick={onClick}
  >
    <If condition={!!title}>
      <Typography.Subtitle className="wgj-card__title">
        {title}
      </Typography.Subtitle>
    </If>
    <If condition={hasContent}>
      <div className="wgj-card__content">
        <p
          className="typography__text wgj-card__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <If condition={hasSuggestion}>
          <IonIcon
            icon={helpCircleOutline}
            className="wgj-card__suggestion"
            onClick={() => onSuggestionClick(entity)}
          />
        </If>
      </div>
    </If>
  </div>
);
