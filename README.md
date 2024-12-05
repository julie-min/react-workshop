# react-workshop
⛳ My React Code Practice Lab

## Learning React

- In React, a component is simply a function that returns renderable content.
- This is referred to as JSX.
- Once JSX is defined, custom components can be used in JSX code just like built-in HTML elements.


## How JSX Works

- JSX, with its tree-like structure, informs React about how components are related and what the UI should look like.
- It executes commands to manipulate the actual DOM.
- It serves the role of reflecting the target structure and code.
- Custom components can be used like HTML within JSX code.


```
npm install
npm run dev
```

## Props
- React allows you to pass data to components via a concept called *Props*
- There is JSX code that uses a Component
- Set component input data via "custom HTML attributes" (props)
- Set Props
- Defines internal logic + JSX code that should be rendered
- Receive Props
- prop parameters with configuration data
- Props란, 컴포넌트(틀) 간의 데이터를 전달하는 매커니즘임.
- 함수의 파라미터처럼 작동한다.

## By Default, Components execute only once
- React compares the old output of component function to the new output
- and applies any differences to the actual website UI.

## State
- State is one of Hook (Hook is tool)
- Hook example: `useState`, `useEffect`, `useContext`
- when State is changed, Component will be rendering.
- State used to manage dynamic data.
- It allows React components to remember values that change over time.
- When the state changes, the component re-renders automatically to reflect the updated UI.
- for functional components, the `useState` Hook is used to initialize and update state.

## Rules of Hooks
- Only call Hooks inside of Component Functions
- Only call Hooks on the top level

```
const [ counter, setCounter ] = useState(0);

counter : Current state value
setCounter : State updating function
0 : Initial state value (Stored by React)
```





