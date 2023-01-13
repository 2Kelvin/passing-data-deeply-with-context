import Heading from "./Heading.js";
import RecentPosts from "./RecentPosts.js";
import Section from "./Section.js";

export default function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}
