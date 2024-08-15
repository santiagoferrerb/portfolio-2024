import {
  Cloud,
  Code,
  Database,
  GitBranch,
  SquareDashedBottomCode,
  WandSparkles,
} from "lucide-react";
import StackItem from "../../components/StackItem";
import Stack from "../../components/Stack";

function Skills() {
  return (
    <div className="relative w-full h-full flex flex-col gap-4  text-white pr-4 overflow-y-auto">
      {/* Head */}
      <div className="flex flex-col gap-2 justify-center items-center w-full bg-gray-100 bg-opacity-10 rounded-2xl p-4 py-8">
        <h2 className="text-h1 text-[44px]">What can I do best?</h2>
        <p>
          From developing interactive UIs to setting up secure and scalable
          APIs, I thrive on solving complex problems and delivering high-quality
          results.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-1 w-full gap-4  rounded-2xl">
        {/* Left */}
        <div className=" w-1/3 flex flex-col justify-between gap-12 h-full rounded-2xl bg-gray-100 bg-opacity-10 p-4">
          <Stack icon={<WandSparkles size={22} />} text="Design">
            <StackItem img="/ai.png" alt="html-logo" text="Illustrator" />
            <StackItem img="/figma.png" alt="html-logo" text="Figma" />
          </Stack>
          <Stack icon={<Cloud size={22} />} text="Cloud">
            <StackItem img="/aws.png" alt="html-logo" text="AWS" />
          </Stack>
          <Stack icon={<GitBranch size={22} />} text="Version Control">
            <StackItem img="/git.png" alt="html-logo" text="Git" />
            <StackItem img="/github.jpeg" alt="html-logo" text="GitHub" />
          </Stack>
        </div>

        {/* Rigt */}
        <div className="flex-1 flex flex-col justify-between gap-12 h-full rounded-2xl bg-gray-100 bg-opacity-10 p-4">
          <Stack icon={<Code size={22} />} text="Core Programming">
            <StackItem img="/html-logo.png" alt="html-logo" text="HTML" />
            <StackItem img="/css.webp" alt="html-logo" text="CSS" />
            <StackItem img="/js-logo.png" alt="html-logo" text="JavaScript" />
          </Stack>
          <Stack
            icon={<SquareDashedBottomCode size={22} />}
            text="Frameworks & Libraries"
          >
            <StackItem img="/react.png" alt="html-logo" text="React" />
            <StackItem img="/express.jpg" alt="html-logo" text="Express" />
            <StackItem
              img="/tailwind-logo.png"
              alt="html-logo"
              text="Tailwind"
            />
            <StackItem img="/axios.png" alt="html-logo" text="Axios" />
            <StackItem
              img="/sequelize.jpeg"
              alt="html-logo"
              text="Sequelize ORM"
            />
            <StackItem img="/passport.png" alt="html-logo" text="Passport" />
            <StackItem img="/npm.png" alt="html-logo" text="npm" />
          </Stack>
          <Stack icon={<Database size={22} />} text="Data">
            <StackItem img="/postgre.png" alt="html-logo" text="PostgreSQL" />
            <StackItem img="/msql.jpg" alt="html-logo" text="MySQL" />
            <StackItem img="/pbi.png" alt="html-logo" text="PowerBI" />
            <StackItem img="/looker.png" alt="html-logo" text="Looker Studio" />
          </Stack>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex w-full  bg-gray-100 bg-opacity-10 rounded-2xl p-4">
        <Stack icon={<Database size={22} />} text="No/Low - Code">
          <StackItem img="/shopify.webp" alt="html-logo" text="Shopify" />
          <StackItem img="/wp.png" alt="html-logo" text="Wordpress" />
          <StackItem img="/webflow.webp" alt="html-logo" text="Webflow" />
        </Stack>
      </div>
    </div>
  );
}

export default Skills;
