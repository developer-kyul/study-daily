✨2026-01-05 월요일

# typeof 연산자

`typeof` 연산자는 데이터의 타입을 확인할 때 사용된다.

`typeof` 뒤에는 데이터(값) 또는 표현식이 온다.→타입(유형)값 (문자열 제공)

> 💡 데이터 유형(type of data)→데이터의 종류  
> `typeof` 연산자→그 종류를 확인하기 위해 사용하는 도구

| val의 타입                                          | 결과          |
| --------------------------------------------------- | ------------- |
| Undefined                                           | `"undefined"` |
| Null                                                | `"object"` ⚠️ |
| Boolean                                             | `"boolean"`   |
| Number                                              | `"number"`    |
| String                                              | `"string"`    |
| Object (네이티브이며 [[Call]]을 구현하지 않음)      | `"object"`    |
| Object (네이티브 또는 호스트이며 [[Call]]을 구현함) | `"function"`  |
| Object (호스트이며 [[Call]]을 구현하지 않음)        | 구현 정의     |

(단, `"undefined"`, `"boolean"`, 
`"number"`, `"string"`은 불가) |

> > 💡 **typeof null 버그**  
> > JavaScript에서 `typeof null`은 `'object'`를 반환합니다.  
> > 실제로도 `null`은 객체가 아닌 기본형(primitive) 값이므로 이것은 명백한 **버그**입니다.
