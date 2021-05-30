import {Component} from "react";
import AuthService from "../service/AuthService";
import UploadImages from "./UploadImages";

class PhotoGalleryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.refreshPhotos = this.refreshPhotos.bind(this)
    }

    componentDidMount() {
        this.refreshPhotos();
    }

    refreshPhotos() {
        console.log("Refreshing gallery")
        // PhotosDataService.retrieveAllImages(AuthService.getUserCredentials().username)//HARDCODED
        //     .then(
        //         response => {
        //             //console.log(response);
        //             this.setState({images: response.data})
        //         }
        //     )

    }

    deleteCourseClicked(id) {
        // PhotosDataService.deleteImage(AuthService.getUserCredentials().username, id)
        //     .then(
        //         response => {
        //             this.setState({message: `Delete of course ${id} Successful`})
        //             this.refreshPhotos()
        //         }
        //     )
    }

    render() {
        return (
            <div className="container">
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <UploadImages/>
                </div>
            </div>
        )
    }
}

export default PhotoGalleryComponent