const getSuggestionsWithTreeSitter = require('./fountain-provider')

module.exports = {
  selector: '.source.fountain',
  disableForSelector: '.source.fountain .comment',
  priority: 1,
  filterSuggestions: true,
  inclusionPriority: 1,
  excludeLowerPriority: true,
//This will be suggested before the default provider, which has a suggestionPriority of 1.
  suggestionPriority: 2,


  getSuggestions (request) {
    return []
    // if (request.editor.getBuffer().getLanguageMode().tree) {
    //   return getSuggestionsWithTreeSitter(request)
    // } else {
    //   return []
    // }
  },

  // onDidInsertSuggestion ({editor, suggestion}) {
  //   if (suggestion.type === 'attribute') {
  //     setTimeout(this.triggerAutocomplete.bind(this, editor), 1)
  //   }
  // },

  triggerAutocomplete (editor) {
    atom.commands.dispatch(
      editor.getElement(),
      'autocomplete-plus:activate',
      {activatedManually: false}
    )
  }
}
//
// module.exports = {
//   activate () {},
//   getProvider () { return provider }
// }
