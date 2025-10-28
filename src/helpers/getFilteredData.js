export const getFilteredData = (
  data,
  searchValue,
  isAvailable,
  activeSkill
) => {
  return data
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.bio.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.skills.some((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        )
    )
    .filter((item) => (isAvailable ? item.isOpenToWork : item))
    .filter((item) =>
      activeSkill === "all" ? item : item.skills.includes(activeSkill)
    )
}
