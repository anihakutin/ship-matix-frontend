export function createUser(name, email, password) {
  return (dispatch) => {
    dispatch({ type: 'START_LOGIN_REQUEST' });
    fetch('/api/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user: { name, email, password } })
    })
    .then(response => response.json())
    .then(data => {
      if (!data.failure) {
        localStorage.setItem("token", data.jwt);
        return dispatch({ type: 'LOGIN_USER', user: data.user, success: data.success })
      }
      else {
        return dispatch({ type: 'LOGIN_FAILED', error: data.failure })
      }
    })
  }
}

export function loginUser(email, password) {
  return (dispatch) => {
    dispatch({ type: 'START_LOGIN_REQUEST' });
    fetch('/api/login', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({ email, password })
      })
    .then(response => response.json())
    .then(data => {
      if (!data.failure) {
        localStorage.setItem("token", data.jwt);
        return dispatch({ type: 'LOGIN_USER', user: data.user, success: data.success })
      }
      else {
        return dispatch({ type: 'LOGIN_FAILED', error: data.failure })
      }
    })
  }
}

export function authedUser() {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    if (token) {
      fetch(`/api/auto_login`, {
       headers: {
         Authorization: `Bearer ${token}`
       }
     })
     .then(resp => resp.json())
     .then(data => dispatch({ type: 'AUTHED_USER', user: data.user, success: data.success }))
     .catch(() => dispatch({ type: 'LOGIN_FAILED' }))
    }
    else {
      return dispatch({ type: 'LOGIN_FAILED', error: "User is not logged in" })
    }
  }
}

export function logoutUser() {
  localStorage.removeItem("token")
  return (dispatch) => {
    return dispatch({ type: 'LOGOUT_USER', success: "User is logged out"})
  }
}

export function updateShippingRules(newRules) {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: 'START_REQUEST' });
    fetch(`/api/users/shipping-rules`, {
    method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
       Authorization: `Bearer ${token}`
     },
     body: JSON.stringify({ newRules })
   })
   .then(resp => resp.json())
   .then(data => dispatch({ type: 'UPDATE_SHIPPING_RULES', user: data.user, success: data.success }))
   .catch(() => dispatch({ type: 'REQUEST_FAILED' }))
  }
}
