(function() {
  const t_rex_move = e => {
    stalker.style.left = e.clientX - 50 + "px";
    stalker.style.top = e.clientY - 80 + "px";
  };

  const image =
    "https://illustrain.com/img/work/2016/illustrain02-dinosaur15.png";
  const doc = document;
  const body = doc.body;

  var stalker = doc.createElement("div");
  stalker.id = "t-rex";
  stalker.innerHTML = `<img src="${image}" alt="T.Tex image" width="200" height="200">`;
  body.appendChild(stalker);

  body.addEventListener("mousemove", t_rex_move, false);

  const style =
    "#t-rex { position: fixed;transition: left .5s ease-in-out 0s, top .5s ease-in-out 0s;-webkit-transition: left .5s ease-in-out 0s, top .5s ease-in-out 0s;z-index: 9999;}";

  const styleElement = document.createElement("style");
  styleElement.innerText = style;
  document.head.appendChild(styleElement);
})();
