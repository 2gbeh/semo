//
function datePipe(timestamp) {
  if (typeof timestamp === "string" && timestamp.indexOf(", ") > 1) {
    let date__time = timestamp.split(", ");
    let date = date__time[0].split("/");
    let time__am = date__time[1].split(" ");
    let time = time__am[0].split(":");
    //
    let n = Number(date[0]);
    let j = Number(date[1]);
    let y = Number(date[2]);
    let g = Number(time[0]);
    let i = Number(time[1]);
    let A = time__am[1];
    //
    const d = new Date(
      y + 2000,
      n - 1,
      j,
      A === "AM" ? g + 1 : g + 13,
      i
    ).toJSON();
    // return [date, time, A, d];
    return d;
  }
  //
  return new Date().toJSON();
}

export default function parseWhatsAppChat(chats) {
  const arr = [];
  let timestamp__payload, participant__chat, created_at, sender, message;
  //
  if (typeof chats === "string") {
    chats.split("\n").map((chat) => {
      if (typeof chat === "string" && chat.trim().length > 0) {
        timestamp__payload = chat.split(" - ");
        created_at = datePipe(timestamp__payload[0]);
        //
        participant__chat = timestamp__payload[1]?.split(": ");
        sender = participant__chat?.[0]?.trim();
        message = participant__chat?.[1]?.trim();
        //
        if (sender && message?.indexOf("<") < 0) {
          arr.push({
            created_at,
            sender,
            message,
          });
        }
      }
    });
  }
  //
  // return [arr.length, arr];
  return arr;
}
