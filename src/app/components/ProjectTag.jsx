import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-white bg-[#CBB26A] border-white'
    : 'text-gold border-gold hover:bg-[#181818]'
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 flex-1 px-6 py-3 text-xl cursor-pointer mb-5 max-sm:text-sm max-sm:px-6 max-sm:py-1`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
