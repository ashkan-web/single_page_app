// JS Single Page Application
// helper module to create a session

const baseUrl = "http://localhost:3000/api/v1";
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
