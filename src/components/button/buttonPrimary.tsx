import { animate } from "motion";
import { useRef, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const ButtonPrimary = (
  props: Props
): JSX.Element => {
  let isAnimating = false;
  const ref = useRef<HTMLAnchorElement>(null);

  const onHoverEnter = () => {
    if (!ref.current) return;

    let span = ref.current.querySelector("span") as HTMLSpanElement;

    span.style.top = "unset";
    span.style.bottom = "0";

    animate(span, {
      height: "100%",
    });
  };

  const onHoverLeave = () => {
    if (!ref.current) return;

    let span = ref.current.querySelector("span") as HTMLSpanElement;

    span.style.bottom = "unset";
    span.style.top = "0";

    animate(span, {
      height: "0%",
    });
  };


  return (
    <a
      {...props}
      ref={ref}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      className="buttonPrimary relative flex items-center h-14 px-14 border-2 text-xs font-semibold hover:text-black transition-colors"
    >
      <span
        style={{
          bottom: 0,
        }}
        className="absolute left-0 w-full bg-white"
      ></span>
      <p className="z-10">{props.children}</p>
    </a>
  );
};
