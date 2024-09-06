import { tags } from "@/constants";

const HeaderTag = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-2 ">
      {tags.map((i) => (
        <li
          key={i}
          className="px-4 py-2 text-sm bg-white rounded-full text-textSecondary bg-opacity-10"
        >
          {i}
        </li>
      ))}
    </ul>
  );
};

export default HeaderTag;
