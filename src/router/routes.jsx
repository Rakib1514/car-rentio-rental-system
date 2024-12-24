import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/homePage/Home";
import CarDetails from "../pages/car-details/CarDetails";
import Register from "../pages/authentication/Register";
import AddCar from "../pages/add-car/AddCar";
import AvailableCars from "../pages/available-cars/availableCars";
import MyCars from "../pages/my-cars/MyCars";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "../pages/authentication/SignInPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-car",
        element: <PrivateRoute><AddCar /></PrivateRoute>,
      },
      {
        path: "my-cars/:uid",
        element: <PrivateRoute><MyCars /></PrivateRoute>,
      },
      {
        path: "available-cars",
        element: <AvailableCars />,
        loader: () => fetch("http://localhost:5000/cars?available=true"),
      },
      {
        path: "car/:id",
        element: <CarDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
    ],
  },
]);

export default routes;
