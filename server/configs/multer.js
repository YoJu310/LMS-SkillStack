import multer from "multer";

const storage = multer.diskStorage({}); // Use disk storage for file uploads
const upload = multer({ storage });

export default upload;