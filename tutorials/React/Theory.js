//there is so many other ways to improve your react application

// points

// Memo
// 1) use React.Memo in every component which always check the props and state of the component and if there is no changes then previous, then it will not rerender that perticular component.

// useCallback and useMemo
// 1)always use usecallback for function and useMemo for the objects and arrays because we alerady know that everything is object in javascript

// so,what happen is that let's say we use react.memo and it compares the props and states so let's say we send function as a prop and function is object in javascript and two objects are never same in javascript even they have same code do same thing still it is not same because of memory address so react always consider as a new object and that object memory refrence is different then previous so it will make rerender ,

// solution is that use usecallback for the functions and useMemo for the object and arrays so what they do is that make same memory address for the function and object so it will be the same memory address so it won't be rerender that component again.
