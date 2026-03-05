import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/cart";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import CompoA from "./components/CompoA";
import Memo from "./components/Memo";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Login";
// import About from "./components/About";
//import Grocery from "./components/Grocery";

//LAZY LOADING
const Grocery = React.lazy(() => import("./components/Grocery"));
const About = React.lazy(() => import("./components/About"));

const App = () => {
        const [userName, setUserName] = React.useState("BVK");
        return (
                <Provider store={store}>
                        <UserContext.Provider value={{ userName: userName, setUserName: setUserName }}>
                                <Navbar />
                                <Outlet />
                        </UserContext.Provider>
                </Provider>
        )
}

const appRouter = createBrowserRouter([
        {
                path: "/",
                element: <App />,
                children: [
                        {
                                path: "/",
                                element: <ProductCard />
                        }, {
                                path: "/Kids",
                                element: <Kids />
                        }, {
                                path: "/Men",
                                element: <Men />
                        }, {
                                path: "/Women",
                                element: <Women />
                        }, {
                                path: "/Cart",
                                element: <Cart />
                        }, {
                                path: "/product/:id",
                                element: <ProductDetails />
                        }, {
                                path: "/About",
                                element: <Suspense fallback="Loading..."><About /></Suspense>
                        },  {
                                path: "/memo",
                                element: <Memo/>
                        }, {
                                path: "/Grocery",
                                element: <Suspense fallback="Loading..."><Grocery /></Suspense>
                        } , {
                                path: "/Login",
                                element: <Login />
                        }
                ],
                errorElement: <Error />
        }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);