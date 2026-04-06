import axios from "axios";
const USERNAME = "vikeybm24";
const API_USER_URL = `https://api.github.com/users/${USERNAME}`;
const API_REPOS_URL = `https://api.github.com/users/${USERNAME}/repos`;

export async function getUser() {
  try {
    const responseUser = await axios.get(API_USER_URL);
    const responseRepos = await axios.get(API_REPOS_URL);
    return [responseUser.data, responseRepos.data];
  } catch (error) {
    console.error("Error fetching user:", error);
    // Return empty data instead of null to prevent crashing the destructuring in the component
    return [
      { login: USERNAME, public_repos: 0, avatar_url: "", bio: "Error fetching profile" },
      []
    ];
  }
}
