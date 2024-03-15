import React from "react";

export const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-background">
      {children}
    </div>
  );
};
