import React from 'react'
import ReactLoading from 'react-loading'
import './_my_window.sass'
import MyWindowAdjective from './MyWindowAdjective/MyWindowAdjective'

const MyWindow = ({ myWindow }) => {
  const loader = (
    <ReactLoading type="bars" color="#444" />
  )

  const panes = [
    { name: "Arena", property: "arena" },
    { name: "Blind Spot", property: "blindSpot" },
    { name: "Facade", property: "facade" },
    { name: "Unknown", property: "unknown" },
  ]

  const makeMyWindowAdjectives = property => (
    myWindow[property].map((adjective, i) => (
      <MyWindowAdjective
        key={i}
        name={adjective.name}
        frequency={adjective.frequency} 
      />
    ))
  )

  const panesJsx = () => (
    panes.map(pane =>(
      <td key={pane.name} className="johari-windowpane-title">
        <h4>{ pane.name }</h4>
        { makeMyWindowAdjectives(pane.property) }
      </td>
    ))
  )

  const firstRow = () => panesJsx().slice(0,2)
  const secondRow = () => panesJsx().slice(2)

  const johari = () => (
    <div className='johari-window'>
      <table>
        <tbody>
          <tr>
            { firstRow() }
          </tr>
          <tr>
            { secondRow() }
          </tr>
        </tbody>
      </table>
    </div>
  )

  const body = !myWindow.arena ? loader : johari()

  return (
    <div className='MyWindow'>
      <h2>My Window</h2>
      { body }
    </div>
  )
}

export default MyWindow

