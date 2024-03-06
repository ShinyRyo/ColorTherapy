// カラーリスト
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white", "gray"];
const colorNames = {
  "red": "赤",
  "blue": "青",
  "green": "緑",
  "yellow": "黄",
  "purple": "紫",
  "orange": "オレンジ",
  "pink": "ピンク",
  "black": "黒",
  "white": "白",
  "gray": "灰色"
};

function generateSoulColor() {
  const birthday = document.getElementById('birthday').value;
  const dateParts = birthday.split('-');
  
  // 誕生日からシード値を生成
  const seed = dateParts.reduce((acc, part) => acc + parseInt(part), 0);
  
  // シード値を基に色を選択
  const selectedColorKeys = [];
  for (let i = 0; i < 5; i++) {
    selectedColorKeys.push(colors[(seed + i) % colors.length]);
  }
  
  // 結果を表示
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // 既存の結果をクリア
  selectedColorKeys.forEach((colorKey) => {
    const colorDiv = document.createElement('div');
    colorDiv.textContent = colorNames[colorKey]; // 色の名前をテキストとして設定
    colorDiv.style.backgroundColor = colorKey; // 背景色としてカラーコードを使用
    colorDiv.style.color = colorKey === 'white' || colorKey === 'yellow' ? 'black' : 'white'; // 読みやすいように文字色を調整
    colorDiv.style.margin = '5px';
    colorDiv.style.padding = '5px';
    resultsContainer.appendChild(colorDiv);
  });
}

// ページが読み込まれた後にフォームイベントを設定
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('soulColorForm').addEventListener('submit', (e) => {
    e.preventDefault(); // フォームの送信を防ぐ
    generateSoulColor(); // ソウルカラーを生成
  });
});

// 新しいボタン機能を実装する
function showMessage() {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.textContent = 'ボタンが押されました'; // メッセージを表示
}

// DOMが読み込まれたらイベントリスナーを設定
document.addEventListener('DOMContentLoaded', () => {
  // 既存のフォームイベント
  document.getElementById('soulColorForm').addEventListener('submit', (e) => {
    e.preventDefault();
    generateSoulColor();
  });

  // 新しいボタンのイベントリスナーを追加
  document.getElementById('messageButton').addEventListener('click', showMessage);
});
