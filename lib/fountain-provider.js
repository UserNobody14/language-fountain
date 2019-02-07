// const {
//   getTagNameCompletions,
//   getAttributeNameCompletions,
//   getAttributeValueCompletions
// } = require('./helpers')

module.exports = function (ed, pos) {
  return altSelectorOfTextArr("syntax--fountain syntax--character")
}
function altSelectorOfTextArr(selector) {
    var v = [].slice.call(document.getElementsByClassName(selector) || []);
    for (i = 0; i < v.length; i++) {
      t.push(v[i].innerText)
  	}
    return t
}


/*
function exporterFn({editor, bufferPosition}) {
  let node = tokenBeforePosition(editor, bufferPosition)
  if (!node) return []

  switch (node.type) {
    case '<': {
      if (!bufferPosition.isEqual(node.endPosition)) break
      return getTagNameCompletions('')
    }

    case 'tag_name': {
      if (bufferPosition.isEqual(node.endPosition)) {
        const {previousSibling} = node
        if (previousSibling && previousSibling.endIndex === node.startIndex) {
          return getTagNameCompletions(node.text)
        }
      } else {
        return getAttributeNameCompletions(node.text, '')
      }
      break
    }

    case 'attribute_name': {
      if (!bufferPosition.isEqual(node.endPosition)) break
      const tagNode = node.parent.parent
      const tagNameNode = tagNode.child(1)
      if (tagNameNode) {
        return getAttributeNameCompletions(tagNameNode.text, node.text)
      }
      break
    }

    case 'attribute_value':
    case '"':
    case '\'': {
      let prefix = ''
      if (node.type === 'attribute_value') {
        prefix = node.text
        node = node.previousSibling
      }

      const predecessor = tokenBefore(node)
      if (!predecessor || predecessor.type !== '=') return []
      const containerNode = node.closest(['start_tag', 'self_closing_tag', 'ERROR'])
      const tagNameNode = containerNode.descendantsOfType(
        'tag_name'
      )[0]

      // Get the last attribute name before the quote
      const attributeNameNode = containerNode.descendantsOfType(
        'attribute_name',
        null,
        node.startPosition
      ).pop()
      if (tagNameNode && attributeNameNode) {
        return getAttributeValueCompletions(tagNameNode.text, attributeNameNode.text, prefix)
      }
      break
    }
  }

  return []
}

function tokenBeforePosition (editor, position) {
  const languageMode = editor.getBuffer().getLanguageMode()
  let node = languageMode.getSyntaxNodeAtPosition(
    position,
    (node, grammar) => grammar.scopeName === 'source.fountain'
  )
  if (!node) return null
  node = lastDescendant(node)

  while (
    position.isLessThan(node.endPosition) ||
    node.isMissing() ||
    node.type === 'text'
  ) {
    node = tokenBefore(node)
    if (!node) return null
  }

  return node
}

function tokenBefore (node) {
  for (;;) {
    const {previousSibling} = node
    if (previousSibling) {
      return lastDescendant(previousSibling)
    }

    const {parent} = node
    if (parent) {
      node = parent
      continue
    }

    return null
  }
}

function lastDescendant (node) {
  let {lastChild} = node
  while (lastChild) {
    node = lastChild
    ;({lastChild} = node)
  }
  return node
}
*/



//   getRangeForSyntaxNodeContainingRange
//   bufferRangeForScopeAtPosition
//   getSyntaxNodeAtPosition
//   syntaxTreeScopeDescriptorForPosition
//   [].slice.call(document.querySelectorAll(selector) || []);
//
//   Notice: document.querySelector and document.querySelectorAll are quite SLOW,
//   try to use getElementById, document.getElementsByClassName or
//   document.getElementsByTagName if you want to get a performance bonus.
//
// // jQuery
// $el.parentsUntil(selector, filter);
//
// // Native
// function parentsUntil(el, selector, filter) {
//   const result = [];
//   const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
//
//   // match start from parent
//   el = el.parentElement;
//   while (el && !matchesSelector.call(el, selector)) {
//     if (!filter) {
//       result.push(el);
//     } else {
//       if (matchesSelector.call(el, filter)) {
//         result.push(el);
//       }
//     }
//     el = el.parentElement;
//   }
//   return result;
// }
//
//   isAtTagBoundary
//   idea: select the range of the current 'scene' then scan it 4 regex of character?
