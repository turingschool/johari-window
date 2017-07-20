import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#assignee", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({ assignee: {} })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({ assignee: {} })
  })

  it("handles SET_ASSIGNEE", () => {
    const assignee = { id: 9876, name: 'My Friend' }
    const expectedState = reducers({}, {
      type: types.SET_ASSIGNEE,
      data: assignee
    })
    expect(expectedState).toMatchObject({ assignee })
  })
})

