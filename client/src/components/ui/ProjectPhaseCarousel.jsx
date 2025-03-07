import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import { useState } from "react";
import { Tab } from "@mui/material";

export default function ProjectPhaseCarousel({ phaseImages }) {
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

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        indicatorColor="none"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        {phaseImages.map((image, index) => (
          <Tab
            key={index}
            icon={
              <img
                src={image}
                alt=""
                className="object-cover w-full h-[400px] rounded-xl"
              />
            }
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
