import React, {  useState } from 'react'
import PopularMenu from '../../components/menu'
import DetailPage from '../detailPage'
import BasketProvider from '../../context/BasketContext/basketContext'
import WishlistProvider from '../../context/WishlistContext/wishlistContext'
import BasketSidebar from '../../components/basket'
import WishlistSideBAr from '../../components/wishlist'

function Homepage() {
  const [openDetailPage, setopenDetailPage] = useState(false)
  const [detailId, setDetailId] = useState(1)


  function handleOpenDetailPage(e) {
    setopenDetailPage(!openDetailPage)
  }

  return (
    <>
      <BasketProvider>
        <BasketSidebar/>
        <WishlistProvider>
        <WishlistSideBAr/>
          
        <PopularMenu changeModalState={handleOpenDetailPage} setDetailId={setDetailId} />
        <DetailPage modalState={openDetailPage} detailId={detailId} handleOpenDetailPage={handleOpenDetailPage} />
        </WishlistProvider>
      </BasketProvider>
    </>
  )
}

export default Homepage