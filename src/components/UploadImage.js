import axios from "axios";

// Get backend API URL from environment or use default
const getApiUrl = () => {
  return process.env.REACT_APP_API_URL || "http://localhost:5000/api";
};

export async function uploadImage(file) {
  return new Promise((resolve, reject) => {
    if (!/^image\//.test(file.type)) {
      reject(`File ${file.name} is not an image`);
    }

    try {
      const apiUrl = getApiUrl();
      const data = new FormData();
      data.append("file", file);

      axios
        .post(`${apiUrl}/upload`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success) {
            resolve(res.data.url);
          } else {
            reject("Image Upload Failed, Try Again!");
          }
        })
        .catch((err) => {
          console.error("Upload error:", err);
          const errorMessage =
            err.response?.data?.error || "Image Upload Failed, Try Again!";
          reject(errorMessage);
        });
    } catch (error) {
      reject(error.message);
    }
  });
}
