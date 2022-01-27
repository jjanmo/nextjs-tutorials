# Project01 : Starter

> Next.js 공식홈페이지에서 [Basics 파트](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website)의 내용을 실습하면서 중요하다고 생각하는 부분, 잘 이해가 안가는 부분들에 대해서 정리해본다.

## Intro

Next.js에 대해서 안 지는 거의 1년 반쯤 되었지만, 사실상 몰랐던 것과 같다고 볼 수 있다. 리액트에 대한 걸음마를 하고 난 후, 그 지식을 바탕으로 Next 맛보기 해 봤었다. 이 프로젝트가 그때의 기록을 담고 있다. 지금은 그때보다는 성장했을 나의 지식들을 토대로 **다시 Next.js의 Basics 파트를 보려고 한다.** 그와는 다른 시야와 이해를 갖을 수 있을지... 그 때와 똑같으면...음...망 😭. 이제 출발해볼까~ 🚀

### Create a Next.js App

- 특이한 라우팅 시스템 : 파일시스템 구조가 그대로 URL로 설정된다.

  > 내가 생각할 때, 웹사이트의 기본은 `길찾기(라우팅)`라고 생각한다. 사이트 맵이라는 것도 존재하듯이 <u>어디서 어떻게 사이트 안의 페이지들이 서로 유기적으로 연결되어있는냐</u>가 그 사이트가 구조적으로 잘짜였는지를 가늠한다고 생각한다. 또한 사용자들이 이용할 때도 유기적으로 잘짜여진 사이트에서는 자신들의 목적에 맞게 사이트를 사용할 수 있을 것이다. 그런 관점에 Next.js는 라우팅 시스템을 손쉽게 할 수 있다는 점은 매우 큰 장점이라고 생각한다.

### Navigate between pages

- `Client-Side Navigation`:
  여기서 말하고자 하는바가 완벽하게 이해되지는 않지만, `Link`를 사용할 때 페이지 간에 서로 하나의 Next.js app으로 연결되어있음을 말하는 것 같다.

- `Code splitting`
- `Prefetching`

### How to use assets, metadata, CSS

- React의 컴퍼넌트처럼 `Head` 컴퍼넌트가 존재하여 그 안에 title, metatag 등을 수정할 수 있다.

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

  `import styles from './[name].module.css'`: 이런 식으로 CSS를 가져와서 `styles`이라는 변수로 CSS파일 안의 클래스에 접근함으로서 사용할 수 있다.

  `class="layout_container__2t4v2"` : 위에서 말한 **유일한 클래스**란 말의 의미는 클래스 끝에 특이한 문자 `__2t4v2` 가 붙어있는 것을 보면 알 수 있다.

- Global style 적용법

  Next.js에서는 페이지를 초기화하는데 내부적으로 `App`컴퍼넌트를 이용한다. 이것을 `오버라이딩`함으로서 페이지 초기화를 컨트롤 할 수 있다.

  기본적인 `App`컴퍼넌트를 오버라이딩하기 위해선, `_app.js`를 만듦으로서 이루어진다.

- `polishing layout`

### Pre-rendering and Data Fetching

- Pre-rendering이란?

  기본적으로 Next.js는 모든 페이지를 pre-rendering 한다. 즉 랜더링 전에 미리 HTML파일을 생성한다는 의미이다. 반면에 클라이언트사이드랜더링(CSR)은 빈 HTML파일에 동적자바스크립트에 의해서 DOM tree가 형성되어 추가되면서 랜더링이 진행된다. 이러한 차이로 인해 Next.js는 SEO에 유리하다.

  ![pre-rendering](pre-rendering.PNG)

  > 이미지로 보면 좀 더 직관적으로 pre-rendering에 대해서 이해할 수 있다.

- Two form of pre-rendering
  > `Static Generation`, `Server-side Rendering` : 두가지의 차이점은 **언제** HTML파일을 만들어내는지에 대한 시점의 차이이다.

1. Static Generation

   `build time` 에 한 번 HTML파일이 생성되고 그 뒤의 요청에서는 그 HTML을 재사용한다.

2. Server-side Rendering

   매 요청마다 HTML파일을 생성하여 랜더링한다.

<br/>

✔ Next.js는 상황에 따라서 개발자가 랜더링 방식을 선택하여 구현이 가능하도록 이루어진 것 같다.

<br/>

- `getStaticProps`

> 해당 페이지에서 랜더링 전에 api로 받아올 데이터가 있다면 이 async 함수를 해당 페이지 컴퍼넌트와 같이 export를 하게 되면, 그 페이지가 렌더링되는 시점인, build time에 `getStaticProps`가 작동하여서 해당 컴퍼넌트에 받아온 데이터를 `props`으로서 주입시켜준다.

> `getStaticProps`는 **server-side** 에서 작동한다.

```javascript
  export default function Home(props){
    //can use props passed by getStaticProps function
  }

  export async function getStaticProps(context){
    const data = //... fetching data

    retrun {
      props : {
        post : data
       }, //passed to page component as props
    }
  }
```

> 내가 이해한 것이 맞다면, <u>여기서 궁금한 것</u>은, `getStaticProps` 여기서 리턴된 값을 어떻게 Home 컴퍼넌트에서 받아서 쓸 수 있는 것 일까? 그냥 내부적으로 같은 파일 안에서 export가 되면 해당 컴퍼넌트의 props으로 패치된 데이터가 주입되게 설정이 되어있는 것인지? 혹은 그런 것들을 어떤 식으로 구분하는지 등등 내부적으로 어떻게 작동하는지에 대한 여러가지 궁금증이 생긴다.

> > `getStaticProps`가 같은 파일 안에 존재하면 pre-render 하는 시점에 알아서 이 컴퍼넌트에는 데이터를 불러올 것이 필요하다는 것을 알려주고 fetching을 하여 데이터를 불러오는 과정을 먼저 실행하여 props로 넣어주는 것 같다. 내부적으로 그런 식으로 작동하도록 만들어진 것이라고 우선 생각하다. 마치 리액트에서 setState로 state가 변경되면 자동으로 랜더링이 일어나는 것처럼 내부적으로 그렇게 작동되도록 하는 것 같다.

![getstaticprops](getstaticprops.PNG)

<br/>

- `getServerSideProps`

> 클라이언트의 요청 때마다 데이터를 받아와야 한다면, 이 때는 pre-rendering(Static Generation)방식 보다는 SSR(Server-Side-Rendering) 을 추천한다. 이 때는 `getServerSideProps()`라는 메소드를 사용한다.

```javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```
