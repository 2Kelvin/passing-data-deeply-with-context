import Heading from "./Heading.js";
import Section from "./Section.js";

function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
      <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    </Section>
  );
}

export default function App() {
  return <Page />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
