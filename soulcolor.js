// カラーリスト
const colors = ["赤", "青", "緑", "黄", "紫", "オレンジ", "ピンク", "黒", "白", "灰色"];

function generateSoulColor() {
  const birthday = document.getElementById('birthday').value;
  const dateParts = birthday.split('-');
  
  // 誕生日からシード値を生成
  const seed = dateParts.reduce((acc, part) => acc + parseInt(part), 0);
  
  // シード値を基に色を選択
  const selectedColors = [];
  for (let i = 0; i < 5; i++) {
    selectedColors.push(colors[(seed + i) % colors.length]);
  }
  
  // 結果を表示
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // 既存の結果をクリア
  selectedColors.forEach((color) => {
    const colorDiv = document.createElement('div');
    colorDiv.textContent = color;
    colorDiv.style.backgroundColor = color;
    colorDiv.style.color = 'white';
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
