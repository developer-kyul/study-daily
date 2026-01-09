✨2025-12-26 금요일

# 콘솔

콘솔(Console)은 JavaScript 코드에서 무슨 일이 일어나고 있는지 확인할 수 있고, 오류를 확인하고 문제를 해결하는데 사용할 수 있는 유용한 도구
<br>

# 콘솔 패널 열기

| 운영체제            | 단축키             | 설명             |
| ------------------- | ------------------ | ---------------- |
| **macOS**           | `Cmd + Option + I` | 개발자 도구 열기 |
| **Windows / Linux** | `Ctrl + Shift + I` | 개발자 도구 열기 |

<br>

# 콘솔 창에 출력하기 ( 숫자/ 문자열/ 불리언)

```jsx
//콘솔창에 출력하는 코드
console.log();

//숫자 출력하기
//양수
console.log(100);
//음수
console.log(-100);
//실수
console.log(0.101);

//문자열 출력하기
//작은따옴표
console.log('반갑습니다');
//큰따옴표
console.log('행복하세요');
//백틱
console.log(`감사합니다`);

//불리안(참과 거짓)
console.log(true);
console.log(false);

//여러개  출력하기
console.log('반가워요', '복습방이에요');
```

<br>

# 에러와 경로

- 콘솔창으로 에러와 경고를 나타낼 수 있다. 하지만 여기에는 웹 접근성이라는 문제때문에 에러 문장 앞에 경고는 느낌표 에러는 x이모지와 같이 표기를 해주어야한다.

```jsx
console.error('❌ 문자 값은 따옴표로 묶어 출력하지 않으면 오류입니다.');
console.warn('⚠️ JavaScript의 데이터를 기억하려면 변수 또는 상수가 필요합니다.');
```

<br>

# 콘솔 여러개 묶기

- 위와 같이 console정보를 묶을 수 있고 groupCollapsed 사용 시 html파일 실행 시 정보가 접힌 상태에서 표기가 된다.

```jsx
console.group('숫자 (정수)');
console.log(100);
console.log(10);
console.log(104);
console.groupEnd();

console.groupCollapsed('소수');
console.log(0.6);
console.log(0.23);
console.log(0.2131);
console.groupEnd();
```

<br>

# 콘솔 창 css 설정 추가

```jsx
console.log(
  '%c멋사 프론트엔드 부트캠프 16기 여러분 파이팅! 🥧',
  `
  color: #4285f4;
  font-size: 3rem;
  font-weight: 700;
`
);
```

- **%c**는 **"여기서부터는 내가 뒤에 줄 CSS 스타일을 적용해줘"**라는 일종의 표시판(치환자) 역할
- 여기서 백틱기호를 사용하면 줄바꿈을 해도 괜찮지만 “”,’’ 의 경우엔 한줄로 작성이 필요하다

# 코드 실행

```jsx
//콘솔창에서 실행하기

bun 파일명.js
node 파일명.js

//브라우저에서 실행하기(html파일에서 스크립트를 불러온 상태이어야 한다.)
bun ./파일명.html
```

# 캐시 비활성

- JavaScript를 디버깅할 때 대부분의 사람들이 겪는 또 다른 주요 오류는 캐시를 켜두는 것입니다.

- 캐시가 켜져 있으면 브라우저는 이미 받은 이전 버전을 선호하여 사용자에게 더 빠르게 서비스를 제공합니다.

- 따라서 개발 중에는 캐시를 꺼두는 것이 좋습니다. (아래 설정은 개발자 도구가 열린 경우에만 적용됨)

**캐시(Cache)란?**  
브라우저가 이전에 다운로드한 파일을 저장해두고 재사용하는 기능을 말합니다.

**장점**

- ✅ 페이지 로딩 속도 향상
- ✅ 네트워크 사용량 감소

**단점**

- ❌ 개발 중, 코드 변경사항이 반영되지 않음
- ❌ 개발 중, 이전 버전의 파일을 계속 사용

![alt text](./public/img/image.png)

# 관련 단축키

| 항목               | 내용                                                           |
| ------------------ | -------------------------------------------------------------- |
| **콘솔 열기**      | `F12` 또는 `Ctrl + Shift + I` (Win) / `Cmd + Option + I` (Mac) |
| **콘솔 출력**      | `console.log()` 사용                                           |
| **저장 단축키**    | `Ctrl + S` (Win) / `Cmd + S` (Mac)                             |
| **새로 고침**      | `F5` 또는 `Ctrl + R` (Win) / `Cmd + R` (Mac)                   |
| **강력 새로 고침** | `Ctrl + Shift + R` (Win) / `Cmd + Shift + R` (Mac)             |
| **캐시 비활성화**  | Network 탭 → Disable cache 체크                                |
| **콘솔 지우기**    | `console.clear()` 또는 `Ctrl + L` / `Cmd + K`                  |
