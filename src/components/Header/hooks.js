import { useState } from 'react';
import { useHistory } from "react-router";


const useHeader = ({ goTo }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let history = useHistory();

  const handleSidebar = (e) => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const onIconClick = (e) => {
    if (!!goTo) history.push(goTo);
  }

  return {
    onIconClick, handleSidebar, isSidebarOpen
  }
}

export default useHeader;