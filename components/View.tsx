import React from "react";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const View = async ({ id }: { id: string }) => {
  const viewsResponse = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  const totalViews = viewsResponse?.views ?? 0;
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="text-[#0D1B2A]">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;
