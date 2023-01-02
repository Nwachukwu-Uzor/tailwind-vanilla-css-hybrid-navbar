import React from "react";

const Container = ({ children }) => {
  return (
    <section className="w-[95%] max-w-[1100px] mx-auto py-4">
      {children}
    </section>
  );
};

export default Container;
