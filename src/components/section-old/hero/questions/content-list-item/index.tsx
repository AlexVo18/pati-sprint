import type { ContentListItemType } from "@/types/hero.type";

type Props = {
  listItem: ContentListItemType;
};

const ContentListItem = ({ listItem: { title, content } }: Props) => {
  return (
    <li className="tracking-wide opacity-90">
      <strong>{title}</strong> – {content}
    </li>
  );
};

export default ContentListItem;
