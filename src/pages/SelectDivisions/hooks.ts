import { useHistory } from "react-router";

const useSelectDivisions = () => {
  const history = useHistory();

  const onSubmit = () => {
    history.push("/select-training");
  };

  return { onSubmit };
};

export default useSelectDivisions;
