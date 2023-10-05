import { Rating } from "@material-tailwind/react";

export function RatingRead({num}) {
  return <Rating value={num} readonly />;
}