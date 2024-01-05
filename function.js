'use strict';

{
  // DOM要素の取得
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const clear = document.getElementById('clear');
  const message = document.getElementById('message');
  const target = document.getElementById('modify');

  // ローカルストレージから最終更新日時を取得して表示
  let lastModified = localStorage.getItem('lastModified');
  if (lastModified) {
    target.textContent = `最終更新日時：${lastModified}`;
  }

  // テキストエリアの内容をローカルストレージから取得
  if (localStorage.getItem('memo')) {
    text.value = localStorage.getItem('memo');
  }

  // 保存ボタンのクリックイベント
  save.addEventListener('click', function() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;
  
    // 最終更新日時を更新して表示
    target.textContent = `最終更新日時：${formattedDate}`;
    localStorage.setItem('lastModified', formattedDate);

    // メッセージ表示
    message.classList.add('appear');
    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);

    // テキストエリアの内容を保存
    localStorage.setItem('memo', text.value);
  });

  // 削除ボタンのクリックイベント
  clear.addEventListener('click', function() {
    if (confirm('本当に削除しますか？')) {
      text.value = '';
      localStorage.removeItem('memo');
    }

    target.textContent = `最終更新日時：`;
  });
}
