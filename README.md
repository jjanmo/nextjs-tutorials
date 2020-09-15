# Next.js Tutorials

> This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Tutorials를 통해서 알게된 Next.js란?

- Next.js는 React의 프레임워크이다. 좀 더 정확히 React의 `SSR(Server Side Rendering)`을 위한 프레임워크이다. React 자체가 SSR을 고려하고 만들어진 라이브러리이기 때문에 React 만으로도(Node.js 서버를 이용) SSR을 구현할 수 있지만, Next.js를 이용하면 좀 더 편하게 SSR을 구현할 수 있다고 한다. 이를 맛보기 위해서 렛츠기릿!

### Create a Next.js App

- 특이한 라우팅 시스템 : 파일시스템 구조가 그래도 URL로 설정된다.

  > 내가 생각할 때, 웹사이트의 기본은 `길찾기(라우팅)`라고 생각한다. 사이트 맵이라는 것도 존재하듯이 <u>어디서 어떻게 사이트 안의 페이지들이 서로 유기적으로 연결되어있는냐</u>가 그 사이트가 구조적으로 잘짜였는지를 가늠한다고 생각한다. 또한 사용자들이 이용할 때도 유기적으로 잘짜여진 사이트에서는 자신들의 목적에 맞게 사이트를 사용할 수 있을 것이다. 그런 관점에 Next.js는 라우팅 시스템을 손쉽게 할 수 있다는 점은 매우 큰 장점이라고 생각한다.

### Navigate between pages

- `Client-Side Navigation`:
  여기서 말하고자 하는바가 완벽하게 이해되지는 않지만, `Link`를 사용할 때 페이지 간에 서로 하나의 Next.js app으로 연결되어있음을 말하는 것 같다.

- `Code splitting`
- `Prefetching`

### How to use assets, metadata, CSS

- React의 컴퍼넌트처럼 `Head` 컴퍼넌트가 존재하여 그 안에 title, metatag등을 수정할 수 있다.

- `CSS in JS`:

Next.js에서는 기본적으로 `styled-jsx`를 사용하는 것 같다. `styled-component`와 비슷한 포멧을 가진 것 같다. 또한 `styled-jsx`대신 `styled-component`를 연결해서 사용할 수 도 있다.

```jsx
<style jsx>{`
	// ...code here
`}</style>
```

- `CSS module`

CSS를 모듈화하여 사용하는 방법으로 자동적으로 `유일한 클래스`을 생성하여 `지역 스코프`를 갖게 된다. 이것은 같은 클래스를 다른 파일에서 사용한다고 하더라고 충돌의 위험이 없어지게 만든다.

`[name].module.css` : CSS module의 naming convention이다.

`import styles from './[name].module.css'`: 이런식으로 CSS를 가져와서 `styles`이라는 변수로 CSS파일 안의 클래스에 접근함으로서 사용할 수 있다.
