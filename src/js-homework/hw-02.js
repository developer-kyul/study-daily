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

console.log(calculateDeliveryFee(30000, '서울')); // 일반 (3,000원)
console.log(calculateDeliveryFee(30000, '제주')); // 제주 추가 (6,000원)
console.log(calculateDeliveryFee(60000, '서울')); // 5만원 이상 (0원)
console.log(calculateDeliveryFee(0, '서울')); // 주문 없음 (0원)

// 3. 비밀번호 유효성 검사
function isValidPassword(password) {
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 20;

  // 최소 8자 이상
  if (password.length < MIN_LENGTH) {
    return false;
  }

  // 최대 20자 이하
  if (password.length > MAX_LENGTH) {
    return false;
  }

  return true;
}

console.log(isValidPassword('code1234')); // 8자 (true)
console.log(isValidPassword('short')); // 5자 (false)
console.log(isValidPassword('thisIsVeryLongPassword123')); // 20자 초과 (false)

// 4. 포인트 적립 계산
function calculateRewardPoint(paymentAmount, memberGrade) {
  const VIP_REWARD_RATE = 0.05;
  const GOLD_REWARD_RATE = 0.03;
  const SILVER_REWARD_RATE = 0.01;
  const NORMAL_REWARD_RATE = 0.005;

  // 결제 금액이 0 이하이면 적립 없음
  if (paymentAmount <= 0) {
    return 0;
  }

  // 등급에 따른 적립률 결정
  let rewardRate = NORMAL_REWARD_RATE;

  if (memberGrade === 'VIP') {
    rewardRate = VIP_REWARD_RATE;
  } else if (memberGrade === 'GOLD') {
    rewardRate = GOLD_REWARD_RATE;
  } else if (memberGrade === 'SILVER') {
    rewardRate = SILVER_REWARD_RATE;
  }

  return paymentAmount * rewardRate;
}

console.log(calculateRewardPoint(10000, 'VIP')); // 10000 * 0.05 = 500
console.log(calculateRewardPoint(10000, 'GOLD')); // 10000 * 0.03 = 300
console.log(calculateRewardPoint(10000, 'NORMAL')); // 10000 * 0.005 = 50

// 5. 영화 티켓 가격 계산
function calculateMovieTicketPrice(movieType, isMorningDiscount, audienceCount) {
  let ticketPrice = 0;

  // 영화 타입에 따른 기본 요금
  if (movieType === '일반') {
    ticketPrice = 14000;
  } else if (movieType === '3D') {
    ticketPrice = 17000;
  } else if (movieType === 'IMAX') {
    ticketPrice = 20000;
  }

  // 관람 인원이 0 이하인 경우
  if (audienceCount <= 0) {
    return 0;
  }

  // 총 금액 계산
  let totalPrice = ticketPrice * audienceCount;

  // 조조 할인 적용 (20%)
  if (isMorningDiscount === true) {
    totalPrice = totalPrice * 0.8;
  }

  return totalPrice;
}

console.log(calculateMovieTicketPrice('일반', false, 2)); // 14000 * 2 = 28000
console.log(calculateMovieTicketPrice('3D', true, 1)); // (17000 * 1) * 0.8 = 13600
console.log(calculateMovieTicketPrice('IMAX', false, 3)); // 20000 * 3 = 60000
