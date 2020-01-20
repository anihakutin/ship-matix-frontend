const authReducer =
(state = {
  currentUser: "",
  loggedIn: false,
  requesting: false,
  error: "",
  success: ""
  }, action) => {
  switch (action.type) {

    case "START_LOGIN_REQUEST":
      return {
        ...state,
        currentUser: state.currentUser,
        requesting: true
      }

    case "LOGIN_FAILED":
      return {
        ...state,
        currentUser: "",
        requesting: false,
        loggedIn: false,
        error: action.error
      }

    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.user,
        requesting: false,
        loggedIn: true,
        error: "",
        success: action.success
      }

    case "AUTHED_USER":
      return {
        ...state,
        currentUser: action.user,
        requesting: false,
        loggedIn: true,
        error: "",
        success: action.success
      }

    case "CREATE_USER":
      return {
        ...state,
        currentUser: action.user,
        requesting: false,
        loggedIn: true,
        error: "",
        success: action.success
      }

    case "LOGOUT_USER":
    return {
      ...state,
      currentUser: "",
      requesting: false,
      loggedIn: false,
      error: "",
      success: action.success
    }

    //User settings reducers
    case "START_REQUEST":
      return {
        ...state,
        currentUser: state.currentUser,
        requesting: true
      }

    case "REQUEST_FAILED":
      return {
        ...state,
        currentUser: state.currentUser,
        requesting: false,
        loggedIn: state.loggedIn,
        error: action.error
      }

    case "UPDATE_SHIPPING_RULES":
      return {
      ...state,
      currentUser: "",
      requesting: false,
      loggedIn: true,
      error: "",
      success: action.success
      }

    default:
      return state;
  }
}

export default authReducer;
