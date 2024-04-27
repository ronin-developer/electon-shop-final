
import React from "react";
import { Link } from "react-router-dom";
import HeadingComponent from "./HeadingComponent";

// logo
import logo from "../assets/images/logo.png";
// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
// sign in, sign out
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import CategoryComponent from "./CategoryComponent";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const { totalProduct } = useSelector((state) => state.cartStore);
  const { favoriteTotal } = useSelector((state) => state.favoriteStore) || 0;

  return (
    <div className="">
      <HeadingComponent />
      <nav className="bg-primaryBlue h-full lg:h-[100px] py-[20px]">
        <div className="container mx-auto flex-col lg:flex-row flex items-center h-full justify-between">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {/* search bar */}
          <div className="bg-textWhite rounded-[20px]">
            <input
              type="text"
              placeholder="Search products"
              className="bg-transparent outline-none px-4 py-2 rounded-[20px]"
            />
            {/* button */}
            <button className="text-textWhite bg-secondaryYelow px-[25px] py-[17px] rounded-[20px]">
              Search
            </button>
          </div>

          {/* links */}
          <div>
            <ul className="flex-center gap-[20px]">
              <li className="flex-center">
              <CiUser color="white" size={30} />
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    showName={true}
                    appearance={{
                      elements: {
                        avatarBox: "w-[40px] h-[40px]",
                      },
                      variables: {
                        colorText: "#EDA415",
                      },
                    }}
                  />
                </SignedIn>
              </li>
              <li className="flex-center gap-10px">
                <div className="flex-center">
                  <CiHeart color="white" size={25} />
                  <span className="badge">{favoriteTotal}</span>
                  <Link to={"/favorite"} className="text-textWhite">
                    Favorite
                  </Link>
                </div>
              </li>
              <li className="flex-center gap-[10px]">
                <div className="flex-center">
                  <CiShoppingCart color="white" size={25} />
                  <span className="badge">{totalProduct}</span>
                </div>
                <Link to={"/cart"} className="text-textWhite">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CategoryComponent />
    </div>
  );
}

export default NavbarComponent;
