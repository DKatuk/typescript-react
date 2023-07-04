import React from "react";

type childrenProps = {
  children: React.ReactNode;
};

function Layout({ children }: childrenProps) {
  return (
    <div>
      Layout test:
      {children}
    </div>
  );
}

export default Layout;
