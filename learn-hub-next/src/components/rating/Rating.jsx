import React from "react";
import { Rating, Typography } from "@material-tailwind/react";

export function RatingWithItem() {
    const [rated, setRated] = React.useState(5);

    return (
        <div className="flex items-center gap-2">
            <Rating value={4} onChange={(value) => setRated(value)} />
            <Typography color="blue-gray" className="font-medium">
                {rated}.0 
            </Typography>
        </div>
    );
}
