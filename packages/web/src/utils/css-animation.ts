type WaveProps = {
  background?: string;
  type: "rounded" | "rect";
};
const wave = (e: any, { background, type }: WaveProps) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const left = e.clientX - rect.left;
  const span = document.createElement("span");
  span.style.display = "block";
  span.style.position = "absolute";
  if (type === "rounded") {
    span.style.top = e.clientY - rect.top + "px";
    span.style.borderRadius = "50%";
    span.style.animation = "wave-rounded 0.3s linear";
    span.style.transform = "translate(-50%, -50%)";
  }
  if (type === "rect") {
    span.style.top = "0px";
    span.style.animation = "wave-rect 0.3s linear";
    span.style.transform = "translateX(-50%)";
  }
  span.style.left = left + "px";
  span.style.background = background || "rgba(107 ,114, 128, 0.5)";
  span.style.width = rect.width + "px";
  span.style.height = rect.height + "px";
  el.appendChild(span);
  setTimeout(() => span.remove(), 280);
};

export const cssAnimation = {
  wave,
};
