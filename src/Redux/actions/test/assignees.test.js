import {
  actions,
  mockStore,
  fakeService,
  url,
  userInfo,
} from "./actionsTestHelper"

describe("Actions#assignees", () => {
  let expectedData, expectedAction

  beforeEach(() => {
    const response = fakeService.get(url + "/5000/assignments")
    expectedData = response.data
    expectedAction = { type: "ADD_ASSIGNEES", data: expectedData }
  })

  describe("#fetchUser", () => {
    it("updates the action data for ADD_ASSIGNEES", async () => {
      const store = mockStore({ assignees: [] })
      await store.dispatch(actions.fetchUser(userInfo, fakeService))
      const updated = store.getActions().find(x => x.type == "ADD_ASSIGNEES")
      expect(expectedAction).toMatchObject(updated)
    })
  })

  describe("#addAssignees", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addAssignees(expectedData)
      expect(expectedAction).toMatchObject(result)
    })
  })

  describe("#setAssignee", () => {
    it("returns an object with a type and data", () => {
      const id = 4000
      const name = "Other Student"
      const result = actions.setAssignee(id, name)
      const expected = { type: "SET_ASSIGNEE", data: { id, name } }

      expect(expected).toMatchObject(result)
    })
  })
})

