import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-auto w-full mt-14">
      <div className="h-auto w-full max-w-[calc(100%-(256px*2))] mx-auto">
        <div className="h-auto w-full max-w-5xl mx-auto p-8">{children}</div>
      </div>
    </main>
  );
};
