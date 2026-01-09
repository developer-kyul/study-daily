✨2026-01-07 수요일

# 타입 강제 변환

```jsx
Number(null) 0
Number(undefined) NaN

isNaN(undefined) // true
```

타입 강제 변환은 JavaScript 엔진이 연산을 수행할 때 **서로 다른 타입의 값들을 자동 변환하는 과정**입니다.

두가지 타입 변환 방법

- 명시적 변환 (Explict Conversion) : 개발자가 의도를 가지고 명시적으로 타입을 변환하는 방식
  → 숫자 + ‘’ , + , !!
- 암묵적 변환 (Implict Conversion) : JavaScript 엔진이 암묵적으로 타입을 자동 변환하는 방식
  → 타입 강제 변환
  문자열로 강제 변환

덧셈 연산에서 피연산자 중 하나라도 문자열이면, 모든 피연산자가 문자열로 변환

문자열 연결이 아닌 숫자 덧셈을 원한다면 명시적 변환을 사용

```jsx
// 명시적 변환: Number() 함수 사용
const y = x + Number('5');
```

숫자로 강제 변환

덧셈을 제외한 모든 산술 연산자는 일관되게 **모든 피연산자를 숫자로 변환**

```jsx
// 📌 핵심 규칙
// 덧셈(+)           : 문자열이 하나라도 있으면 → 모두 문자열로 변환
// 다른 연산(-,*,/,%) : 항상 → 모두 숫자로 변환
```

Null의 타입 변환

`null`은 "빈 값"을 나타내며, 숫자 변환 시 `0`이 됩니다.

```jsx
// 명시적 변환: Number() 사용
console.log(Number(null)); // 0 (number)
```

Undefined의 타입 변환

```jsx
undefined는 "정의되지 않음"을 나타내며, 숫자 변환 시 NaN이 됨
// 명시적 변환
console.log(Number(undefined)) // NaN (number)
```

boolean의 타입 변환

불리언 값은 숫자 변환 시 `true`는 `1`, `false`는 `0이 됨`

```jsx
// 명시적 변환
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

### **연산순서**

avaScript 왼쪽에서 오른쪽으로 순차적으로 연산을 수행

```jsx
// + 연산자는 문자열 연결 우선
const x = '5' + 3 + 2;
console.log(x); // '532' (string)
```

덧셈이 아닌, 다른 산술 연산자인 경우 숫자 변환이 우선

```jsx
// 다른 연산자는 숫자 변환 우선
const x = '5' - 3 + 2;
console.log(x); // 4 (number)
```

## 안전한 해결 방법

혼란스러운 **암묵적 타입 변환** 문제를 예방하려면, 개발자가 의도를 갖고 **명시적으로 타입을 변환**

타입 강제 변환은 자바스크립트의 강력한 기능이지만, **명시적이고 예측 가능한 코드**가 항상 더 좋다.

- 의도를 명확히 → 명시적 변환 사용 (`Number()`, `String()`, `Boolean()`)
- 팀원들이 이해할 수 있게 → 가독성 우선 (단항 `+` 연산자 대신, `Number()`)
- 유효성을 검사 → `Number.isNaN()`, `typeof` 등 활용

```jsx
// 해결책 1: 명시적 타입 변환 (추천)
let safe1 = Number(x) + 3 + 2;
console.log(safe1); // 10 (number)

// 해결책 2: parseInt/parseFloat 사용
//         단순히 숫자로 바꿀 때는 Number()보다 느림
let safe2 = parseInt(x, 10) + 3 + 2;
console.log(safe2); // 10 (number)

// 해결책 3: 단항 + 연산자 활용
//         실무에서 자주 쓰이지만, 가독성이 떨어짐
let safe3 = +x + 3 + 2;
console.log(safe3); // 10 (number)
```
