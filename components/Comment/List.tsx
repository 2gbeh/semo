import chats from "@/data/WhatsApp Chat with Aseobi for SEMO2k23";
import parseWhatsAppChat from "@/utils/parseWhatsAppChat";
//
import { CommentForm, CommentItem, CommentService } from "./";
const comments = parseWhatsAppChat(chats);

const CommentList = () => {
  return (
    <section className="mt-2">
      <CommentForm />
      {/* COMMENTS */}
      {comments?.map((comment, i) => (
        <CommentItem key={i} data={CommentService.transform(comment)} />
      ))}
    </section>
  );
};

export default CommentList;
