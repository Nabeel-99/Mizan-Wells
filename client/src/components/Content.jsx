import React from "react";

const Content = ({ renderCurrentView, getCurrentViewName }) => {
  return (
    <div className="flex flex-col h-full lg:ml-64 lg:p-6 gap-6 mb-10   w-full">
      <h2 className="font-satoshi-bold hidden lg:block">
        {getCurrentViewName()}
      </h2>
      {renderCurrentView()}
    </div>
  );
};

export default Content;
