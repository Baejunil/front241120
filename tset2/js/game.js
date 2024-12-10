// URL에서 난이도 정보 가져오기
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty'); // 'easy', 'normal', 'hard'

let timerDuration = 0; // 타이머의 초기값

// 난이도에 맞는 시간 설정
if (difficulty === 'easy') {
  timerDuration = 30; // 쉬움은 30초
} else if (difficulty === 'normal') {
  timerDuration = 10; // 보통은 10초
} else if (difficulty === 'hard') {
  timerDuration = 5;  // 어려움은 5초
}

// 난이도와 타이머 정보 표시
document.getElementById('difficulty-info').textContent = difficulty ? difficulty : '선택되지 않음';
document.getElementById('timer').textContent = String(timerDuration).padStart(2, '0'); // 타이머 초기화

let timerInterval; // 타이머 변수

// 타이머 함수
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(function() {
      if (timerDuration <= 0) {
        clearInterval(timerInterval); // 타이머 멈추기
        alert('타이머가 종료되었습니다!');
      } else {
        timerDuration--; // 타이머 값 1초씩 감소
        document.getElementById('timer').textContent = String(timerDuration).padStart(2, '0'); // 타이머 업데이트
      }
    }, 1000); // 1초마다 실행
  }
}

// 페이지가 로드되면 난이도와 타이머가 설정됨
if (difficulty) {
  document.getElementById('difficulty-info').textContent = difficulty;
  document.getElementById('timer').textContent = String(timerDuration).padStart(2, '0');
}
