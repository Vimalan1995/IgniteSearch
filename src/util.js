//media resize

export const smallImage = (imagePath, size) => {
    
   
  let image;
  if (imagePath) { // check if image path is available
    image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  } else {
    image = imagePath;
  }

  return image
  }
