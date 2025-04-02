import CodePreview from "@/components/doc-cmp/code-preview";
import Heading from "@/components/global-cmp/heading";
import Title from "@/components/global-cmp/title";
import ExamplesCode from "@/utils/examples.json";

const ExamplesPage = () => {
  return (
    <>
      <Title
        title="Examples"
        description="Explore TableNex in action with practical examples."
      />
      {ExamplesCode.map((example,i) => (
        <Heading
          key={i}
          title={example.title}
          content={
            <CodePreview
              code={example.code}
              component={example.component}
              description={example.description}
            />
          }
        />
      ))}
    </>
  );
};

export default ExamplesPage;
