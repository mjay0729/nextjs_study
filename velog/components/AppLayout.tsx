import React from "react";
import { Button } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      { children }
    <Button type="primary">Antd 버튼</Button>
    
  </div>
  );
};

export default AppLayout;