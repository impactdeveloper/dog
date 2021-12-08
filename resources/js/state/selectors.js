export default {
  allBreeds : (state) => (state.getIn(['app', 'breeds']).toJS()),
  breedImages : (state) => (state.getIn(['app', 'breedImages']).toJS())
}
