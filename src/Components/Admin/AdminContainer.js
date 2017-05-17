import { connect } from 'react-redux'
import Admin from "./Admin.js"

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(Admin)
