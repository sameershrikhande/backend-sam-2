import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload file on cloudinary
        const response = await cloudinary.v2.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}


// cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/video/upload/v1689235939/video_upload_example.mp4",
//   { resource_type: "video",
//     public_id: "video_upload_example"
//   }).then((data) => {
//     console.log(data.playback_url);
//   }).catch((err) => {
//     console.err(err)
//   });