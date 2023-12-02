import React, { useState } from 'react'
import BasketSidebar from '../../components/basket'
import PopularMenu from '../../components/menu'
import WishlistSideBAr from '../../components/wishlist'
import DetailPage from '../detailPage'
import Blog from '../../components/blog'
import Grade from '../../components/grade'
import BestCoffee from '../../components/bestCoffe'
import Header from '../../layout/header'
import Customer from '../../components/customer'

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
      <Header/>
      <BestCoffee/>
      <PopularMenu changeModalState={handleOpenDetailPage} setDetailId={setDetailId} />
      <Customer/>
      <Grade/>
      {detailId && <DetailPage modalState={openDetailPage} detailId={detailId} handleOpenDetailPage={handleOpenDetailPage} />}
      <Blog/>


    </>
  )
}

export default Homepage