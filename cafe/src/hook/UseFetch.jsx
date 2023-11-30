
import React, { useEffect } from 'react'
import axios from "axios";

function UseFetch(url,Callback) {

    async function Datas() {
        const res = await axios.get(url)
        Callback(res.data)
    }

    useEffect(() => {
        Datas()
    }, [url])

  return 
}

export default UseFetch