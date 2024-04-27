import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../services/productService";
import { useDispatch, useSelector } from "react-redux";
// rating
import { Rating } from "@mui/material";
// loader
import LoaderComponent from "../components/LoaderComponent";
// icon
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { saveInCartAction } from "../store/cartSlice";
import { saveFavoriteAction } from "../store/favoriteSlice"
import { motion } from "framer-motion"



function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteIdIcon, setFavoriteIdIcon] = useState(null);
  const { allFavorite } = useSelector((state) => state.favoriteStore);

  // dispatch
  const dispatch = useDispatch();


  // 1. id
  const { productId } = useParams();

  useEffect(() => {
    // 2. request(sevice)
    ProductService.getSingleProduct(productId)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  // function handleAddToCart
  function handleAddToCart() {
    dispatch(saveInCartAction(singleProduct));
  }

  /// handleAddToFavorite
  function handleAddFavorite() {
    dispatch(saveFavoriteAction(singleProduct));
  }

  useEffect(() => {
    allFavorite.find((item) => {
      if (item.id === parseInt(productId)) {
        setFavoriteIdIcon(item.id);
        return;
      }
    });
  }, [allFavorite]);

  // Framer animtion
  const fadeInAnimationVariantsLeft = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  // Framer animtion
  const fadeInAnimationVariantsRight = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };



  return (
    <div className="px-[10px] my-5">
      {isLoading ? (
        <div className="container mx-auto mt-10 flex items-start gap-5 flex-col md:flex-row">
          {/* left side */}
          <motion.div
          variants={fadeInAnimationVariantsLeft}
          initial="initial"
          whileInView='animate'
					className='w-full md:w-[50%]'>
          <img
            src={singleProduct.images[currentImage]}
            alt=''
            className=' h-[400px]'
          />
          <div className='flex items-center gap-[20px] flex-wrap'>
            {singleProduct.images.map((imgSrc, index) => {
              return (
                <img
                  src={imgSrc}
                  alt=''
                  key={index}
                  className='w-[100px] h-[100px] object-cover border-2 border-primaryBlue rounded-xl mt-5'
                  onClick={() => handleCurrentImage(index)}
                />
              );
            })}
          </div>
        </motion.div>
          {/* right side */}
      <motion.div
        variants={fadeInAnimationVariantsRight}
        initial="initial"
        whileInView='animate' className='flex flex-col gap-[10px]'>
        <h2 className="font-extrabold text-2xl text-primaryBlue mb-2">
          {singleProduct.title}
        </h2>
        <span className="text-textLightBlue text-[20px]">
          ${singleProduct.price}
        </span>
        <p className="flex items-center">
          <span className="text-textBlack text-[20px]">Reviews:</span>
          <Rating
            name="half-rating"
            defaultValue={singleProduct.rating}
            precision={0.5}
            readOnly
          />
        </p>
        <p className="flex items-center gap-[10px] text-[20px]">
          Avibility:
          {singleProduct.stock ? (
            <span className="flex items-center gap-1 text-lightGreen">
              {" "}
              <FcCheckmark /> In stock
            </span>
          ) : (
            <span className="flex items-center gap-1 text-mainRed ">
              {" "}
              <RxCross2 />
              Out of stock
            </span>
          )}
        </p>
        <p className="text-[20px] text-textBlack">
          Hurry up! only{" "}
          <span className="font-bold">{singleProduct.stock}</span> products
          left in stock!
        </p>
        <p className="text-[20px] text-textBlack">
          Total price:{" "}
          <span className="text-textLightBlue">${singleProduct.price}</span>
        </p>

        {/* Add/Favorite button*/}
        <div className="flex items center mt-[50px] gap-5">
          <Link to={'/cart'}
            className="bg-secondaryYelow text-textWhite px-[24px] py-[12px]  rounded-xl shadow-lg text-[20px]"
            onClick={handleAddToCart}
          >Add to cart</Link>

          <Link
            to={'/favorite'}
            className="bg-skyBlue text-textWhite px-[24px] py-[12px] rounded-xl shadow-lg border border-textBlack"
            onClick={handleAddFavorite}>
            {favoriteIdIcon === parseInt(productId) ? (
              <CiHeart size={28} color='red' />
            ) : (
              <CiHeart size={28} />
            )}

          </Link>
        </div>
      </motion.div>
    </div>
  ) : (
    <div className="flex">
      <LoaderComponent />
    </div>
  )
}
    </div >
  );
}

export default SingleProductPage;
