import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });
          
cloudinary.config({ 
  cloud_name: 'dmknfecvk', 
  api_key: '492457644126366', 
  api_secret: 'vcj__IWt2JESByWwFy2ANFzUno4' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {

        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        console.log("response ", response)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        console.log("Having issue on cloudinary upload task ", error)
        return null;
    }
}



export {uploadOnCloudinary}