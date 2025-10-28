export const getFilteredUsers = (users, query) => {
  return users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
  )
}
