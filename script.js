document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    const samples = {
      listen: "🌟 專注聽完對方一句完整的句子。",
      speak: "🗣 說一句短句：『我現在的感受是……』",
      think: "🔍 觀察你此刻的情緒，不做評價。",
      observe: "👁 注意對方語氣或表情的一個細節。"
    };

    const card = document.querySelector("#card");
    card.innerHTML = `<p class="card-hint">${samples[type]}</p>`;
  });
});
