import React, { Component } from 'react';
import ImagesService from '../services/ImagesService'

class AvatarImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    };

    arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    componentDidMount = async () => {
        const base64Flag = 'data:image/png;base64,';

        if(!this.props.avatarImg){
            const image = await ImagesService.getAvatarImage().then((resp) => {
                return resp.data.data.data
            });
            const imageStr = this.arrayBufferToBase64(image);
            this.setState({
                img: base64Flag + imageStr
            })
        }else{
            if (typeof this.props.avatarImg === 'string') {
                this.setState({img: this.props.avatarImg});
            } else {
                const imageStr = this.arrayBufferToBase64(this.props.avatarImg.data.data);
                this.setState({img: base64Flag + imageStr});
            }
        }
    };

    render() {
        const {img} = this.state;
        return (
            <img
                src={img}
                alt='Avatar'
                className="user-profile"/>
        )
    }
}    

export default AvatarImage;
