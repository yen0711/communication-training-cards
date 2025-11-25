// ====== 資料區：跟讀句子 ======
const repeatSentences = [
  {
    en: "I'm very good, thanks.",
    zh: "我很好，謝謝你關心。",
    cat: "日常問候"
  },
  {
    en: "Take your time, I'm listening.",
    zh: "你慢慢說，我在聽。",
    cat: "傾聽"
  },
  {
    en: "Can you tell me more about that?",
    zh: "你可以多說一點嗎？",
    cat: "好奇提問"
  },
  {
    en: "I hear you, that sounds really tough.",
    zh: "我聽見了，這真的不容易。",
    cat: "共情回應"
  },
  {
    en: "Let me check if I understood you correctly.",
    zh: "我確認一下我有沒有聽懂。",
    cat: "澄清確認"
  },
  {
    en: "From your side, it feels unfair, right?",
    zh: "站在你的角度，會覺得很不公平，對嗎？",
    cat: "理解對方"
  },
  {
    en: "Right now I need a short break.",
    zh: "我現在需要先暫停一下。",
    cat: "設立界線"
  },
  {
    en: "I want to understand you, not judge you.",
    zh: "我想了解你，而不是要評價你。",
    cat: "安全感"
  },
  {
    en: "Let's find a solution that works for both of us.",
    zh: "我們來找一個對彼此都可以的做法。",
    cat: "協調"
  },
  {
    en: "Thank you for being honest with me.",
    zh: "謝謝你願意跟我說實話。",
    cat: "表達感謝"
  }
];

// ====== 資料區：肯定句 ======
const affirmations = {
  self: [
    "即使現在還不完美，我依然值得被溫柔對待。",
    "我的價值不取決於今天的效率，而在於我這個人。",
    "我正在成為一個越來越喜歡自己的大人。",
    "我可以慢慢來，不代表我做不到。",
    "就算今天只完成一小步，也是往前。",
    "我允許自己脆弱，同時也相信自己的韌性。",
    "我有權說不，也有權改變主意。",
    "我值得被看見，而不是被忽略。",
    "我正在練習把注意力從批評，移回到關心自己。",
    "我的存在，本身就是一份禮物。"
  ],
  money: [
    "我正在學習與金錢建立穩定、安心的關係。",
    "金錢流向尊重自己價值的人，我也正在成為這樣的人。",
    "我允許自己收穫與投入相稱的報酬。",
    "我有能力做出更聰明的金錢選擇，一點一點來就好。",
    "每一筆收入與支出，都是在幫我認識自己。",
    "我值得擁有足夠的資源，過有餘裕的生活。",
    "我不需要完美財務狀態，才有資格喜歡自己。",
    "我願意學習，而不是再責怪過去的自己。",
    "金錢是工具，不是評價我的標籤。",
    "我可以一邊照顧內在，一邊慢慢累積外在豐盛。"
  ],
  love: [
    "我值得在關係裡被好好對待，而不是勉強撐著。",
    "我可以同時愛對方，也照顧自己的需求。",
    "真誠的溝通，有時會害怕，但也帶來真正的靠近。",
    "我不需要完美，才配得上一段健康的感情。",
    "我正在學習分辨：是愛，還是怕被丟下。",
    "我有權選擇讓自己安心的人，而不是只抓住熟悉。",
    "關係裡的衝突，不代表失敗，而是一起練習的機會。",
    "我可以慢慢走進一段關係，而不是急著證明什麼。",
    "我願意相信，有人會欣賞真實的我。",
    "我也可以成為自己最穩定的那個陪伴。"
  ],
  social: [
    "我不需要一直說話，也可以是被喜歡的那種人。",
    "沉默不代表我沒有價值，只是我在感受與整理。",
    "我有權選擇想說的和不想說的。",
    "就算講話卡住，也不會抹滅我其他的優點。",
    "我正在練習，把注意力從『會不會出糗』移到『想連結什麼』。",
    "我可以用自己的步調，慢慢擴大人際圈。",
    "不合拍的人離開，是為了騰出位置給對的人。",
    "我說出口的每一句真心話，都在為自己負責。",
    "我可以學習表達，而不是只把情緒悶在心裡。",
    "我值得被理解，不是只被要求懂事。"
  ],
  career: [
    "我正在打造的是一個長期可以持續的生活，而不只是短暫的爆衝。",
    "我不用跟別人的時間線比，只要比昨天更靠近自己的方向一點。",
    "我做的每一個小實驗，都是在為未來累積經驗值。",
    "我允許自己換跑道，因為成長本來就會改變選擇。",
    "我可以同時追求穩定與喜歡的事情，不必二選一。",
    "休息不是退步，而是為了走更長遠的路。",
    "我正在學習把焦慮變成行動，而不是停在自我否定裡。",
    "我做得夠好，未完成的部分，明天再來就好。",
    "我值得找到一份與性格匹配的工作型態。",
    "我的價值不只在產出，更在於我帶來的視角與心。"
  ]
};

// ====== 資料區：配對題（中 → 肯定句） ======
const matchPairs = affirmations; // 直接沿用，每句就是一個 pair

// ====== 共用狀態 ======
let currentMode = "repeat";
let repeatIndex = 0;
let affirmCat = "self";
let affirmIndex = 0;
let matchCat = "self";
let matchSelected = [];
let matchAnswerMap = {}; // cardId -> index
let matchCorrectSet = new Set();

// ====== 工具：TTS ======
function speakText(text, lang = "zh-TW") {
  if (!("speechSynthesis" in window)) {
    alert("你的瀏覽器暫不支援語音播放（Speech Synthesis）。可以改成自己默念喔。");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

// 簡單相似度（給跟讀練習用）
function similarity(a, b) {
  a = a.toLowerCase().trim();
  b = b.toLowerCase().trim();
  if (!a || !b) return 0;
  const setA = new Set(a.split(/\s+/));
  const setB = new Set(b.split(/\s+/));
  const inter = [...setA].filter(x => setB.has(x)).length;
  const union = new Set([...setA, ...setB]).size;
  return inter / union;
}

// ====== DOM 取得 ======
const modeTabs = document.querySelectorAll(".voice-tab");
const panels = {
  repeat: document.getElementById("mode-repeat"),
  affirm: document.getElementById("mode-affirm"),
  match: document.getElementById("mode-match")
};
const progressFill = document.getElementById("voiceProgressFill");

// repeat
const repeatSentenceEnEl = document.getElementById("repeatSentenceEn");
const repeatSentenceZhEl = document.getElementById("repeatSentenceZh");
const repeatPlayBtn = document.getElementById("repeatPlayBtn");
const repeatRecordBtn = document.getElementById("repeatRecordBtn");
const repeatSkipBtn = document.getElementById("repeatSkipBtn");
const repeatScoreText = document.getElementById("repeatScoreText");

// affirm
const affirmCategoryRow = document.getElementById("affirmCategoryRow");
const affirmTagEl = document.getElementById("affirmTag");
const affirmTextEl = document.getElementById("affirmText");
const affirmSpeakBtn = document.getElementById("affirmSpeakBtn");
const affirmNextBtn = document.getElementById("affirmNextBtn");

// match
const matchCategoryRow = document.getElementById("matchCategoryRow");
const matchGrid = document.getElementById("matchGrid");
const matchCheckBtn = document.getElementById("matchCheckBtn");
const matchRestartBtn = document.getElementById("matchRestartBtn");
const matchMessageEl = document.getElementById("matchMessage");

// ====== 模式切換 ======
modeTabs.forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    if (mode === currentMode) return;

    currentMode = mode;

    modeTabs.forEach(b => b.classList.toggle("active", b === btn));
    Object.keys(panels).forEach(key => {
      panels[key].classList.toggle("active", key === mode);
    });

    if (mode === "repeat") updateRepeatUI();
    if (mode === "affirm") updateAffirmUI();
    if (mode === "match") setupMatchGrid();
  });
});

// ====== A. 跟讀練習 ======
function updateRepeatUI() {
  const data = repeatSentences[repeatIndex];
  if (!data) return;
  repeatSentenceEnEl.textContent = data.en;
  repeatSentenceZhEl.textContent = data.zh;
  repeatScoreText.textContent = `主題：${data.cat} · 可以先聽，覺得準備好再跟著念。`;
  updateProgress((repeatIndex + 1) / repeatSentences.length);
}

repeatPlayBtn.addEventListener("click", () => {
  const data = repeatSentences[repeatIndex];
  speakText(data.en, "en-US");
});

repeatSkipBtn.addEventListener("click", () => {
  repeatIndex = (repeatIndex + 1) % repeatSentences.length;
  updateRepeatUI();
});

repeatRecordBtn.addEventListener("click", () => {
  // 提醒：SpeechRecognition 在 iOS Safari 還不支援
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("目前瀏覽器不支援語音辨識。\n可以改成：聽一句 → 自己念三遍 → 心裡給自己 60～100 分就好。");
    return;
  }

  const data = repeatSentences[repeatIndex];
  const recog = new SpeechRecognition();
  recog.lang = "en-US";
  recog.interimResults = false;
  recog.maxAlternatives = 1;

  repeatScoreText.textContent = "正在聽你說話，請開始念句子…";
  recog.start();

  recog.onresult = (event) => {
    const spoken = event.results[0][0].transcript || "";
    const score = Math.round(similarity(spoken, data.en) * 100);
    repeatScoreText.textContent = `系統聽到：${spoken} · 相似度約 ${score} 分（只是一個參考，重點是你有開口練習 💪）`;
  };

  recog.onerror = () => {
    repeatScoreText.textContent = "語音辨識剛剛沒有成功，但沒關係，你願意再試一次就很棒了。";
  };
});

// ====== B. 正面肯定句 ======
function updateAffirmUI() {
  const list = affirmations[affirmCat] || [];
  if (!list.length) return;
  if (affirmIndex >= list.length) affirmIndex = 0;

  const text = list[affirmIndex];
  affirmTextEl.textContent = text;
  affirmTagEl.textContent = `${catLabel(affirmCat)} · #${affirmIndex + 1}`;
  updateProgress((affirmIndex + 1) / list.length);
}

function catLabel(key) {
  switch (key) {
    case "self": return "自我價值";
    case "money": return "金錢與豐盛";
    case "love": return "感情與親密";
    case "social": return "人際與表達";
    case "career": return "事業與創造";
    default: return "";
  }
}

// 切換分類（肯定句）
affirmCategoryRow.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  affirmCat = btn.dataset.cat;
  affirmIndex = 0;
  [...affirmCategoryRow.querySelectorAll("button")].forEach(b => {
    b.classList.toggle("active", b === btn);
  });
  updateAffirmUI();
});

affirmSpeakBtn.addEventListener("click", () => {
  const list = affirmations[affirmCat] || [];
  const text = list[affirmIndex] || "";
  if (text) speakText(text, "zh-TW");
});

affirmNextBtn.addEventListener("click", () => {
  const list = affirmations[affirmCat] || [];
  if (!list.length) return;
  affirmIndex = (affirmIndex + 1) % list.length;
  updateAffirmUI();
});

// ====== C. 配對小測驗 ======
function setupMatchGrid() {
  const list = (matchPairs[matchCat] || []).slice();
  if (list.length < 4) return;

  // 取 4 句做一題
  const pool = shuffle(list).slice(0, 4);

  matchAnswerMap = {};
  matchSelected = [];
  matchCorrectSet.clear();
  matchGrid.innerHTML = "";
  matchMessageEl.textContent = "規則：每次點兩張卡片，試著把成對的中文 & 肯定句配在一起。";

  let cards = [];
  pool.forEach((text, idx) => {
    const idZh = `c-${idx}-zh`;
    const idAffirm = `c-${idx}-af`;
    matchAnswerMap[idZh] = idx;
    matchAnswerMap[idAffirm] = idx;

    cards.push({
      id: idZh,
      type: "zh",
      text: `#${idx + 1}`,
      sub: "提示編號"
    });
    cards.push({
      id: idAffirm,
      type: "af",
      text,
      sub: catLabel(matchCat)
    });
  });

  cards = shuffle(cards);
  cards.forEach(card => {
    const div = document.createElement("button");
    div.className = "match-card";
    div.dataset.id = card.id;
    div.dataset.type = card.type;
    div.innerHTML = `
      <span class="match-main">${card.text}</span>
      <span class="match-sub">${card.sub}</span>
    `;
    div.addEventListener("click", () => onMatchCardClick(div));
    matchGrid.appendChild(div);
  });

  updateProgress(0.05);
}

function onMatchCardClick(cardEl) {
  const id = cardEl.dataset.id;
  if (matchCorrectSet.has(id)) return;

  // 已經選兩張，就先清掉
  if (matchSelected.length >= 2) {
    clearMatchSelection();
  }

  cardEl.classList.toggle("selected");
  if (cardEl.classList.contains("selected")) {
    matchSelected.push(id);
  } else {
    matchSelected = matchSelected.filter(x => x !== id);
  }
}

function clearMatchSelection() {
  matchSelected = [];
  matchGrid.querySelectorAll(".match-card.selected").forEach(el => {
    el.classList.remove("selected");
  });
}

matchCheckBtn.addEventListener("click", () => {
  if (matchSelected.length !== 2) {
    matchMessageEl.textContent = "一次請選兩張卡片喔，再按「檢查答案」。";
    return;
  }
  const [a, b] = matchSelected;
  const ia = matchAnswerMap[a];
  const ib = matchAnswerMap[b];

  if (ia !== undefined && ib !== undefined && ia === ib && a !== b) {
    // 配對成功
    matchCorrectSet.add(a);
    matchCorrectSet.add(b);
    matchGrid.querySelectorAll(".match-card").forEach(el => {
      if (el.dataset.id === a || el.dataset.id === b) {
        el.classList.remove("selected");
        el.classList.add("correct");
        el.disabled = true;
      }
    });
    matchSelected = [];

    const totalPairs = Object.values(matchAnswerMap).reduce((set, v) => set.add(v), new Set()).size;
    if (matchCorrectSet.size === totalPairs * 2) {
      matchMessageEl.textContent = "太讚了，全部配對完成！可以再按「再出一題」換新的句子。";
      updateProgress(1);
    } else {
      matchMessageEl.textContent = "配對成功！慢慢來，你做得很好。";
      updateProgress(matchCorrectSet.size / (totalPairs * 2));
    }
  } else {
    // 不是正確配對
    matchMessageEl.textContent = "這兩張不是一對，再試一次～";
  }
});

matchRestartBtn.addEventListener("click", setupMatchGrid);

// 切換分類（配對）
matchCategoryRow.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  matchCat = btn.dataset.cat;
  [...matchCategoryRow.querySelectorAll("button")].forEach(b => {
    b.classList.toggle("active", b === btn);
  });
  setupMatchGrid();
});

// ====== 共用：進度條 & 小工具 ======
function updateProgress(ratio) {
  const v = Math.max(0, Math.min(1, ratio || 0));
  progressFill.style.width = `${v * 100}%`;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ====== 初始 ======
updateRepeatUI();
updateAffirmUI();
setupMatchGrid();
