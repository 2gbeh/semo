// HOWTO
// import Xi from "@/components/AssetIcon";
// <Xi as={["chevron-right-white", 35, "Next"]} />
// <Xi as={[[post.is_liked, "heart-solid-red", "heart-outline-gray"], 35, "Like"]} />

type TSource = string | [boolean | number, string, string];
type TDimension = number | Array<string | number>;

const AssetIcon = ({ as }: { as: [TSource, TDimension, string] }) => {
  return (
    <img
      src={getSource(as[0])}
      style={getDimension(as[1])}
      title={as[2]}
      alt={as[2]}
    />
  );
};

export default AssetIcon;

const getSource = (x: TSource): string =>
  typeof x === "string"
    ? `/icons/${x}.svg`
    : x[0]
    ? `/icons/${x[1]}.svg`
    : `/icons/${x[2]}.svg`;

const getDimension = (x: TDimension): Record<string, string | number> =>
  Array.isArray(x)
    ? {
        minWidth: x[0],
        maxWidth: x[0],
        minHeight: x[1],
        maxHeight: x[1],
      }
    : {
        minWidth: x,
        maxWidth: x,
        minHeight: x,
        maxHeight: x,
      };
