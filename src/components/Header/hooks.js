import { useState } from "react";
import { useHistory } from "react-router";

const useHeader = ({ goTo, onRightIconClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let history = useHistory();

  const handleSidebar = (e) => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onIconClick = (e) => {
    if (!!goTo) return history.push(goTo);

    onRightIconClick(e);
  };

  return {
    onIconClick,
    handleSidebar,
    isSidebarOpen,
  };
};

export default useHeader;
