// 語音訓練資料庫：之後想要 50 句，就在各陣列裡一直加就好
const SENTENCES = {
  money: [
    "我允許金錢自由地流進又流出我的生活。",
    "我值得擁有穩定而輕鬆的收入來源。",
    "我做的每一份貢獻，都能獲得合理且滋養我的回報。",
    "我正在學習與金錢建立健康、安心的關係。",
    "我願意看見自己已經擁有的豐盛，而不是只看到匱乏。",
    "金錢來到我身邊，是因為我願意接住，也願意分享。",
    "我可以一邊照顧自己，一邊讓財務慢慢變穩定。",
    "我正在練習做更好的金錢選擇，而不是追求完美。"
  ],
  love: [
    "我值得被溫柔對待，也值得有安全的關係。",
    "我在學習用更誠實的方式表達需要，而不是壓抑。",
    "我允許自己慢慢建立信任，不用一下子完全打開防備。",
    "我值得被看見、被理解，而不是被勉強或忽略。",
    "我可以練習說「不」，同時依然是值得被愛的人。",
    "我願意吸引那些尊重我界線、欣賞我真實樣貌的人。",
    "我在關係裡有犯錯的空間，也有被原諒與修復的機會。",
    "我正在學習先與自己好好相處，再走向下一段關係。"
  ],
  self: [
    "我允許自己現在的狀態就是暫時版本，還在成長中。",
    "我不需要每一刻都表現完美，才有資格被喜歡。",
    "我正在重新學習怎麼照顧自己，不用一次到位。",
    "我可以溫柔地面對自己的情緒，而不是急著解決它們。",
    "我正在把注意力放在已經做好的部分，而不是只看缺點。",
    "我給自己時間休息，並不代表我變得懶惰。",
    "我允許自己慢慢來，照自己的節奏前進。",
    "我正在成為一個更願意理解自己的大人版本。"
  ],
  work: [
    "我正在探索適合自己的工作方式，而不是照單全收別人的期待。",
    "我允許職涯是可以轉彎、重新選擇的。",
    "我做的每一個小進步，都在為未來累積能量。",
    "我不需要跟所有人比較，只要跟昨天的自己對話。",
    "我可以在工作裡尋找成就感，同時保留生活的空間。",
    "我正在學習分清楚：別人的情緒，不一定是我的責任。",
    "我允許自己試錯、調整，而不是一次就做對。",
    "我正在慢慢靠近更貼近靈魂節奏的工作位置。"
  ]
};

let currentCategory = "money";
let currentSentence = SENTENCES[currentCategory][0];

const sentenceText = document.getElementById("sentenceText");
const statusText = document.getElementById("statusText");
const resultText = document.getElementById("resultText");
const playBtn = document.getElementById("playBtn");
const recordBtn = document.getElementById("recordBtn");
const nextBtn = document.getElementById("nextBtn");
const categoryButtons = document.querySelectorAll(".voice-category-btn");

// --- 類別切換 ---
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (!SENTENCES[category]) return;

    currentCategory = category;

    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    pickRandomSentence();
    updateSentenceText();
    resultText.textContent = "主題已切換，先聽一遍，再跟著念。";
  });
});

// --- 隨機挑一句 ---
function pickRandomSentence() {
  const list = SENTENCES[currentCategory];
  const idx = Math.floor(Math.random() * list.length);
  currentSentence = list[idx];
}

function updateSentenceText() {
  sentenceText.textContent = currentSentence;
}

// --- TTS 播放 ---
function speakSentence() {
  if (!("speechSynthesis" in window)) {
    statusText.textContent = "你的瀏覽器暫不支援 TTS，改成自己小聲讀一次也可以。";
    return;
  }

  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(currentSentence);
  utter.lang = "zh-TW";
  utter.rate = 1.0;
  utter.pitch = 1.0;

  statusText.textContent = "播放中，可以先閉上眼睛感受一下這句話的感覺。";
  window.speechSynthesis.speak(utter);

  utter.onend = () => {
    statusText.textContent = "輪到你了：試著跟著念三遍。";
  };
}

playBtn.addEventListener("click", speakSentence);

// --- 錄音：只在本地、用來提醒你有完成練習 ---
// 這裡沒有做「發音好壞評分」，只是紀錄你練習了多久。
let mediaRecorder = null;
let isRecording = false;
let recordStartTime = 0;

async function toggleRecording() {
  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      recordStartTime = Date.now();
      isRecording = true;
      recordBtn.classList.add("recording");
      recordBtn.textContent = "■ 停止錄音";

      statusText.textContent = "錄音中…正常說話、不要太用力就好。";

      mediaRecorder.start();

      mediaRecorder.onstop = () => {
        const durationSec = Math.round((Date.now() - recordStartTime) / 1000);
        isRecording = false;
        recordBtn.classList.remove("recording");
        recordBtn.textContent = "🎙️ 再練一次錄音";

        resultText.textContent = `你剛剛為自己念了約 ${durationSec} 秒的肯定句，做得很好。`;
        statusText.textContent = "錄音只存在於這個分頁，關掉分頁就會消失。";
        stream.getTracks().forEach((t) => t.stop());
      };

    } catch (err) {
      console.error(err);
      statusText.textContent = "無法啟動麥克風，請檢查權限或在桌機瀏覽器再試一次。";
    }
  } else {
    mediaRecorder && mediaRecorder.stop();
  }
}

recordBtn.addEventListener("click", toggleRecording);

// --- 換一句 ---
nextBtn.addEventListener("click", () => {
  pickRandomSentence();
  updateSentenceText();
  resultText.textContent = "已換一句新的肯定語，再聽一次並跟著念。";
});

// 初始化
updateSentenceText();
