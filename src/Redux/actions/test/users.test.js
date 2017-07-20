import {
  actions,
  mockStore,
  fakeService,
  url,
  userInfo,
  User,
} from "./actionsTestHelper"

describe("Actions#users", () => {
  let expectedData, expectedAction

  beforeEach(async () => {
    const response = await fakeService.post(url)
    expectedData = new User(response.data)
    expectedAction = { type: "ADD_USER", data: expectedData }
  })

  describe("#fetchUser", () => {
    it("updates the action data for ADD_USER", async () => {
      const store = mockStore({ user: {} })
      await store.dispatch(actions.fetchUser(userInfo, fakeService))
      const updated = store.getActions().find(x => x.type === "ADD_USER")
      expect(expectedAction).toMatchObject(updated)
    })
  })

  describe("#addUser", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addUser(expectedData)
      expect(expectedAction).toMatchObject(result)
    })
  })
})

