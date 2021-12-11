export const state = () => ({
  params: {
    category: 0,
    pageNumber: 1
  }
});

export const mutations = {
  add(state, payload) {
    state.params = payload
  }
}
