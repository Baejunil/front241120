
document.addEventListener('DOMContentLoaded', function () {
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
            timerInterval = setInterval(function () {
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
            question1: "푸트리", // Q1 정답 예시
            question2: "엘링홀란"  // Q2 정답 예시
        };

        let score = 0;

        // 각 질문에 대한 답안 체크
        for (let question in answers) {
            const userAnswer = document.querySelector(`input[name="${question}"]`).value.trim();
            if (userAnswer.toLowerCase() === answers[question].toLowerCase()) {
                score++;
            }
        }

        // 타이머 종료 및 결과 알림
        clearInterval(timerInterval); // 타이머 멈추기
        const message = `점수는 ${score}점 입니다! 남은 시간은 ${timerDuration}초 입니다.`;

        // confirm 창을 띄워 확인 버튼을 눌렀을 때 리다이렉트
        const userConfirmed = confirm(message + "\n확인을 누르면 홈으로 돌아갑니다.");
        if (userConfirmed) {
            window.location.replace('T003index.html'); // 새 페이지로 이동 (리로드 대신)
        }
    }

    // 결과 확인 버튼 클릭 시 답안 체크
    document.getElementById('submit-btn').addEventListener('click', checkAnswers);
});
