import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Startup, Author } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex justify-between items-center">
        <p className="startup_card_date">{formatDate(_createdAt)} </p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-6 text-red-500" />
          <span className="flex justify-between items-center gap-5 text-sm">
            {views}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id ?? ""}`}>
            <p className="font-medium text-[18px] text-[#0D1B2A] line-clamp-1">
              {author?.name ?? "Anonymous"}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        {author?._id && (
          <Link href={`/user/${author._id}`}>
            <Image
              src="https://images.unsplash.com/photo-1687360440741-f5df549b352d?q=80&w=3351&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${author?.name}'s profile image`}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </Link>
        )}
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        {image && (
          <Image
            src={image}
            alt="Startup image"
            width={200}
            height={200}
            className="startup-card_img"
          />
        )}
      </Link>
      <div className="flex justify-between items-center gap-3 mt-5">
        {category && (
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
        )}

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
