import { connect } from 'react-redux'
import MyWindow from "./MyWindow.js"

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(MyWindow)
