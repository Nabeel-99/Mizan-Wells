import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Imagetest from "../assets/images/phase1.jpg";
import Imagetest2 from "../assets/images/phase2.jpg";
import Imagetest3 from "../assets/images/phase3.jpeg";
import { useState } from "react";

export default function ProjectPhaseCarousel() {
  const [value, setValue] = useState(0);
  //   const [currentImage, setCurrentImage] = useState(0);
  //   const [isEnlarged, setIsEnlaged] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   const openImage = (image) => {
  //     setCurrentImage(image);
  //     setIsEnlaged(true);
  //   };

  //   const style = {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     // width: {
  //     //     sm: 500,
  //     //     md: 720,
  //     //     lg: 960,
  //     //     xl: 1080,
  //     //   },
  //     bgcolor: "background.paper",
  //     border: "2px solid #000",
  //     boxShadow: 24,
  //     pt: 2,
  //     px: 4,
  //     pb: 3,
  //   };

  const images = [Imagetest3, Imagetest, Imagetest2];

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        indicatorColor="none"
      >
        {images.map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            className="object-cover w-full h-[400px] rounded-xl"
            // onClick={() => openImage(index)}
          />
        ))}
      </Tabs>
      {/* <Modal open={isEnlarged} onClose={() => setIsEnlaged(false)}>
        <Box sx={{ ...style, width: 200 }}>
          <img src={images[currentImage]} alt="" className="w-full" />
        </Box>
      </Modal> */}
    </Box>
  );
}
