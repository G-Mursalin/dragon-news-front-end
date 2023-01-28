import { toast } from "react-toastify";

// Send image to ImgBB and Get the Image URL
const uploadImageToImgBBAndGetURL = async (photo) => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  try {
    const formData = new FormData();
    formData.append("image", photo);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.success) {
      return data.data?.url;
    } else {
      throw new Error("Image Can't Upload");
    }
  } catch (error) {
    toast.error(error.message);
    return "https://i.ibb.co/R23Sc33/profile-Image-Holder.jpg";
  }
};

export default uploadImageToImgBBAndGetURL;
