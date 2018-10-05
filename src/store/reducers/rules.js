import { RULES_LOADED, DO_LIKE, DO_DISLIKE, UPDATE_RULE, ADD_RULE } from '../actions/rules'

const initialState = []

const updateRule = (id, rules, f) => {
  const index = rules.findIndex(rule => rule.id === id)
  if (index === -1) return rules

  const rule = rules[index]
  const updatedRule = f(rule)

  const updatedRules = [...rules]
  updatedRules[index] = updatedRule

  return updatedRules
}

const rules = (state = initialState, action) => {
  switch (action.type) {
    case RULES_LOADED: {
      return action.payload.rules
    }
    case DO_LIKE: {
      const update = rule => ({ ...rule, likes: rule.likes + 1 })
      return updateRule(action.payload.id, state, update)
    }
    case DO_DISLIKE: {
      return updateRule(action.payload.id, state, rule => ({
        ...rule,
        dislikes: rule.dislikes + 1,
      }))
    }
    case UPDATE_RULE: {
      const { rule } = action.payload
      return updateRule(rule.id, state, () => rule)
    }
    case ADD_RULE: {
      const { rule } = action.payload
      return [
        ...state,
        rule,
      ]
    }
    default: {
      return state
    }
  }
}

export default rules
