import * as fetch from '../../fetch'

export const RULES_LOADED = 'RULES_LOADED'
export const DO_LIKE = 'DO_LIKE'
export const DO_DISLIKE = 'DO_DISLIKE'
export const UPDATE_RULE = 'UPDATE_RULE'
export const ADD_RULE = 'ADD_RULE'

export const rulesLoaded = () => async (dispatch) => {
  const res = await fetch.get('/rest/rules')
  const rules = await res.json()

  dispatch({
    type: RULES_LOADED,
    payload: {
      rules,
    },
  })
}

export const doLike = id => async (dispatch) => {
  await fetch.post(`/rest/rules/${id}/likes`)

  dispatch({
    type: DO_LIKE,
    payload: {
      id,
    },
  })
}

export const doDislike = id => async (dispatch) => {
  await fetch.post(`/rest/rules/${id}/dislike`)

  dispatch({
    type: DO_DISLIKE,
    payload: {
      id,
    },
  })
}

export const updateRule = rule => async (dispatch) => {
  const result = await fetch.put(`/rest/rules/${rule.id}`, rule)
  const updatedRule = await result.json()

  dispatch({
    type: UPDATE_RULE,
    payload: {
      rule: updatedRule,
    },
  })

  return updatedRule
}

export const addRule = rule => async (dispatch) => {
  const result = await fetch.post('/rest/rules', rule)
  const createdRule = await result.json()

  dispatch({
    type: ADD_RULE,
    payload: {
      rule: createdRule,
    },
  })

  return createdRule
}