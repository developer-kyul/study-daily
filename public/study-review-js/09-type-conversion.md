✨2026-01-07 수요일

# **타입변환**

사용자 입력 처리, 데이터 검정리, API 통신 등 거의 모든 상황에서 타입 변환이 필요하다.

### 1. 문자(단위 포함) → 숫자 타입 변환 : parseInt()

console.log (parseInt(’343px’ ,10 ) 여기서 10은 10진수를 뜻한다.

- `parseInt` 함수에서 두 번째 인자인 **10**은 **"10진수로 해석하라"**는 의미의 **진법(Radix)** 설정이다.
  ### 1. 왜 10을 쓰나요?
  - **명확한 규정**: 컴퓨터에게 "이 문자는 10진수 숫자야"라고 확실히 알려주기 위함입니다.
  - **오류 방지**: 과거 자바스크립트 버전에서는 `0`으로 시작하는 문자열을 8진수로 오해하는 등 혼란이 있었으나, 현재는 **`10`을 명시하는 것이 표준 권장 사항**입니다.
  ### 2. 예시 비교
  만약 10이 아닌 다른 숫자를 넣으면 계산 결과가 달라집니다.
  - `parseInt('10', 10)` → **10** (10진수)
  - `parseInt('10', 2)` → **2** (2진수: `10`은 2를 의미함)
  - `parseInt('10', 16)` → **16** (16진수: `10`은 16을 의미함)
  ### 3. 코드 해석
  올려주신 이미지의 코드는 다음과 같은 순서로 실행됩니다.
  1. `parseInt('1280px', 10)`: '1280px'에서 숫자만 뽑아 **10진수 숫자 1280**으로 바꿉니다.
  2. `+ 5`: 숫자 1280에 5를 더해 **1285**가 됩니다.
  3. `+ 'px'`: 다시 문자열 'px'를 붙여 최종적으로 **'1285px'**라는 문자가 됩니다.
     실무에서는 거의 항상 **10**을 사용한다고 생각하시면 됩니다.

### 2. Number(), + 단항 연산자

### 3. 문자(단위 포함) → 숫자(소수 포함) 타입 변환 : parseFloat()

숫자 → 문자열 타입 변환 String(). + ‘’ , toString()

1. 명시적인 (string)
2. 지름길 (+ ‘ ’)
3. 진수변환 가능 (.toString ())

padStart(자리수, 채울문자)

빈 문자열 더하기

간단하고 직관적이어서 많은 개발자들이 선호함

특히 단위나 접미사를 함께 붙일 때 매우 유용하다.

#808080= 세 색상이 똑같은 비율로 섞인 중간 단계의 **회색**

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

# 불리언 변환

조건문과 논리 연산에서 핵심적인 역할을 한다.

자바스크립트의 불리언 변호나 규칙을 이해하면 더. 효율적이고 간결한 코드를 작성할 수 있다.

숫자/문자열 불리언 변환

마법의 거울 앞에서 데이터가 참인지 거짓인지 ! 딱 두가지 모습만 비춘다

6개 !! 만 기억하자

1. 숫자 0 : 0은 거짓 나머지 숫자 모든 참
2. 빈 문자열 ‘ ’ : 내용을 포함하는 문자열은 ture
3. null :
4. undefined :
5. NaN : 숫자가 아니지만 타입은 Number !
   전염성이 강해서 어떤 숫자와 계산해도 결과는 무조건 NaN가 이긴다.
   자바스크립트에서 유일하게 자기 자신과도 같지 않은 값이다.
6. 숫자만
7. 숫자, 문자 섞임
8. 문자,숫자섞였을때 문자가 먼저 나왔으면 가능

무용지물 (비교 연산자, typeof) / 하자가 있는 전용 탐색기(isNaN())
NaN인지 확인하려면 반드시 `Number.isNaN()`처럼 타입 변환 없이 진짜 NaN만을 확인해야한다.
쓸모있는 Number.isNaN()이란 ?
→ → → 생각해보기

```jsx
console.log(Number.isNaN(undefined)); //true
console.log(Number.isNaN(undefined)); //false
```

- undefined + undefined
  자바스크립트에서 `undefined`와 `undefined`가 더해지는 상황은 주로 **값이 할당되지 않은 변수들을 계산에 사용했을 때** 발생한다. ### 1. 변수 선언 후 값을 넣지 않고 더할 때

      가장 흔한 경우입니다. 변수를 만들고 값을 할당하지 않으면 기본적으로 `undefined` 상태가 됩니다.

      JavaScript

      `let score1; // undefined
      let score2; // undefined

      console.log(score1 + score2); // 결과: NaN`

      ### 2. 객체에 없는 속성을 가져와 더할 때

      객체에 존재하지 않는 이름을 부르면 `undefined`를 돌려줍니다.

      JavaScript

      `const user1 = { name: "철수" };
      const user2 = { name: "영희" };

      // user1.age와 user2.age는 둘 다 존재하지 않으므로 undefined입니다.
      let totalAge = user1.age + user2.age;

      console.log(totalAge); // 결과: NaN`

      ### 3. 함수에서 아무것도 반환(return)하지 않을 때

      함수가 값을 돌려주지 않으면 그 결과는 `undefined`가 됩니다.

      JavaScript

      `function getPrice() {
        // return이 없음
      }

      let result = getPrice() + getPrice(); // undefined + undefined

      console.log(result); // 결과: NaN`

      ---

      ### 💡 기억하세요!

      `undefined + undefined`의 결과는 항상 **`NaN`** (Not a Number, 숫자가 아님)이 나옵니다. 자바스크립트는 "정의되지 않은 것끼리 더하는 산술 계산은 불가능하다"고 판단하기 때문입니다.

---

# **Falsy와 Truthy**

Falsy로 평가되는 값 (6가지)

6가지만 빼고 모두 참 ! 조건문에서 사용된다.

1. 숫자 0
2. ‘ ’
3. false
4. null
5. undefined
6. NaN

---

### **정리**

![스크린샷 2026-01-07 오전 11.41.55.png](attachment:c7c97cf3-2ac3-4e74-8dc8-78540fa4a9d7:스크린샷_2026-01-07_오전_11.41.55.png)

![스크린샷 2026-01-07 오전 11.44.45.png](attachment:ad3b3c9a-73c8-4532-b280-fc019f21dabe:스크린샷_2026-01-07_오전_11.44.45.png)
