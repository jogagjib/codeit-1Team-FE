HEAD

# codeit-1Team-FE

코드잇 부스트 1팀 프론트엔드 레포지토리입니다.

## 🎯 Commit Convention

"태그:제목"의 형태이며, : 뒤에만 space가 있음에 유의합니다. ex) Feat: 메인페이지 추가

- `Feat`: 새로운 기능을 추가할 경우
- `Fix`: 버그를 고친 경우
- `Design`: CSS 등 사용자 UI 디자인 변경
- `Docs`: 문서 수정
- `!BREAKING CHANGE`: 커다란 API 변경의 경우 (ex API의 arguments, return 값의 변경, DB 테이블 변경, 급하게 치명적인 버그를 고쳐야 하는 경우)
- `!HOTFIX`: 급하게 치명적인 버그를 고쳐야하는 경우
- `Style`: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- `Refactor`: 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우
- `Comment`: 필요한 주석 추가 및 변경
- `Test`: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- `Chore`: 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
- `Rename`: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- `Remove`: 파일을 삭제하는 작업만 수행한 경우

## 💡 PR Convetion

깃모지 쉽게쓰는법
npm install -g gitmoji-cli 설치
gitmoji -c 으로 깃모지,커밋메세지 입력가능

```
$ gitmoji -c
? Choose a gitmoji: 🎨 - Improve structure / format of the code.
? Enter the commit title [02/48]: [Design] #3 - 가로스크롤 개선
? Enter the commit message:
```

ex) 🎨 [Design] #3 - 가로스크롤 개선

✨ [Feature] #3 - 모달팝업 개발

| 아이콘 | 코드                 | 설명                                         | 관련 태그         |
| ------ | -------------------- | -------------------------------------------- | ----------------- |
| ✨     | `:sparkles:`         | 새로운 기능 추가                             | `Feat`            |
| 🐛     | `:bug:`              | 버그 수정                                    | `Fix`             |
| 🎨     | `:art:`              | UI 개선, 코드 스타일링 변경 (코드 품질 개선) | `Design`, `Style` |
| 💄     | `:lipstick:`         | UI, CSS 스타일링 추가 또는 변경              | `Design`          |
| 📝     | `:memo:`             | 문서 수정                                    | `Docs`            |
| 🚑     | `:ambulance:`        | 치명적인 버그 긴급 수정                      | `!HOTFIX`         |
| ♻️     | `:recycle:`          | 코드 리팩토링                                | `Refactor`        |
| ✅     | `:white_check_mark:` | 테스트 추가 또는 수정                        | `Test`            |
| 🔧     | `:wrench:`           | 설정 파일 변경                               | `Chore`           |
| 🔥     | `:fire:`             | 불필요한 파일 또는 코드 삭제                 | `Remove`          |

=======

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
44ac14e (Feat: 추억상세페이지 추가)
