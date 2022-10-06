import { useHistory } from "react-router";

const useHeader = ({ goTo }) => {
  let history = useHistory();

  const onIconClick = (e) => {
    if (!!goTo) history.push(goTo);
  }

  return {
    onIconClick,
  }
}

export default useHeader;