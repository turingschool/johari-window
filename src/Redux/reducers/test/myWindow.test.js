import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#myWindow", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({ myWindow: {} })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({ myWindow: {} })
  })

  it("handles ADD_MY_WINDOW", () => {
    const myWindow = {
      arena: [],
      facade: [
        { name: "able", frequency: 1 },
        { name: "adaptable", frequency: 1 },
      ],
      blindSpot: [],
      unknown: [
        { name: "accepting", frequency: 1 },
        { name: "accountable", frequency: 1 },
      ]
    }
    const expectedState = reducers({}, {
      type: types.ADD_MY_WINDOW,
      data: myWindow
    })
    expect(expectedState).toMatchObject({ myWindow })
  })
})

