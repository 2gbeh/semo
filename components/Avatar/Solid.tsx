import randomColor from "@/utils/randomColor";

const AvatarSolid = ({
  text,
  color,
  size = 32,
  title = "",
}: {
  text: string;
  color?: string;
  size?: number;
  title?: string;
}) => {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white text-xs tracking-wide"
      title={title}
      style={{
        backgroundColor: color || getColor(text),
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    >
      {getInitials(text).toUpperCase()}
    </div>
  );
};

export default AvatarSolid;

const getInitials = (x: any): string => {
  let str = x.toString().trim();
  let arr = str.split(" ");
  //
  return x
    ? arr.length > 1
      ? arr[0][0] + arr[1][0]
      : str.length > 1
      ? str.slice(0, 2)
      : str[0] + str[0]
    : "na";
};

const colorHistory: Record<string, string> = {};
// 
export const getColor = (text: string): string => {
  if (text) {
    if (text in colorHistory) {
      return colorHistory[text];
    } else {
      const newColor = randomColor();
      colorHistory[text] = newColor;
      return newColor;
    }
  }
  return "#000";
};
