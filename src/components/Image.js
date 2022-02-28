import { PicButtons } from "./PicButtons";

export const Image = ({ url, index }) => {
  return (
    <div className={"picContainer " + index}>
      <div
        className={"image " + index}
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
        }}
      />
      <PicButtons />
    </div>
  );
};
