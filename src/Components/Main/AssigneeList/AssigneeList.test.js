import React from 'react'
import { shallow, mount } from 'enzyme'
import AssigneeList from './AssigneeList'
import Assignee from './Assignee/Assignee'
import { BrowserRouter as Router } from 'react-router-dom'

describe('AssigneeList', () => {

  let wrapper

  // beforeEach(() => {
  //   // const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
  //   const auth = "auth"
  //   wrapper = mount(<Router><AssigneeList auth={auth} /></Router>)
  // })

  it('renders without crashing', () => {})

  it.only('ensures only unique names get added', () => {
    const assigneeList = [{ user: { name: 'Mike Schutte', id: 170 } }, {user: { name: 'Mike Limberg', id: 203 } }, { user: { name: 'Mike Schutte', id: 203 } }]
    wrapper = shallow(<AssigneeList assignees={assigneeList} /> )

    expect(wrapper.find('Assignee').length).toEqual(2)
  })
})
