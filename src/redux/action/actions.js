import types from '../type/types'

const next = quote => ({
    type: types.NEXT, quote
})
const prev = () => ({
    type: types.PREV
})

export default{
    next,
    prev
}