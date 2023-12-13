import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function BackgroundBlogCard({ parrafo, persona, avatar, background }) {
  const backgroundStyle = background
    ? {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }
    : {};

  return (
    <div>
      <Card
        shadow={false}
        className="relative  h-[45rem] w-full max-w-[40rem] items-end justify-center overflow-hidden text-center"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* </CardHeader> */}
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            {parrafo}
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            {persona}
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src={avatar}
          />
        </CardBody>
      </Card>
    </div>
  );
}
