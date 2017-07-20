import * as actions from "../index"
export { actions }
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import User from "../../../Helpers/User/User"
export { User }

export const mockStore = configureMockStore([thunk])

export const userInfo = {
  user: {
    github: "tmikeschu",
    name: "Mike Schutte",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
  }
}

export const fakeService = {
  get (url) {
    return {
      status: 200,
      data: responses[url]
    }
  },
  post (url, data) {
    return new Promise ((resolve, _) => {
      resolve({
        status: 200,
        data: responses[url]
      })
    })
  }
}

export const url = "https://johariwindowapi.herokuapp.com/api/v1/users"

export const responses = {
  [url]: {
    cohort: "5000FEBE",
    github: "sample",
    id: 5000,
    name: "Sample User",
    role: "student",
    token: "eyJ0eXAiOiJKV",
  },
  [`${url}/5000/descriptions`]: {
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
  },
  [`${url}/5000/assignments`]: [
    {
      user: { id: 9876, name: 'Other user' },
      'completed?': true
    },
    {
      user: { id: 6789, name: 'Another user' },
      'completed?': false
    },
  ],
}

