import React, { Suspense } from "react";
import { RouteProps } from "react-router-dom";

const Home = React.lazy(function HomeLazy() {
  return import("../Pages/Home");
});

const Todo = React.lazy(function HomeLazy() {
  return import("../Pages/Todo");
});

const TodoRedux = React.lazy(function HomeLazy() {
  return import("../Pages/TodoRedux");
});
const globalRoutes: (RouteProps & { key: string })[] = [
  {
    key: "1",
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading</h1>}>
        <Home />,
      </Suspense>
    ),
  },
  {
    key: "2",
    path: "/todo",
    element: (
      <Suspense fallback={<h1>Loading</h1>}>
        <Todo />
      </Suspense>
    ),
  },
  {
    key: "3",
    path: "/todoredux",
    element: (
      <Suspense fallback={<h1>Loading</h1>}>
        <TodoRedux />
      </Suspense>
    ),
  },
];

export default globalRoutes;
