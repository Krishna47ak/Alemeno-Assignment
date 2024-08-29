import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchCourses } from "./store/actions/courses";
import { useEffect } from "react";
import store from "./store/store";
import Home from "./screens/Home";
import CourseDetail from "./screens/CourseDetail";
import Dashboard from "./screens/Dashboard";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:id",
    element: <CourseDetail />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
])

const App = () => {
  useEffect(() => {
    store.dispatch(fetchCourses())
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
