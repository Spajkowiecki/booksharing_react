export default function MyImage({ width = "100px", height = "100px", name }) {
  const baseURL = "/assets/images/";
  return (
    <>
      <img
        width={width}
        height={height}
        src={`${baseURL}${name}.png`}
        alt={`Image ${name}`}
      />
    </>
  );
}
