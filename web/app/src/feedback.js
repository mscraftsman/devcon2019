function Paths(baseURL) {
  return {
    Login: baseURL + "/login",
    Me: baseURL + "/api/me",
    Bookmarks: baseURL + "/api/bookmarks",
    Feedbacks: baseURL + "/api/feedbacks",
    OwnFeedbacks: baseURL + "/api/feedbacks/me",
  };
}

function status({ response, data }) {
  return new Promise((resolve, reject) => {
    if (response.status >= 200 && response.status < 300) {
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
      .then(data => resolve({ response, data }))
      .catch(reject);
  });
}

function FetchWithCreds(url, opts) {
  opts = Object.assign({ credentials: "include" }, opts);
  return fetch(url, opts);
}

class Feedback {
  constructor(baseURL) {
    this.paths = Paths(baseURL);
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
  Logout() {}

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
    return FetchWithCreds(this.paths.Bookmarks, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: `{"id": ${id}}`,
    })
      .then(rajni)
      .then(status);
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
}

export default Feedback;
