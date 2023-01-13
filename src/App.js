import AllPosts from "./AllPosts.js";
import Heading from "./Heading.js";
import Post from "./Post.js";
import Section from "./Section.js";

function ProfilePage() {
  return (
    <div className="m-auto w-fit">
      <Section>
        <Heading>My Profile</Heading>
        <Post title="Hello Traveller" body="Read about my adventure" />
        <AllPosts />
      </Section>
    </div>
  );
}

export default function App() {
  return (
    <div className="h-screen">
      <ProfilePage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
