import Heading from "./Heading.js";
import Post from "./Post.js";
import Section from "./Section.js";

export default function RecentPosts() {
  return React.createElement(
    Section,
    null,
    React.createElement(
      Heading,
      null,
      "Recent Posts"
    ),
    React.createElement(Post, { title: "Flavors of Lisbon", body: "... those pasteis de nata!" }),
    React.createElement(Post, { title: "Buenos Aires in the rhythym of tango", body: "I loved it!" })
  );
}