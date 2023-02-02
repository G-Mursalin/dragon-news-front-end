import { toast } from "react-toastify";

// Send image to ImgBB and Get the Image URL
const uploadImageToBackEnd = async (photo) => {
  try {
    const formData = new FormData();
    formData.append("image", photo);
    const response = await fetch(`http://localhost:5000/upload-image`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      return data.url;
    } else {
      throw new Error("Image Can't Upload");
    }
  } catch (error) {
    toast.error(error.message);
    return "https://i.postimg.cc/650DX1CX/image-holder.webp";
  }
};

export default uploadImageToBackEnd;
