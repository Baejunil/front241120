// JavaScript 코드 (laliga.js)

// DOM이 완전히 로드된 후 코드 실행
document.addEventListener('DOMContentLoaded', function() {
    // URL에서 'difficulty' 파라미터 읽기
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
  
    // 난이도 정보 표시
    document.getElementById('difficulty-name').textContent = difficulty ? difficulty : '선택되지 않음';
    document.getElementById('timer').textContent = String(timerDuration).padStart(2, '0'); // 타이머 초기화
  
    // 타이머 함수
    let timerInterval;
  
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
  
    // 타이머 시작
    startTimer();
  
    // 답안 체크 함수
    function checkAnswers() {
      const answers = {
        question1: "d", // 바르셀로나
        question2: "c"  // 현 바르셀로나에서 오른쪽 풀팩또는 센터백으로 나옴
      };
  
      let score = 0;
  
      // 각 질문에 대한 답안 체크
      for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
          score++;
        }
      }
      
  // 타이머 종료 및 결과 알림
  clearInterval(timerInterval); // 타이머 멈추기
  const message = `점수는 ${score}점 입니다! 남은 시간은 ${timerDuration}초 입니다.`;

  // confirm 창을 띄워 확인 버튼을 눌렀을 때 리다이렉트
  const userConfirmed = confirm(message + "\n확인을 누르면 홈으로 돌아갑니다.");

  if (userConfirmed) {
      // 확실한 리다이렉트 방식으로 이동
      window.location.replace('T003index.html'); // 새 페이지로 이동 (리로드 대신)
  }
}
  
    // 결과 확인 버튼 클릭 시 답안 체크
    document.querySelector('button[type="button"]').addEventListener('click', checkAnswers);
  });
  