// TODO: Create action creators as defined in tests
const ADD = "ADD_QUOTE"
const REMOVE = "REMOVE_QUOTE"
const UPVOTE = "UPVOTE_QUOTE"
const DOWNVOTE = "DOWNVOTE_QUOTE"

export const addQuote = (quote) => ({type: ADD, quote: Object.assign({}, quote, { votes: 0 }) })

export const removeQuote = (quoteId) => ({type: REMOVE, quoteId})

export const upvoteQuote = (quoteId) => ({type: UPVOTE, quoteId})

export const downvoteQuote = (quoteId) => ({type: DOWNVOTE, quoteId})