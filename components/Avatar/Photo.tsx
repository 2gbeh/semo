import Link from "next/link";

const AvatarPhoto = ({
  src,
  size = 32,
  title = "",
  clickable = false,
}: {
  src: string;
  size: number;
  title?: string;
  clickable?: boolean;
}) => {
  const avatarPhoto = (
    <div
      className="rounded-full overflow-hidden border"
      style={{
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    >
      <img src={src} alt="avatar" title={title} className="object-cover" />
    </div>
  );
// 
  return clickable ? (
    <Link href={src} target="_new">
      {avatarPhoto}
    </Link>
  ) : (
    avatarPhoto
  );
};

export default AvatarPhoto;
