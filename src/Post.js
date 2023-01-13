import Heading from "./Heading.js";
import Section from "./Section.js";

export default function Post({ title, body }) {
  return (
    <Section>
      <Heading>{title}</Heading>
      <p className="font-mono text-sm">{body}</p>
    </Section>
  );
}
