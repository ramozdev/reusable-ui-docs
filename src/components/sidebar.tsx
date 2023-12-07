import Link from "next/link";
import slugify from "sluga";

const components = {
  data: ["Table"],
  interactive: [
    "Accordion",
    "Collapsible",
    "Context Menu",
    "Dialog",
    "Dropdown Menu",
    "Hover Card",
    "Popover",
    "Tooltip",
    "cmdk",
  ],
  feedback: ["Alert Dialog", "Progress", "Toast"],
  forms: [
    "Button",
    "Checkbox",
    "Form",
    "Input",
    "Label",
    "Radio Group",
    "Select",
    "Slider",
    "Switch",
    "Textarea",
    "Toggle Group",
    "Toggle",
  ],
  layout: ["Card", "Separator", "Toolbar"],
  media: ["Avatar", "Aspect Ratio", "Image", "Video"],
  navigation: [
    "Anchor",
    "Breadcrumb",
    "Navigation Menu",
    "Pagination",
    "Skip Link",
    "Tabs",
    "Menubar",
  ],
  other: ["Kbd", "Badge", "Code", "Link"],
  utilities: ["Scroll Area"],
};

export function Sidebar() {
  return (
    <>
      {Object.entries(components).map(([key, value]) => (
        <div key={key}>
          <div className="px-4 py-2 font-semibold capitalize">{key}</div>
          {value.map((value) => (
            <Link key={value} href={`/docs/${slugify(value)}`} legacyBehavior>
              <a className="block px-7 py-1">{value}</a>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
