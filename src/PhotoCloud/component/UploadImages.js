import React, {Component} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import {Box, Button, Paper, Typography, withStyles} from '@material-ui/core';
import UploadService from "../service/UploadService";
import AuthService from "../service/AuthService";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: "#EEEEEE",
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

export default class UploadImages extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);

        this.state = {
            currentFile: undefined,
            previewImage: undefined,
            progress: 0,

            message: "",
            isError: false,
            imageInfos: [],
        };
    }

    componentDidMount() {
        UploadService.getImages(AuthService.getUserCredentials().username).then((response) => {
            console.log(response.data);
            this.setState({
                imageInfos: response.data,
            });
        });
    }

    selectFile(event) {
        this.setState({
            currentFile: event.target.files[0],
            previewImage: URL.createObjectURL(event.target.files[0]),
            progress: 0,
            message: ""
        });
    }

    upload() {
        this.setState({
            progress: 0
        });

        UploadService.upload(this.state.currentFile, (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then((response) => {
                this.setState({
                    message: response.data.message,
                    isError: false
                });
                return UploadService.getImages(AuthService.getUserCredentials().username);
            })
            .then((files) => {
                this.setState({
                    imageInfos: files.data,
                });
            })
            .catch((err) => {
                this.setState({
                    progress: 0,
                    message: "Could not upload the image!",
                    currentFile: undefined,
                    isError: true
                });
            });
    }

    render() {
        const {
            currentFile,
            previewImage,
            progress,
            message,
            imageInfos,
            isError
        } = this.state;

        return (
            <div align={"center"} style={{
                width: "100%",
            }}>
                <Typography variant="h2" align={"center"} className="list-header">
                    Images
                </Typography>

                <label htmlFor="btn-upload">
                    <input
                        id="btn-upload"
                        name="btn-upload"
                        style={{display: 'none'}}
                        type="file"
                        accept="image/*"
                        onChange={this.selectFile}/>
                    <Button
                        className="btn-choose"
                        variant="outlined"
                        component="span">
                        Choose Image
                    </Button>
                </label>
                <div className="file-name">
                    {currentFile ? currentFile.name : null}
                </div>
                <Button
                    className="btn-upload"
                    color="primary"
                    variant="contained"
                    component="span"
                    disabled={!currentFile}
                    onClick={this.upload}>
                    Upload
                </Button>

                {previewImage && (
                    <div>
                        <img style={{
                            marginTop: "10px",
                            marginBottom: "10px"
                        }} width={"200px"} className="preview my20" src={previewImage} alt=""/>
                    </div>
                )}

                {message && (
                    <Typography variant="subtitle2" className={`upload-message ${isError ? "error" : ""}`}>
                        {message}
                    </Typography>
                )}

                {currentFile && (
                    <Box className="my20" display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgress variant="determinate" value={progress}/>
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
                        </Box>
                    </Box>)
                }

                <ul style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "wrap",
                }}
                >
                    {imageInfos &&
                    imageInfos.map((image, index) => (
                        <li
                            style={{
                                alignItems: "center",
                                display: "flex",
                                margin: "10px"
                            }}
                            key={index}>
                            <Paper elevation={5}>
                                <img
                                    src={`${image.filename}?jwtToken=${AuthService.getJwt()}`}
                                    height="200px" alt={image.filename}/>
                                <img/>
                            </Paper>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}