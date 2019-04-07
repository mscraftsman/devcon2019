function Paths(baseURL) {
  return {
    Login: baseURL + "/login",
    Me: baseURL + "/me",
    Bookmarks: baseURL + "/bookmarks",
    Feedbacks: baseURL + "/feedbacks",
    OwnFeedbacks: baseURL + "/feedbacks/me",
  };
}

function Status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function JSON(response) {
  return response.json();
}

class Feedback {
  constructor(baseURL) {
    this.paths = Paths(baseURL);
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
    return fetch(this.paths.Me)
      .then(JSON)
      .then(Status);
  }

  /**
   * Add a bookmark for currently logged in attendee
   * @param {string} id
   */
  AddBookmark(id) {
    return fetch(this.paths.Bookmarks, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: `{"id": ${id}}`,
    })
      .then(JSON)
      .then(Status);
  }

  /**
   * Get a list of currently logged in attendee's bookmarks
   */
  ListOwnBookmarks() {
    return fetch(this.paths.Bookmarks)
      .then(JSON)
      .then(Status);
  }

  /**
   * Remove a bookmark for currently logged in attendee
   * @param {string} id
   */
  RemoveBookmark(id) {
    return fetch(this.paths.Bookmarks + "/" + id, {
      method: "DELETE",
    }).then(Status);
  }

  /**
   * Add feedback
   * @param {object} feedback
   */
  AddFeedback(feedback) {
    return fetch(this.paths.Feedbacks, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    }).then(Status);
  }

  /**
   * List feedbacks added by currently logged in user
   */
  ListOwnFeedbacks() {
    return fetch(this.paths.OwnFeedbacks)
      .then(JSON)
      .then(Status);
  }
}

export default Feedback;
