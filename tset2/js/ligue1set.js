
document.getElementById('easy-btn').addEventListener('click', function() {
    window.location.href = "ligue1.html?difficulty=easy";  // 쉬움 선택
  });

  document.getElementById('normal-btn').addEventListener('click', function() {
    window.location.href = "ligue1.html?difficulty=normal";  // 보통 선택
  });

  document.getElementById('hard-btn').addEventListener('click', function() {
    window.location.href = "ligue1.html?difficulty=hard";  // 어려움 선택
  });