import React from "react";
import { RatingRead } from "../rating/RatingRead";

export default function CustomComment({com}) {
    return (
        <div className="bg-white shadow rounded-lg p-4 my-4">
          <div className="flex items-center mb-2">
            <div className="bg-gray-300 w-12 h-12 rounded-full flex-shrink-0"></div>
            <div className="ml-2">
              <div className="font-semibold text-lg">{com.autor}</div>
            </div>
          </div>
          <p className="text-gray-800">{com.comentario}</p>
          <RatingRead num={com.rating} />
        </div>
      );
};
