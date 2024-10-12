# React + Vite
Introduction
While all React examples previously covered in this book have been relatively 
straightforward, and many key React concepts were introduced, it is unlikely that 
many real apps could be built with those concepts alone. 
Most real apps that you will build as a React developer also need to send HTTP 
requests, access the browser storage and log analytics data, or perform any other 
kind of similar task. And with components, props, events, and state alone, you'll 
often encounter problems when trying to add such features to your app. Detailed 
explanations and examples will be discussed later in this chapter, but the core 
problem is that tasks like this will often interfere with React's component rendering 
cycle, leading to unexpected bugs or even breaking the app.
This chapter will take a closer look at those kinds of actions, analyze what they have 
in common, and most importantly, teach you how to correctly handle such tasks in 
React app

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
