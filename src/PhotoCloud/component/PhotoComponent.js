import React, {Component} from "react";
import FileLoadService from "../service/FileLoadService";
import PropTypes from "prop-types";

const INSTRUCTOR = 'misha'

class PhotoComponent extends Component {
    constructor(props) {
        super(props)
        const {image, isLoading} = this.props;

        this.state = {
            image: props.image
        }

        this.onSubmit = this.onSubmit.bind(this)
        // this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)

        if (this.state.id === -1) {
            return
        }

        FileLoadService.retrieveImage(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                image: response.data.image
            }))
    }

    render() {
        {/*<img className={classes.preview}*/
        }
        {/*     src={preview}*/
        }
        {/*     onLoad={() => URL.revokeObjectURL(preview)}*/
        }
        {/*/>*/
        }
        return (
            <div>

            </div>
        )
    }
}

PhotoComponent.propTypes = {
    image: PropTypes.string,
    isLoading: PropTypes.bool
};

export default PhotoComponent