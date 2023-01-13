import AllPosts from "./AllPosts.js";
import Heading from "./Heading.js";
import Post from "./Post.js";
import Section from "./Section.js";

function ProfilePage() {
  return React.createElement(
    "div",
    { className: "m-auto w-fit" },
    React.createElement(
      Section,
      null,
      React.createElement(
        Heading,
        null,
        "My Profile"
      ),
      React.createElement(Post, { title: "Hello Traveller", body: "Read about my adventure" }),
      React.createElement(AllPosts, null)
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "h-screen" },
    React.createElement(ProfilePage, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));