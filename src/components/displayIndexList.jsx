import React, { useEffect } from 'react'
import { tvSeriesList} from '../modules/tvSeriesListData'

const DisplayIndexList = () => {
  useEffect(() => {
    debugger
    tvSeriesList.index()
  }, [])

  return <div></div>
}

export default DisplayIndexList
