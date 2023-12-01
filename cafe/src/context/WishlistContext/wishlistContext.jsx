import { createContext, useState } from "react";

export const WishlistContext = createContext();

import React from "react";
import useLocal from "../../hook/UseLocal";

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocal("wishlist");
  const [heart, setHeart] = useLocal("heart");

  // ------------openWishlistSideBar------------
  const [openWishlistSide, setOpenWishlistSide] = useState(false);

  function handleOpenWishlistBar() {
    setOpenWishlistSide(!openWishlistSide);
  }
  function handleAddWishlist(x) {
    const elementIndex = wishlist.findIndex((item) => item.id === x.id);
    if (elementIndex === -1) {
      setWishlist([...wishlist, { ...x }]);
    } else {
      setWishlist(wishlist.filter((item) => item.id !== x.id));
    }

    const heartIcon = heart.includes(x.id);
    if (heartIcon) {
      setHeart(heart.filter((id) => id !== x.id));
    } else {
      setHeart([...heart, x.id]);
    }
  }
// ------------yoxlama--------------------
  function handleAddModalWishlist(item) {
    const elementIndex = wishlist.findIndex(x => x.id === item.id);
    if (elementIndex === -1) {
      setWishlist([...wishlist, { ...item }]);
    } else {
      setWishlist(wishlist.filter(x => x.id !== item.id));
    }

    const heartIcon = heart.includes(item.id);
    if (heartIcon) {
      setHeart(heart.filter(id => id !== item.id));
    } else {
      setHeart([...heart, item.id]);
    }
  }

  function handleRemoveWishlist(id) {
    setWishlist(wishlist.filter((x) => x.id !== id));
    setHeart(heart.filter((x) => x !== id));
  }
  function handleClearWishlist() {
    setHeart([]);
    setWishlist([]);
  }

  const data = {
    handleAddWishlist,
    handleRemoveWishlist,
    handleClearWishlist,
    wishlist,
    setWishlist,
    heart,
    handleOpenWishlistBar,
    setOpenWishlistSide,
    openWishlistSide,
    handleAddModalWishlist
  };

  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
};

export default WishlistProvider;
