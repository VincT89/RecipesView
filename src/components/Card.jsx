import React from "react";
import Button from "./Button";

export const Card = ({ image, name, description }) => {
  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center flex flex-col items-center">
        <h3 className="text-base font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <Button className="w-40 px-3 py-1.5 text-sm rounded-lg">Dettagli</Button>
      </div>
    </article>
  );
};
