// ===== 資料區：可以慢慢補充句子 =====

// 正面肯定語：先放金錢 & 感情（可以繼續加）
const affirmations = {
  money: [
    "我值得擁有財富。",
    "金錢是我正能量的延伸。",
    "我越輕鬆，越容易吸引富足。",
    "我的價值不斷提升。",
    "我願意學習與金錢合作。",
    "每一天我都在變得更富足。",
    "我的收入持續增加。",
    "我的努力被世界看見。",
    "金錢流向我、支持我。",
    "我值得被支付高額報酬。",
    "財富與我相遇是自然的事。",
    "我做的事情創造價值，因此帶來金錢。",
    "我能創造新的收入來源。",
    "我是富足能量的磁鐵。",
    "我懂得管理、珍惜與使用金錢。",
    "我的財務更穩定、更踏實。",
    "錢來得正確、乾淨且輕鬆。",
    "我正在變成更懂金錢的版本。",
    "我祝福所有人變得富足，也祝福自己。",
    "我允許自己擁有美好的物質生活。",
    "世界支持我的財務成長。",
    "我擁有吸引幸運的能量。",
    "我的收穫大於我的付出。",
    "富足是一種我的自然狀態。",
    "金錢為我帶來自由而非壓力。",
    "我值得擁有穩定的被動收入。",
    "我擁有未來的財富藍圖。",
    "我對金錢保持開放與自在。",
    "我越感恩，越富足。",
    "我擁有選擇人生的能力。",
    "我越活越有價值。",
    "財務機會總是找到我。",
    "我做的每件事都帶來成長或收益。",
    "我常常遇到帶來好運的人。",
    "我與金錢之間的關係是健康的。",
    "我理解金錢只是能量的一部分。",
    "我允許自己擁有多種財務選擇。",
    "我的富足狀態帶給他人希望。",
    "我擁有智慧也擁有幸運。",
    "我的生活持續向上、向好。",
    "我用錢創造世界的美好。",
    "每一筆收入都是宇宙對我的支持。",
    "我安全、穩定且被支持。",
    "我的天賦會被看見並帶來收益。",
    "金錢以我意想不到的方式流入。",
    "我每天都離我的財務目標更近。",
    "我敢於思考更大的富足。",
    "世界正在準備更多的財富給我。",
    "我適合、我值得、我願意。",
    "我正在成為更富足的自己。"
  ],
  love: [
    "我值得被真心愛。",
    "我能吸引健康的關係。",
    "我是值得被珍惜的人。",
    "我表達需求是安全的。",
    "我值得被聽見、被理解。",
    "我願意體驗溫柔的愛。",
    "我正在吸引成熟且穩定的連結。",
    "我在關係中保持真實。",
    "我值得擁有一段互相支持的關係。",
    "我願意用新的方式愛與被愛。",
    "愛是我天生的能力。",
    "我會遇到珍惜我的人。",
    "我值得被好好對待。",
    "我不需要裝成別人也能被愛。",
    "我放下過去，迎接新的連結。",
    "我的感情世界越來越健康。",
    "我能坦然面對自己的脆弱。",
    "我值得被溫柔擁抱。",
    "我能找到與我頻率一致的人。",
    "我願意選擇對的人，而不是將就。",
    "我值得穩定與安全感。",
    "我願意相信愛仍然在路上。",
    "我正在成為更懂得愛的人。",
    "我值得一段成熟的感情。",
    "我願意打開心、迎接支持。",
    "我的邊界是健康且清晰的。",
    "我安全、穩定、值得。",
    "我愛的人也會愛我。",
    "我值得一段互相成就的關係。",
    "我能夠擁有幸福。",
    "我願意用善意與理解建立關係。",
    "愛對我來說越來越輕鬆。",
    "我吸引尊重我、欣賞我的人。",
    "我能在關係中保持自我。",
    "我的愛是健康且穩定的力量。",
    "我值得被選擇。",
    "我願意放下舊傷，重新開始。",
    "我正在創造美好的連結。",
    "愛正在靠近我。",
    "我值得被深深愛著。",
    "我願意讓安全的愛靠近。",
    "我是被珍惜的、有價值的。",
    "我值得被看見真正的樣子。",
    "我能在關係中感到輕鬆。",
    "我值得擁有幸福的伴侶。",
    "我信任宇宙正在引導我。",
    "我的感情生活越來越順利。",
    "我值得被疼愛與支持。",
    "我是一個美好的人，也值得美好的愛。",
    "我願意迎接成熟、健康的愛。"
  ]
};

// 繞口令 & 小故事：先放幾句，之後可以慢慢擴充
const tongueTwisters = [
  "黑化肥發灰，灰化肥發黑。",
  "吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮。",
  "四是四，十是十，十四是十四，四十是四十。"
];

const shortStories = [
  "今天的你已經很努力了，這一句話，是為了讓你慢下來，對自己好一點。",
  "有時候情緒只是來敲門的客人，陪它坐一會兒，它就會慢慢離開。"
];

// ===== 狀態管理 =====
let currentMode = "affirmation"; // affirmation / tongue / story
let currentCategory = "money";   // money / love ...
let currentIndex = 0;

// DOM
const sentenceText = document.getElementById("sentenceText");
const playBtn      = document.getElementById("playBtn");
const recordBtn    = document.getElementById("recordBtn");
const nextBtn      = document.getElementById("nextBtn");
const feedback     = document.getElementById("feedback");
const systemNotice = document.getElementById("systemNotice");
const modeHint     = document.getElementById("modeHint");
const currentIndexSpan = document.getElementById("currentIndex");
const totalCountSpan   = document.getElementById("totalCount");
const progressFill     = document.getElementById("progressFill");

// 模式 tab
document.querySelectorAll(".mode-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".mode-tab")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentMode = btn.dataset.mode;
    currentIndex = 0;

    updateVisibleCategories();
    updateSentence();
  });
});

// 類別 pill（肯定語用）
document.querySelectorAll(".category-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document
      .querySelectorAll(".category-pill")
      .forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    currentCategory = pill.dataset.category;
    currentIndex = 0;
    updateSentence();
  });
});

// 顯示對應模式的分類列
function updateVisibleCategories() {
  document.querySelectorAll(".category-bar").forEach(bar => {
    const visibleFor = bar.dataset.visibleFor;
    bar.hidden = visibleFor !== currentMode;
  });

  if (currentMode === "affirmation") {
    modeHint.textContent = "跟著聲音，一句一句對自己說：";
  } else if (currentMode === "tongue") {
    modeHint.textContent = "先聽一遍，然後試著跟著繞口令念：";
  } else {
    modeHint.textContent = "把這句故事念出來，感受語氣與節奏：";
  }
}

// 取得目前句子清單
function getCurrentList() {
  if (currentMode === "affirmation") {
    return affirmations[currentCategory] || [];
  }
  if (currentMode === "tongue") {
    return tongueTwisters;
  }
  if (currentMode === "story") {
    return shortStories;
  }
  return [];
}

// 更新畫面句子＋進度
function updateSentence() {
  const list = getCurrentList();
  if (list.length === 0) {
    sentenceText.textContent = "目前這個分類還沒有內容。";
    totalCountSpan.textContent = "0";
    currentIndexSpan.textContent = "0";
    progressFill.style.width = "0%";
    return;
  }

  if (currentIndex >= list.length) currentIndex = 0;

  const sentence = list[currentIndex];
  sentenceText.textContent = sentence;

  totalCountSpan.textContent = String(list.length);
  currentIndexSpan.textContent = String(currentIndex + 1);

  const progress = ((currentIndex + 1) / list.length) * 100;
  progressFill.style.width = `${progress}%`;

  feedback.textContent = "按 🔊 播放，跟著念一次，錯字沒關係，先熟悉聲音與節奏就好。";
}

// TTS 播放
function speak(text) {
  if (!window.speechSynthesis) {
    systemNotice.textContent = "此裝置不支援語音播放，改用自己朗讀即可。";
    return;
  }
  systemNotice.textContent = "";

  const utter = new SpeechSynthesisUtterance(text);
  // 盡量用中文聲音
  utter.lang = "zh-TW";
  utter.rate = currentMode === "tongue" ? 0.9 : 0.95;
  utter.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

// 語音辨識（簡易版）
let recognition = null;
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SR =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = "zh-TW";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = event => {
    const userSpeech = event.results[0][0].transcript.trim();
    const target = sentenceText.textContent.trim();
    evaluateSpeech(userSpeech, target);
  };

  recognition.onerror = () => {
    feedback.textContent = "語音辨識發生小狀況，沒關係，當作多練一次就好。";
  };
} else {
  systemNotice.textContent =
    "這個瀏覽器暫時不支援語音辨識，只能用 TTS 跟自己朗讀的方式練習。";
}

// 簡單評分（非常溫柔版）
function evaluateSpeech(userText, targetText) {
  if (!userText) {
    feedback.textContent = "好像沒有收到聲音，再試一次沒關係。";
    return;
  }

  const normalize = s =>
    s.replace(/[，。、。！？!?\s]/g, "").toLowerCase();

  const u = normalize(userText);
  const t = normalize(targetText);

  let score = 0;
  let minLen = Math.min(u.length, t.length);
  for (let i = 0; i < minLen; i++) {
    if (u[i] === t[i]) score++;
  }
  const ratio = minLen ? score / minLen : 0;
  const percent = Math.round(ratio * 100);

  if (percent > 80) {
    feedback.textContent = `很好！大約 ${percent}% 接近原句，聲音可以再放鬆一點。`;
  } else if (percent > 50) {
    feedback.textContent = `有抓到大致意思了（約 ${percent}%），可以再慢一點、一字一字清楚念。`;
  } else {
    feedback.textContent = `不用急，先專心把每個字念清楚就好。這次大約 ${percent}% ，下一次會更好。`;
  }
}

// 事件：播放
playBtn.addEventListener("click", () => {
  speak(sentenceText.textContent);
});

// 事件：錄音
recordBtn.addEventListener("click", () => {
  if (!recognition) {
    feedback.textContent = "目前只能自己對照練習，沒有自動評分沒關係。";
    return;
  }

  feedback.textContent = "開始錄音了，念完之後會自動幫你比對。";
  systemNotice.textContent = "如果手機有跳出麥克風權限，記得按允許。";

  recognition.abort();
  recognition.start();
});

// 事件：下一句
nextBtn.addEventListener("click", () => {
  const list = getCurrentList();
  if (list.length === 0) return;

  currentIndex = (currentIndex + 1) % list.length;
  updateSentence();
});

// 初始化
updateVisibleCategories();
updateSentence();
