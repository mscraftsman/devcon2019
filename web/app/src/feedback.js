function paths(baseURL) {
  return {
    Login: baseURL + "/login",
    Logout: baseURL + "/logout",
    Me: "/api/devcon2019.lsl.network/me.json",
    Bookmarks: baseURL + "/api/devcon2019.lsl.network/bookmarks.json",
    Feedbacks: baseURL + "/api/feedbacks",
    OwnFeedbacks: baseURL + "/api/devcon2019.lsl.network/me.json",
    Leaderboards: "/api/devcon2019.lsl.network/leaderboards.json",
  };
}

/**
 * Container for a response that has been json decoded
 */
class JSONResponse {
  constructor(response, data) {
    this.response = response;
    this.data = data;
  }
}

function status(r) {
  let status;
  let data;

  if (r instanceof JSONResponse) {
    status = r.response.status;
    data = r.data;
  } else {
    status = r.status;
    data = {};
  }

  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      resolve(data);
    } else {
      reject(data);
    }
  });
}

function rajni(response) {
  return new Promise((resolve, reject) => {
    response
      .json()
      .then(data => resolve(new JSONResponse(response, data)))
      .catch(reject);
  });
}

function FetchWithCreds(url, opts) {
  opts = Object.assign({ credentials: "include" }, opts);
  return fetch(url, opts);
}

class Feedback {
  constructor(baseURL) {
    this.paths = paths(baseURL);
    window.Feedback = this;
  }

  /**
   * Trigers the login flow
   */
  Login() {
    window.location = this.paths.Login;
  }

  /**
   * Log the user out
   */
  Logout() {
    window.location = this.paths.Logout;
  }

  /**
   * Returns information about currently logged in attendee
   */
  Me() {
    return FetchWithCreds(this.paths.Me, { credentials: "include" })
      .then(rajni)
      .then(status);
  }

  /**
   * Add a bookmark for currently logged in attendee
   * @param {string} id
   */
  AddBookmark(id) {
    return FetchWithCreds(this.paths.Bookmarks + "/" + id, {
      method: "PUT",
    }).then(status);
  }

  /**
   * Get a list of currently logged in attendee's bookmarks
   */
  ListOwnBookmarks() {
    return FetchWithCreds(this.paths.Bookmarks)
      .then(rajni)
      .then(status);
  }

  /**
   * Remove a bookmark for currently logged in attendee
   * @param {string} id
   */
  RemoveBookmark(id) {
    return FetchWithCreds(this.paths.Bookmarks + "/" + id, {
      method: "DELETE",
    }).then(status);
  }

  /**
   * Add feedback
   * @param {object} feedback
   */
  AddFeedback(feedback) {
    return FetchWithCreds(this.paths.Feedbacks, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    }).then(status);
  }

  /**
   * List feedbacks added by currently logged in user
   */
  ListOwnFeedbacks() {
    return FetchWithCreds(this.paths.OwnFeedbacks)
      .then(rajni)
      .then(status);
  }

  /**
   * Get leaderboards - []{ID: "", Score: 0}
   */
  Leaderboards() {
    return fetch(this.paths.Leaderboards)
      .then(rajni)
      .then(status);
  }
}

export default Feedback;
