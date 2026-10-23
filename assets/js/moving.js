//ローディング画面の処理
window.addEventListener('DOMContentLoaded', function() {
  const loadingElement = document.getElementById('loading');

  // ローディング画面を非表示にする関数
  function hideLoading() {
    loadingElement.style.transition = 'opacity 1.6s ease, visibility 1.6s ease';
    loadingElement.style.opacity = 0;
    loadingElement.style.visibility = 'hidden';
  }

  // ページが初回訪問かどうかをセッションストレージで確認
  if (!sessionStorage.getItem('firstVisit')) {
    // 初回訪問の場合、セッションストレージにフラグをセット
    sessionStorage.setItem('firstVisit', 'true');

    // ローディング画面を表示し、3秒後に非表示にする
    setTimeout(function() {
      hideLoading();
    }, 3000);

  } else {
    // 初回訪問ではない場合、ローディング画面を非表示にする
    loadingElement.style.display = 'none';
  }

  const videos = document.querySelectorAll('video');

  videos.forEach(currentVideo => {
    currentVideo.addEventListener('play', () => {
      videos.forEach(otherVideo => {
        if (otherVideo !== currentVideo) {
          otherVideo.pause();
        }
      });
    });
  });

});