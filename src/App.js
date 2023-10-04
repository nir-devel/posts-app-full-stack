import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//My Components
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Home from "./pages/Home";

//My Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//SASS STYLE FILE
import "./style.scss";

//OUTLET!! (use React fragment (<></>- to be able rendering multiple React COmponents without a common parent)
const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
const router = createBrowserRouter([
  //ROUTE TO HOME PAGE(has Navbar and Footer)
  // {
  //   path: "/",
  //   element: (
  //     <div>
  //       <Navbar></Navbar>
  //       <Home></Home>
  //       <Footer></Footer>
  //     </div>
  //   ),
  // },
  //LAYOUT (INSTEAD OF PREVIOUS!
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //For single post - add the id !
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
]);

// function App() {
//   return (
//     <div className="app">
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
export default App;
