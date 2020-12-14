import React from "react";
import CoverMedia from "@/components/cover-media";
import ContentSection from "@/components/section";

export function Overview({ page }) {
  const { cover, sections } = page;
  return (
    <div className="inner-detail p-4">
      {cover && <CoverMedia cover={cover} />}

      {sections?.length &&
        sections.map((section, _id) => (
          <ContentSection key={_id} section={section} />
        ))}
    </div>
  );
}
