export const debounce = (func, wait) => {
  let timerId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timerId)
    timerId = setTimeout(() => func.apply(context, args), wait)
  }
}