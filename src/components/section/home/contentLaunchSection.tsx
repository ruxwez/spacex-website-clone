import { useEffect, useRef } from "react";
import type { ILaunchSectionContent } from "../../../types/sections/launchSection";
import { ButtonPrimary } from "../../button/buttonPrimary";
import { animate, inView, stagger } from "motion";

export const ContentLaunchSection = ({
  content,
}: {
  content: ILaunchSectionContent;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let elements = ref.current.querySelectorAll("h2, p.font-thin, a");

    inView(ref.current, () => {
      animate(
        elements,
        {
          y: [100, 0],
          opacity: [0, 1],
          filter: ["blur(10px)", "blur(0px)"],
        },
        {
          delay: stagger(0.1),
          duration: 0.6,
        }
      );
    });
  }, []);

  return (
    <div
      ref={ref}
      className="contentSectionHome flex flex-col items-start mb-32 gap-9 max-md:gap-4 uppercase text-white drop-shadow-md"
    >
      <div className="flex flex-col gap-2">
        {content.showSubtitle && (
          <p className="font-thin">
            {content.isComing ? "Upcoming launch" : "Recent launch"}
          </p>
        )}
        <h2 className="text-5xl max-md:text-4xl max-w-[31rem] max-md:max-w-sm font-semibold">
          {content.title}
        </h2>
      </div>
      <ButtonPrimary href={content.href}>
        {content.linkTitle
          ? content.linkTitle
          : content.isComing
          ? "Watch"
          : "Rewatch"}
      </ButtonPrimary>
    </div>
  );
};
