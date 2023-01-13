import Heading from "./Heading.js";
import Section from "./Section.js";

function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default function App() {
  return (
    <div className="grid place-content-center h-screen">
      <Page />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
