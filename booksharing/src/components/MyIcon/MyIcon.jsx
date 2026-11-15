export default function MyIcon({
  fill = "white",
  width = "20px",
  height = "20px",
  name,
}) {
  const baseURL = "/assets/icons/";
  return (
    <>
      <svg fill={fill} width={width} height={height}>
        <use href={`${baseURL}icons.svg#icon-${name}`}></use>
      </svg>
    </>
  );
}
