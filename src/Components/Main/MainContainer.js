import { connect } from 'react-redux'
import Main from "./Main.js"

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Main)
