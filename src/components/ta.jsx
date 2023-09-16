/* global Calendly */

export default function TeachingAssistant({
  url, img, name
}) {
  return (
    <div className="w-1/3 mx-auto">
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          document.body.appendChild(script);
          script.onload = () =>
            Calendly.initPopupWidget({
              url: url,
            });
        }}
      >
        <img src={`images/${img}.jpeg`} className="rounded-full shadow-xl" />
        <h2>{name}</h2>
      </a>
    </div>
  );
}
