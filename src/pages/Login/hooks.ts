import { useHistory } from "react-router";

import { useAuthContext } from "contexts/AuthContext";

const useLogin = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuthContext();

  const onGoogleClick = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/select-divisions");
  };

  return { onGoogleClick };
};

export default useLogin;
