import Heading from "./Heading.js";
import Post from "./Post.js";
import Section from "./Section.js";

export default function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="... those pasteis de nata!" />
      <Post title="Buenos Aires in the rhythym of tango" body="I loved it!" />
    </Section>
  );
}
