import React, { Component } from 'react'
import './_my_window.sass'
import MyWindowAdjective from './MyWindowAdjective/MyWindowAdjective'

class MyWindow extends Component {
  constructor() {
    super()
    this.state = { myWindow: {
      arena: [],
      facade: [],
      blindSpot: [],
      unknown: []
    } }
    this.getMyWindow = this.getMyWindow.bind(this)
  }

  componentDidMount() {
    this.getMyWindow()
  }

  getMyWindow () {
  }

  render() {
    const { myWindow } = this.props

    const arenaAdjectiveList = myWindow.arena.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    const blindSpotAdjectiveList = myWindow.blindSpot.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    const facadeAdjectiveList = myWindow.facade.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    const unKnownAdjectiveList = myWindow.unknown.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    return (
      <div className='MyWindow'>
        <h2>My Window</h2>
        <div className='johari-window'>
          <table>
            <tbody>
              <tr>
                <td className="johari-windowpane-title">
                <h4>Arena</h4>
                { arenaAdjectiveList }
                </td>
                <td className="johari-windowpane-title">
                <h4>Blind Spot</h4>
                { blindSpotAdjectiveList }</td>
              </tr>
              <tr>
                <td className="johari-windowpane-title">
                <h4>Facade</h4>
                { facadeAdjectiveList }</td>
                <td className="johari-windowpane-title">
                  <h4>Unknown</h4>
                  { unKnownAdjectiveList }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default MyWindow
