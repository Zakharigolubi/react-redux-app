export function createStore(redicer, initialState) {
  let state = initialState
  let listeners = []

  function getState() {
    return state
  }
  function dispatch(action) {
    state = redicer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  function subscribe(listener) {
    listeners.push(listener)
  }

  return { getState, dispatch, subscribe }
}