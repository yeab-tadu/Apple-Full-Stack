import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import Four04 from "./Pages/Four04/Four04";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/Ipad/Ipad";
import WAtch from "./Pages/Watch/WAtch";
import Tv from "./Pages/Tv/Tv";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";
import Iphone from "./Pages/Iphone/iphone";
import Productpage from "./Pages/Productpage/Productpage";
import Helmet from "react-helmet";
import apple__logo from "./CommonResources/images/logo2.png";
function App() {
  return (
    <>
      <Helmet>
        <title>{String.fromCharCode()} apple clone [react]</title>
        <link rel="icon" type="image/jpg" href={apple__logo} />
      </Helmet>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />

          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productID" element={<Productpage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<WAtch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
