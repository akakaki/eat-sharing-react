const request = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

export const postLogin = () => {
  return request()
}