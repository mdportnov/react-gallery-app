import {axiosApiInstance} from "./Interceptors";
import AuthService, {API_URL} from "./AuthService";

export const PHOTOS_API_URL = `${API_URL}/photos`

class UploadService {
    upload(file, onUploadProgress) {
        let formData = new FormData();
        const API_URL = `${PHOTOS_API_URL}/${AuthService.getUserCredentials().username}`;
        formData.append("file", file);
        return axiosApiInstance.put(API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getImages(name) {
        return axiosApiInstance.get(`${PHOTOS_API_URL}/all/${name}`)
    }

    deleteImage(name, id) {
        return axiosApiInstance.delete(`${PHOTOS_API_URL}/${name}/${id}`);
    }
}

export default new UploadService();