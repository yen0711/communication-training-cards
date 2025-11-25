// 很輕量的版本：先用固定題庫，之後你要再搬到 JSON 也可以
const exercises = {
  listen: [
    "今天跟任何一個人說話時，試著讓對方完整說完一句話後，再開口回應。",
    "跟熟悉的人聊天時，刻意多問一句：『所以你最在意的是哪一個部分？』",
    "今天找一個人，專心聽他說話 2 分鐘，不急著講自己的故事。"
  ],
  speak: [
    "今天至少跟一個人說出：『我現在有點緊張／擔心，但我還是想試試看。』",
    "跟可信任的人，練習說一句：『其實我要的是……』 而不是只講理由。",
    "當別人問你想法時，不要說『都可以』，試著說出一個你真的比較想要的選項。"
  ],
  think: [
    "今天發生一件讓你不舒服的小事時，寫下：我在怕什麼？我在生什麼氣？",
    "晚上睡前，回想今天一次對話：哪一刻你其實想說別的，但沒有說出口？",
    "遇到批評時，在心裡拆解：『這句話裡，哪些是事實？哪些只是對方的觀點？』"
  ],
  observe: [
    "在一次對話中，注意對方說話時的眼神變化，事後寫下一個你注意到的細節。",
    "今天觀察一個人說『沒事啦』的時候，他的表情或身體有沒有哪裡不一樣？",
    "今天留意自己聲音：當你緊張時，說話速度、音量會有什麼變化？"
  ]
};

function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

document.querySelectorAll("button[data-type]").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    const card = document.querySelector("#card");

    const text = pickRandom(exercises[type]);

    card.innerHTML = `<p class="card-hint">${text}</p>`;
  });
});
