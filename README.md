## 한달인턴 프리온보딩 - 프론트엔드(React)

### 폴더 구조

```
/apis
/assets
/components
/constants
/hooks
/layout
/pages
/store
/types
/utils
App.js
```

[우테코(우아한테크코스) 프론트엔드 폴더 구조 톺아보기](https://puenti.tistory.com/99)
[React Js — 8 best practices + Folder Structure](https://medium.com/@kthamodaran/react-8-best-practices-folder-structure-5dbda48a69e)

### 커밋 규칙

|  작업 타입  |           작업 내용            |
| :---------: | :----------------------------: |
|   ✨ feat   | 해당 파일에 새로운 기능이 생김 |
|   🎉 add    | 없던 파일을 생성함, 초기 세팅  |
|  🐛 bugfix  |           버그 수정            |
| ♻️ refactor |         코드 리팩토링          |
|   🩹 fix    |           코드 수정            |
|   🚚 move   |         파일 옮김/정리         |
|   🔥 del    |        기능/파일을 삭제        |
|   🍻 test   |       테스트 코드를 작성       |
|  💄 style   |              css               |
|  🙈 gitfix  |         gitignore 수정         |
|  🔨 script  | package.json 변경(npm 설치 등) |

### 라이브러리

추가로 사용한 라이브러리

- react-hook-form
  - 기본적으로 비제어 컴포넌트 방식으로 구현
  - 실무에서 많이 사용
  - custom hook을 만들지 않고 form을 쉽게 다룰 수 있음 -> 코드 단순화
- class-variance-authority
  - props에 따라 조건부로 컴포넌트를 스타일링
  - 일관성 있는 UI 정리와 관리 -> 재사용성 높은 컴포넌트
