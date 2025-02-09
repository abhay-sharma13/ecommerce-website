import cartSvg from "../../../assets/svg/cart.svg";
import menuSvg from "../../../assets/svg/menu.svg";
import searchSvg from "../../../assets/svg/search.svg";
import wishlistSvg from "../../../assets/svg/wishlist.svg";
import pipeSvg from "../../../assets/svg/pipe.svg";

import NavActionBtn from "./NavActionBtn";

function Header() {
  const { error: errorLog } = console;
  try {
    return (
      <>
        {/* NAV BAR STARTS */}
        <header className="w-full">
          {/* MOBILE NAV SECTION STARTS */}
          <ul className="flex items-center justify-between px-5 py-6 sm:hidden">
            <NavActionBtn altText="menu">{menuSvg}</NavActionBtn>
            <li>
              <h1 className="font-body text-2xl font-bold text-beaver-800">
                ManStyle Co.
              </h1>
            </li>
            <li>
              <ul className="flex">
                <NavActionBtn altText="search">{searchSvg}</NavActionBtn>
                <NavActionBtn altText="wishlist" tClass={"mx-2"}>
                  {wishlistSvg}
                </NavActionBtn>
                <NavActionBtn altText="cart">{cartSvg}</NavActionBtn>
              </ul>
            </li>
          </ul>
          {/* MOBILE NAV SECTION ENDS */}
          {/* DESKTOP NAV SECTION STARTS */}
          <ul className="hidden items-center justify-between px-5 py-6 sm:flex">
            <li>
              <ul className="flex">
                <li>
                  <a href="#" className="text-base font-normal text-beaver-800">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mx-5 text-base font-normal text-beaver-800"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-normal text-beaver-800">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-body text-2xl font-bold text-beaver-800">
                ManStyle Co.
              </h1>
            </li>
            <ul className="flex items-center justify-between">
              <li className="">
                <span className="pr-1 text-base font-normal text-beaver-800">
                  Hello
                </span>
                <span className="text-base font-bold text-beaver-800">
                  User
                </span>
              </li>
              <NavActionBtn altText="pipe" tClass={"px-4"}>
                {pipeSvg}
              </NavActionBtn>
              <li>
                <ul className="flex">
                  <NavActionBtn altText="search">{searchSvg}</NavActionBtn>
                  <NavActionBtn altText="wishlist" tClass={"mx-2"}>
                    {wishlistSvg}
                  </NavActionBtn>
                  <NavActionBtn altText="cart">{cartSvg}</NavActionBtn>
                </ul>
              </li>
            </ul>
          </ul>
          {/* DESKTOP NAV SECTION ENDS */}
        </header>
        {/* NAV BAR ENDS */}
      </>
    );
  } catch (err) {
    errorLog("Error in Header:", err);
    return null;
  }
}

export default Header;
