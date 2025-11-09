import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import FeedContainer from "./components/FeedContainer";
import WatchContainer from "./components/WatchContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <FeedContainer />,
        },
        {
          path: "/watch",
          element: <WatchContainer />,
        },
      ],
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
