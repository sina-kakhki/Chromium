export const NAVIGATE = 'NAVIGATE'

export const navigateAction = (api) => {
  return {
    type: NAVIGATE,
    api: api
  }
}