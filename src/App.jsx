import React from 'react'
import DisplayIndexList from './components/displayIndexList'

const App = () => {
  return (
    <div>
      <div id="header" data-cy="header">
        <img id="logo" data-cy="logo" src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"></img>
      </div>
      <div> <DisplayIndexList /> </div>
      <div id="footer" data-cy="footer">
      </div>
    </div>
  )
}

export default App

