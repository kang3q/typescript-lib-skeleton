# NPM 패키지 게시

### 준비
npm 로그인이 안돼있다면 로그인을 시도한다.
```shell script
npm login
```

배포할 결과물을 빌드한다.
```shell script
npm run build
```

### 패키지 최초 게시
`--access public` 옵션 사용시 공개 패키지로 게시하게 된다.
```shell script
npm run deploy
```

### 패키지 판올림
package.json 버전정보를 올려준다.
```json
{
  "version": "1.0.1"
}
```
빌드 후 배포한다.
```shell script
npm run build
npm run deploy
```


---
---
---
---

# @kang3q/typescript-lib-skeleton

블라블라 위한 기능을 제공합니다.

### 설치 Installation

```shell script
npm install @kang3q/typescript-lib-skeleton
```

### 사용 Usage

```typescript
import { NumberUtils } from '@kang3q/typescript-lib-skeleton';
const utils = new NumberUtils();
const value = utils.sum(numberValue);

console.info(value); // 3
```

### 테스트

```
$ npm run test
```
