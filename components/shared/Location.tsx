import React from "react";

interface ILocation {
  name: string;
  address: string;
  location: string;
}

const Location: React.FC<ILocation> = ({ name, address, location }) => {
  return (
    <div className="mb-4 lg:min-w-[160px]">
      <h3 className="mb-1 font-primary text-xs font-bold">{name}</h3>
      <p className="mb-1 font-secondary text-xs">{address}</p>
      <p className="font-secondary text-xs">{location}</p>
    </div>
  );
};

export default Location;
