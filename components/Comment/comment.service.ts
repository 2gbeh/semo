import { dd, mask } from "@/utils";
import date from "@/utils/phpDateFormat";
import { type TComment } from "./";

export const transform = (comment: TComment): TComment => ({
  sender: comment?.sender
    ? comment?.sender?.startsWith("+")
      ? mask(comment?.sender, 4, 4)
      : comment?.sender
    : "No display name",
  has_initials: Boolean(comment?.sender?.match(/[a-z]/i)),
  message: comment?.message || "",
  likes: comment?.likes || 0,
  created_at: date(comment?.created_at, "M j"),
});
