import { useHistory } from "react-router";

const useLogin = () => {
  const history = useHistory();

  const onGoogleClick = () => {
    history.push("/select-divisions");
  };

  return { onGoogleClick };
};

export default useLogin;
