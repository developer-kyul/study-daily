✨2025-12-26 금요일

# script 태그

```
<script>
  // JavaScript 작성
</script>
```

- 권장되는 방법은 아님  
  <br>

# JavaScript 파일 연결

```jsx
<html lang="ko-KR">
  <head>
    <meta charset="utf-8" />
    <title>JavaScript 파일 연결하기</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./js/main.js"></script>
  </head>
  <body>
		<!-- ... -->
  </body>
</html>
```

  <br>

# 상대 / 절대 경로

## 상대 경로 (Relative Path)

```jsx
<!-- 현재 폴더의 js 폴더 안 main.js -->
<script src="./js/main.js"></script>

<!-- ./ 생략 가능 (동일한 의미) -->
<script src="js/main.js"></script>

<!-- 상위 폴더로 이동해 파일 연결 -->
<script src="../js/main.js"></script>
```

- 상대경로 기호

```jsx
- `./` → 현재 폴더
- `../` → 상위 폴더
- `../../` → 상위의 상위 폴더
```

## 절대 경로 (Absolute Path)

```jsx
<!-- 웹사이트 루트 기준 -->
<script src="/js/main.js"></script>

<!-- 외부 CDN 라이브러리 -->
<script src="https://cdn.jsdelivr.net/npm/lodash/lodash.min.js"></script>

<!-- 프로토콜 생략 (현재 프로토콜 사용) -->
<script src="//cdn.example.com/script.js"></script>
```

## 사용법

| 상황                      | 권장 경로       | 이유                               |
| ------------------------- | --------------- | ---------------------------------- |
| **로컬 개발 / 연습**      | 상대 경로       | 폴더 구조만 유지하면 어디서든 작동 |
| **같은 프로젝트 내 파일** | 상대 경로       | 프로젝트 이동 시, 경로 유지        |
| **프로덕션 배포**         | 절대 경로       | URL 변경에 유연하게 대응           |
| **외부 라이브러리**       | 절대 경로 (CDN) | 빠른 로딩, 캐싱 효율               |

- JavaScript 파일을 절대 경로로 연결하는 경우가 많음
  <br>

# JavaScript 모듈

- JavaScript 모듈(Module)을 사용하면 JavaScript 코드를 여러 파일로 분할할 수 있습니다.
  이는 재사용 가능한 코드를 작성하는 데 유용합니다.

```jsx
<script type="module" src="./js/main.js"></script>
```
