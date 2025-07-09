import ResponsiveImage from "../ResponsiveImage";

const DemoFooter = () => {
  return (
    <footer className="pt-11">
      <ResponsiveImage
        img="footer.webp"
        imgFolder="demo"
        className="w-full"
        alt="footer"
      />
    </footer>
  );
};

export default DemoFooter;