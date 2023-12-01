import React, { useState } from 'react'
import BasketSidebar from '../../components/basket'
import PopularMenu from '../../components/menu'
import WishlistSideBAr from '../../components/wishlist'
import DetailPage from '../detailPage'
import Blog from '../../components/blog'

function Homepage() {
  const [openDetailPage, setopenDetailPage] = useState(false)
  const [detailId, setDetailId] = useState(null)


  function handleOpenDetailPage(e) {
    setopenDetailPage(!openDetailPage)
  }

  return (
    <>
      <BasketSidebar />
      <WishlistSideBAr />
      <PopularMenu changeModalState={handleOpenDetailPage} setDetailId={setDetailId} />
      {detailId && <DetailPage modalState={openDetailPage} detailId={detailId} handleOpenDetailPage={handleOpenDetailPage} />}
      <Blog/>


    </>
  )
}

export default Homepage