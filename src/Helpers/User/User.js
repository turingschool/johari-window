class User {
  constructor(user_info) {
    this.name = user_info.name || "missing"
    this.github = user_info.github
    this.id = user_info.id
    this.token = user_info.token
    this.cohort = user_info.cohort
    this.role = user_info.role
  }
}

export default User
