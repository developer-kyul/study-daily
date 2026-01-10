//✍ 함수 작성 과제

//1. 환영 메시지 생성
function welcomeMsg(memberGrade, memberName) {
  // VIP 회원인 경우
  if (memberGrade === 'VIP') {
    return `🌟 VIP ${memberName}님, 특별한 혜택이 준비되어 있습니다!`;
  }

  // 일반 회원인 경우
  return `안녕하세요, ${memberName}님! 즐거운 쇼핑 되세요.`;
}

console.log(welcomeMsg('VIP', '한결')); 
console.log(welcomeMsg('NORMAL', '한결'));

// 2. 배송비 계산
function calculateDeliveryFee(orderAmount, deliveryRegion) {
  const BASIC_DELIVERY_FEE = 3_000;
  const EXTRA_DELIVERY_FEE = 3_000;
  const FREE_DELIVERY_LIMIT = 50_000;

  // 주문 금액이 0원 이하인 경우
  if (orderAmount <= 0) {
    return 0;
  }

  // 무료 배송 조건
  if (orderAmount >= FREE_DELIVERY_LIMIT) {
    return 0;
  }

  // 제주 / 도서 지역인 경우
  if (deliveryRegion === '제주' || deliveryRegion === '도서') {
    return BASIC_DELIVERY_FEE + EXTRA_DELIVERY_FEE;
  }

  // 배송 지역이 빈 문자열이거나 일반 지역인 경우
  return BASIC_DELIVERY_FEE;
}


3. 비밀번호 유효성 검사