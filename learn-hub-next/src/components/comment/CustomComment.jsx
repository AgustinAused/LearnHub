import React from "react";
import { RatingRead } from "../rating/RatingRead";

export default function CustomComment({ com }) {
  console.log(com);
  let score = parseInt(com.score);
  return (
    <div className="bg-white shadow rounded-lg p-4 my-4">
      <div className="flex items-center mb-2">
        <div className="ml-2 flex flex-col space-y-2 items-start">
          <div className="font-semibold text-lg">{com.name}</div>
          <RatingRead num={score} />
          <p className="text-gray-800">{com.content}</p>
        </div>
      </div>
    </div>
  );
}
