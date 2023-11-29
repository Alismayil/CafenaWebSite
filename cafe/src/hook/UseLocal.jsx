import React, { useEffect, useState } from 'react'

function useLocal(key) {
    const [localData, setLocalData] = useState(localStorage.getItem(key) ?  JSON.parse(localStorage.getItem(key)) : [])
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localData))
  }, [localData])
  
 function LocalStorage(data) {
     setLocalData(data)
 }
  
    return [ localData, LocalStorage]
}

export default useLocal

