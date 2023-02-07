import React from "react";

const Container = ({ title, children }) => {
  return (
    <div className="bg-white p-4 border border-red">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Container;
