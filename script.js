// B 版：有結構的小卡資料庫，每個類型可以隨機抽一張卡

const cards = [
  // 👂 聽
  {
    type: "listen",
    typeLabel: "👂 聽 · 只要多聽一點點",
    title: "先讓對方說完一句話",
    description: "今天不要求自己變成超會傾聽的人，只要在對方說話時，讓他完整說完一句話再回應就好。",
    action: "找一個對話練習：當對方說話時，在心裡默數 1 秒，確認對方停下來了再開口。"
  },
  {
    type: "listen",
    typeLabel: "👂 聽 · 練習複述最後一句",
    title: "耳朵記不住沒關係，只要記住一句",
    description: "你不需要記住全部內容，只要抓住對方最後說的那一句，輕輕在心裡重複一次。",
    action: "今天遇到一段對話，在心裡默默重複一次對方的最後一句話，就算完成任務。"
  },
  {
    type: "listen",
    typeLabel: "👂 聽 · 情緒優先",
    title: "先聽情緒，再聽內容",
    description: "當對方講話有點激動時，不急著分辨對錯，只要在心裡先判斷：他是緊張、生氣，還是其實很害怕？",
    action: "今天至少有一次，在對話裡問自己：「他現在比較像是什麼情緒？」不用說出來，只要在心裡想就好。"
  },

  // 🗣️ 說
  {
    type: "speak",
    typeLabel: "🗣️ 說 · 三句話就好",
    title: "用三句話說完一件事",
    description: "你不用講得很完整，只要練習『三句話說完一件小事』，逼自己先整理再開口。",
    action: "今天可以選一個小事件，像是：今天吃了什麼、看到什麼，把它用三句話講完，說給自己或一個熟人聽。"
  },
  {
    type: "speak",
    typeLabel: "🗣️ 說 · 用「我覺得」開頭",
    title: "練習說出自己的感覺",
    description: "很多時候你其實有感覺，但會卡住不知道怎麼講。試著只做一件事：把句子改成『我覺得……』。",
    action: "今天找一個安全的對象，試著說出一句以「我覺得」開頭的句子，比如：「我覺得剛剛那樣有點緊張。」"
  },
  {
    type: "speak",
    typeLabel: "🗣️ 說 · 不用講得很完美",
    title: "講得不完美也可以",
    description: "說話不需要一次就對，只要先讓你的聲音出來，之後再慢慢修正就好。",
    action: "今天允許自己講一句『有點卡卡的話』，不必補救、不必解釋太多，就讓它存在。"
  },

  // 🧠 想
  {
    type: "think",
    typeLabel: "🧠 想 · 三秒自我提問",
    title: "停一下，問自己一個問題",
    description: "你不用想清楚人生，只要在情緒起來的瞬間，先停三秒，問自己一個小問題就好。",
    action: "今天情緒一浮上來，就在心裡問自己：『我現在最強烈的感覺是什麼？』不用分析，只要給它一個名字。"
  },
  {
    type: "think",
    typeLabel: "🧠 想 · 分開事實與想像",
    title: "這是事實，還是腦補？",
    description: "很多焦慮來自於『自己腦補的劇情』。你可以練習把它拆成兩塊：眼前發生的事 vs. 自己補上的故事。",
    action: "今天遇到一件讓你不安的事情，在心裡分兩行：第一行寫「事實」，第二行寫「我腦中自己加上的劇情」。"
  },
  {
    type: "think",
    typeLabel: "🧠 想 · 不急著給答案",
    title: "先知道自己還沒準備好",
    description: "很多時候你只是還沒準備好回答，不是你笨。先承認「我需要一點時間想一想」，本身就是一種清楚。",
    action: "今天當你不知道怎麼回應時，可以試著說一句：「這我想一下，晚點再回你。」就算完成。"
  },

  // 👀 看
  {
    type: "observe",
    typeLabel: "👀 看 · 多看一個小細節",
    title: "看見平常不會看的東西",
    description: "觀察不是要你變得敏感，而是讓你把注意力輕輕拉回當下，多看一個小地方就好。",
    action: "今天刻意留意一個人的小細節：他的衣角、手勢、眼神，或者他今天看起來比平常累一點或亮一點。"
  },
  {
    type: "observe",
    typeLabel: "👀 看 · 看見自己的狀態",
    title: "觀察自己，而不是檢討自己",
    description: "你可以像看別人一樣，看一下現在的自己：姿勢、呼吸、臉部肌肉有多用力。",
    action: "今天找一個時間，像看陌生人一樣打量自己 5 秒，心裡描述一下：『看起來有點累／還蠻放鬆的。』"
  },
  {
    type: "observe",
    typeLabel: "👀 看 · 把畫面記住就好",
    title: "用畫面記住一刻",
    description: "你說你圖像記憶很強，那就善用這個優勢。今天挑一個畫面，把它當成相片，收進腦袋就好。",
    action: "今天刻意記住一個畫面：可能是桌上的杯子、窗外的光、某個人低頭的樣子。只要記住畫面就好，不一定要用語言形容。"
  }
];

// 取得按鈕與卡片容器
const buttons = document.querySelectorAll(".buttons button");
const cardEl = document.getElementById("card");

// 初始化提示文字
cardEl.innerHTML = `
  <p class="card-hint">
    點上面任一主題開始。<br/>
    每次只要做卡片上的「一件小事」就好，不需要全部做到。
  </p>
`;

// 抽卡函式：依照類型挑隨機一張
function pickRandomCardByType(type) {
  const filtered = cards.filter((c) => c.type === type);
  if (!filtered.length) return null;
  const index = Math.floor(Math.random() * filtered.length);
  return filtered[index];
}

// 渲染卡片
function renderCard(card) {
  if (!card) return;
  cardEl.style.opacity = 0;

  setTimeout(() => {
    cardEl.innerHTML = `
      <p class="card-hint">${card.typeLabel}</p>
      <p class="card-title"><strong>${card.title}</strong></p>
      <p class="card-body">${card.description}</p>
      <p class="card-action-label">今天可以試著做：</p>
      <p class="card-action">${card.action}</p>
    `;
    cardEl.style.opacity = 1;
  }, 150);
}

// 綁定按鈕事件
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 清除 active 樣式
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.getAttribute("data-type");
    const card = pickRandomCardByType(type);
    renderCard(card);
  });
});
