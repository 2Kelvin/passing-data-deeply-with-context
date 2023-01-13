import Heading from "./Heading.js";
import RecentPosts from "./RecentPosts.js";
import Section from "./Section.js";

export default function AllPosts() {
  return React.createElement(
    Section,
    null,
    React.createElement(
      Heading,
      null,
      "Posts"
    ),
    React.createElement(RecentPosts, null)
  );
}