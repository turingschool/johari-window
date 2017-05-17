import { connect } from 'react-redux'
import Cohort from "./Cohort.js"

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(Cohort)
