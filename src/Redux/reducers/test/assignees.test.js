import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#assignees", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({ assignees: [] })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({ assignees: [] })
  })

  it("handles ADD_ASSIGNEES", () => {
    const assignees = [
      {
        user: { id: 9876, name: 'Other user' },
        'completed?': true
      },
      {
        user: { id: 6789, name: 'Another user' },
        'completed?': false
      },
    ]
    const expectedState = reducers({}, {
      type: types.ADD_ASSIGNEES,
      data: assignees
    })
    expect(expectedState).toMatchObject({ assignees })
  })
})

