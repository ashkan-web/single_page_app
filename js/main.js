// JS Single Page Application
// helper module to create a session
const baseUrl = "http://localhost:3000/api/v1";

// Requests
const Question = {
  // Fetch all questions
  all() {
    return fetch(`${baseUrl}/questions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Fetch a single question
  one(id) {
    return fetch(`${baseUrl}/questions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Create a question
  create(params) {
    // params is an object that represents a question
    // { title: "qTitle", body: "qBody" }
    return fetch(`${baseUrl}/questions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Update a question
  update(id, params) {
    return fetch(`${baseUrl}/questions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Delete
  destroy(id) {
    return fetch(`${baseUrl}/questions/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

const Session = {
  create(params) {
    // params is an object that represents a use
    // { email: 'someone@domain.ext', password: 'user_password' }
    return fetch(`${baseUrl}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

Session.create({ email: "js@winterfell.gov", password: "supersecret" });
