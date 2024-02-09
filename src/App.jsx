import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import NewsLetter from "./pages/NewsLetter";
import Landing from "./pages/Landing";
import Cocktail, { loader } from "./pages/Cocktail";
import Error from "./pages/Error";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import SinglePageError from "./pages/SinglePageError";
import { action as NewsLetterAction } from "./pages/NewsLetter";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader,
        },
        {
          path: "/cocktail/:id",
          // /:id will make us available the id in child as an props in {params}
          loader: singleCocktailLoader,
          errorElement: <SinglePageError />,
          element: <Cocktail />,
        },
        {
          path: "/newsletter",
          element: <NewsLetter />,
          action: NewsLetterAction,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
