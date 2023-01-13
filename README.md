# passing-data-deeply-with-context

![useContext](https://user-images.githubusercontent.com/85868026/212334983-4bb0d976-a645-4474-8f31-bae7af6e7694.png)

In this documentation read, I learnt:

- `Context` allows a parent component to make data accessible to all its children (no matter how deeply nested they are) without passing it down through props
- Context is an alternative to prop drilling. It really helps out when you need to to pass the same data to many components with most of them deeply nested in the component tree. `It allows a parent component to provide data to the entire tree below it`
- a Context is named after the data you want to share e.g. LevelContext will share level data
- when defining a Context using `createContext()` the argument you pass to it is the default value
- import the `useContext()` hook in your component and pass it your Context. You can now remove the prop drilling since you've replaced it with useContext
- basically the useContext hook tells react that **your component wants to read your Context**
- _the prop that was being drilled into the component is now moved to the parent / ancestor component above it_. (Remember to destructure it in the parent /ancestor component too, if you choose to use the prop way & not remove it completely)
- lastly, for the Context to work with other values other than the default provided on definition, **_provide the Context to the parent/ancestor component_**. To do this, _wrap the children the parent component returns with `<YourContext.Provider value={}> {children} </YourContext.Provider>`._ YourContext being what you named your Context & passing the variable that you defined with useContext to the value={} aka the data you want your components to access from their parent/ancestor component
- a component using Context will receive the Context data from the value of the _nearest_ <YourContext.Provider> in the UI tree above it
- basically this is `how to add context`:
  - [x] **create the Context** (name it after the data you want to be read & give it a default value) _const AgeContext = createContext(21)_ (import _createContext from react_)
  - [x] **import useContext() hook into your component & pass it your Context variable.** _const age = useContext(AgeContext)_. Then remove the prop from the component to its parent / ancestor component
  - [x] **wrap your parent component's childdren with \***<YourContext.Provider value={Context}></YourContext.Provider>**\* to provide the Context data.** _<AgeContext.Provider value={age}> {children} </AgeContext.Provider>_
- you can have as many components as possible between the parent component that provides Context and the child component that uses it
- Context lets you write components that adapt to their sorroundings & display themselves differently depending in which context they're being rendered
- Child components using Context **_inherit_** from their parent components. The only way to `override` Context is to **_wrap the components with a Context Provider with a different value_**
- each context created using _createContext_ is an independent context. Different react contexts don't override each other i.e. like the way in css color cannot override background-color
- a component can use or provide different contexts
- inn general, use Context for distant components in different parts of the UI tree that require some specific data / info
- examples of UIs that might need Cnntext:
  - **Theming** (apps with dark mode toggle)
  - **Account loggin web apps** (tailors UI as per a user account)
  - **Routing**
  - **Large projects** (with a lot state)

:star:**Pro tip**: The **_src_** scripts linked in the html file **_point to the javascript files that have been converted from React to plain javascript_**
