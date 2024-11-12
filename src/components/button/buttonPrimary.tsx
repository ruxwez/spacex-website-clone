import { useRef, type HTMLAttributes } from "react";
import { animate } from "motion";

export const ButtonPrimary = (
  props: HTMLAttributes<HTMLAnchorElement>
): JSX.Element => {
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
      ref={ref}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      className="buttonPrimary relative flex items-center h-14 px-14 border-2 text-xs font-semibold hover:text-black transition-colors"
      href="/"
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
