import React from "react";
import { IconType } from "react-icons";

const PropertyCard = ({
  IconComponent,
  name,
  property,
  unit,
}: {
  IconComponent: IconType;
  name: string;
  property: number | null;
  unit: string;
}) => {
  return (
    <div className="flex gap-4 justify-center items-center bg-[#111928]/75 backdrop-blur-[2.5px] backdrop-saturate-150 p-4 rounded-lg border border-white/20 ">
      <IconComponent className="text-4xl text-purple-500" />
      <div className="flex flex-col gap-0 items-start flex-1 text-md md:text-lg font-medium">
        <p className="text-xs">{name}</p>
        <p className="text-lg">
          {property ? `${property.toFixed(2)} ${unit}` : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
