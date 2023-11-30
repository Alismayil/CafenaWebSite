import React, { useEffect, useState } from 'react'
import PopularMenu from '../../components/menu'
import DetailPage from '../detailPage'
import BasketProvider from '../../context/BasketContext/basketContext'

function Homepage() {
  const [openDetailPage, setopenDetailPage] = useState(false)
  const [detailId, setDetailId] = useState(1)


  function handleOpenDetailPage(e) {
    setopenDetailPage(!openDetailPage)
  }

  return (
    <>
      <BasketProvider>
        <PopularMenu changeModalState={handleOpenDetailPage} setDetailId={setDetailId} />
        <DetailPage modalState={openDetailPage} detailId={detailId} handleOpenDetailPage={handleOpenDetailPage} />
      </BasketProvider>
    </>
  )
}

export default Homepage