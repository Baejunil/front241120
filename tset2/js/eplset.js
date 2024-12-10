
document.getElementById('easy-btn').addEventListener('click', function() {
    window.location.href = "epl.html?difficulty=easy";  // 쉬움 선택
  });

  document.getElementById('normal-btn').addEventListener('click', function() {
    window.location.href = "epl.html?difficulty=normal";  // 보통 선택
  });

  document.getElementById('hard-btn').addEventListener('click', function() {
    window.location.href = "epl.html?difficulty=hard";  // 어려움 선택
  });