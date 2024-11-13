import { cn } from "../../utils/cn";

export const VideoBackground = (props: { src: string; className: string }) => {
  return (
    <video
      className={cn("w-full h-full object-cover -z-10", props.className)}
      src={props.src}
      muted
      autoPlay
      playsInline
      preload="auto"
      loop
    ></video>
  );
};
