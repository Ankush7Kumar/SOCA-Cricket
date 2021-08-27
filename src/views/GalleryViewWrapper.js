import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../GalleryViewImages/elements/Gallery';
import classNames from 'classnames';

import abbasnaqvi from '../assets/images/abbasnaqvi.jpg'
export default class GalleryViewWrapper extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images,
            currentImage: 0
        };

        this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }



      

    onCurrentImageChange(index) {
        this.setState({ currentImage: index });
    }
    

    deleteImage() {
        if (window.confirm(`Are you sure you want to delete image number ${this.state.currentImage}?`)) {
            var images = this.state.images.slice();
            images.splice(this.state.currentImage, 1)
            this.setState({
                images: images
            });
        }
    }

    render () {
        return (
       
          <div className="container pb-72" >
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
              
                <Gallery
                    images={this.state.images}
                    enableLightbox={true}
                    enableImageSelection={false}
                    currentImageWillChange={this.onCurrentImageChange}

                    customControls={[
                        
                    ]}
                />
            </div>
            </div>
        );
    }
}

GalleryViewWrapper.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

GalleryViewWrapper.defaultProps = {

  
    images: [


        {
            src: require("./../assets/images/g18.jpeg"),
            thumbnail: require("./../assets/images/g18.jpeg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g19.jpeg"),
            thumbnail: require("./../assets/images/g19.jpeg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g20.jpeg"),
            thumbnail: require("./../assets/images/g20.jpeg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g1.jpg"),
            thumbnail: require("./../assets/images/g1.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        


        {
            src: require("./../assets/images/g2.png"),
            thumbnail: require("./../assets/images/g2.png"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        


        {
            src: require("./../assets/images/g3.jpg"),
            thumbnail: require("./../assets/images/g3.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g4.jpg"),
            thumbnail: require("./../assets/images/g4.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g5.jpg"),
            thumbnail: require("./../assets/images/g5.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g6.jpg"),
            thumbnail: require("./../assets/images/g6.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g7.jpg"),
            thumbnail: require("./../assets/images/g7.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g8.jpg"),
            thumbnail: require("./../assets/images/g8.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g9.jpg"),
            thumbnail: require("./../assets/images/g9.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g10.jpg"),
            thumbnail: require("./../assets/images/g10.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g11.jpg"),
            thumbnail: require("./../assets/images/g11.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        

        {
            src: require("./../assets/images/g12.jpg"),
            thumbnail: require("./../assets/images/g12.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },


        {
            src: require("./../assets/images/g13.jpg"),
            thumbnail: require("./../assets/images/g13.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g14.jpg"),
            thumbnail: require("./../assets/images/g14.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g15.jpg"),
            thumbnail: require("./../assets/images/g15.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g16.jpg"),
            thumbnail: require("./../assets/images/g16.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },

        {
            src: require("./../assets/images/g17.jpg"),
            thumbnail: require("./../assets/images/g17.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: ""
        },


    ]
};

