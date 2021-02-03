import React, { useEffect } from 'react'
import { tvSeriesList } from '../modules/tvSeriesListData'
import { useSelector } from 'react-redux'

const DisplayIndexList = () => {
  const tvSeries = useSelector((state) => state.tvSeries)
  useEffect(() => {
    tvSeriesList.index()
  }, [])
  let displaySeries
  if (tvSeries) {
    displaySeries = tvSeries.map((tvShow) => {
      return (
        <div id='display-show'>
          <img data-cy='image' src={tvShow.content.images.landscape.url}></img>
        </div>
      )
    })
  }
  return (
    <div id='content-box' data-cy='index'>
      {displaySeries}
    </div>
  )
}

export default DisplayIndexList
