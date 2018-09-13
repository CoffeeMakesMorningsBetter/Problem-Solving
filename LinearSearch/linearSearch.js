function linearSearch(list, searchValue) {
  for(let i = 0; i < list.length; i++) {
    if(searchValue === list[i]) return i
  }
  return -1 
}