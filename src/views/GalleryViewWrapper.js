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
            src: require("./../assets/images/g1.JPG"),
            thumbnail: require("./../assets/images/g1.JPG"),
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },

        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/226660085_124032169933294_7105219044526062519_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=g2Q8V6Sml7cAX9tg4Ma&tn=lKEkLtlbRh7Qk0Be&_nc_ht=scontent.fyzd1-2.fna&oh=f89a578de137578bccfa73aed3738af2&oe=610626AA",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/226660085_124032169933294_7105219044526062519_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=g2Q8V6Sml7cAX9tg4Ma&tn=lKEkLtlbRh7Qk0Be&_nc_ht=scontent.fyzd1-2.fna&oh=f89a578de137578bccfa73aed3738af2&oe=610626AA",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/226588064_124032176599960_279051895322469666_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=DlWkRisH4KsAX_-uKBz&_nc_ht=scontent.fyzd1-2.fna&oh=497476fe52c20722362de1e62a413400&oe=6105957C",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/226588064_124032176599960_279051895322469666_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=DlWkRisH4KsAX_-uKBz&_nc_ht=scontent.fyzd1-2.fna&oh=497476fe52c20722362de1e62a413400&oe=6105957C",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/225598585_124032209933290_3098362964568082121_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=zWUMyQjbdskAX_QP7E5&_nc_ht=scontent.fyzd1-2.fna&oh=ca0e4e25d879ec7b0570f77d53b41c5d&oe=610594A5",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/225598585_124032209933290_3098362964568082121_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=zWUMyQjbdskAX_QP7E5&_nc_ht=scontent.fyzd1-2.fna&oh=ca0e4e25d879ec7b0570f77d53b41c5d&oe=610594A5",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/219925244_120989366904241_8540176269870632130_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Nhxv-XoOBLoAX8gMz8b&_nc_ht=scontent.fyzd1-3.fna&oh=ad7bfeaf395b5591df87b054ad7c1ef6&oe=61056512",
            thumbnail: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/219925244_120989366904241_8540176269870632130_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Nhxv-XoOBLoAX8gMz8b&_nc_ht=scontent.fyzd1-3.fna&oh=ad7bfeaf395b5591df87b054ad7c1ef6&oe=61056512",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/220205151_120989410237570_5820626091695188746_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=S8fksyWoFFwAX_tpuht&_nc_ht=scontent.fyzd1-3.fna&oh=8aa9122896517764accdefac28fa9d02&oe=61056CC6",
            thumbnail: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/220205151_120989410237570_5820626091695188746_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=S8fksyWoFFwAX_tpuht&_nc_ht=scontent.fyzd1-3.fna&oh=8aa9122896517764accdefac28fa9d02&oe=61056CC6",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/217629677_120989393570905_5174241624159248015_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=XWvVf_F4T14AX942M3G&tn=lKEkLtlbRh7Qk0Be&_nc_ht=scontent.fyzd1-2.fna&oh=eb2fa1cd431bb2aeb7b29a4e9074a638&oe=6106A254",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/217629677_120989393570905_5174241624159248015_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=XWvVf_F4T14AX942M3G&tn=lKEkLtlbRh7Qk0Be&_nc_ht=scontent.fyzd1-2.fna&oh=eb2fa1cd431bb2aeb7b29a4e9074a638&oe=6106A254",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/220376318_120989426904235_2084588992793468394_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=9uQQ5cFL4j8AX-f_E7E&_nc_ht=scontent.fyzd1-3.fna&oh=7fe21f87a2511773cee9ffa1856ba713&oe=6104EAC1",
            thumbnail: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/220376318_120989426904235_2084588992793468394_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=9uQQ5cFL4j8AX-f_E7E&_nc_ht=scontent.fyzd1-3.fna&oh=7fe21f87a2511773cee9ffa1856ba713&oe=6104EAC1",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/218396673_120989496904228_706883276183589383_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=597D3MrAYCgAX8tQxAL&_nc_ht=scontent.fyzd1-2.fna&oh=89e05094ee6c876bfc8366b1842380aa&oe=61055FED",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/218396673_120989496904228_706883276183589383_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=597D3MrAYCgAX8tQxAL&_nc_ht=scontent.fyzd1-2.fna&oh=89e05094ee6c876bfc8366b1842380aa&oe=61055FED",
             thumbnailWidth: 257,
            thumbnailHeight: 320,
            caption: ""
        },





        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/219389836_120989523570892_4578496662887389352_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=QE9WyUwEDe4AX-Jm5VG&tn=lKEkLtlbRh7Qk0Be&_nc_ht=scontent.fyzd1-2.fna&oh=3b6299a8682bd5e3e7e5799110ea5458&oe=610506A2",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/219389836_120989523570892_4578496662887389352_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=QE9WyUwEDe4AX-Jm5VG&tn=lKEkLtlbRh7Qk0Be&_nc_ht=scontent.fyzd1-2.fna&oh=3b6299a8682bd5e3e7e5799110ea5458&oe=610506A2",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/220659176_120989543570890_4430305687958371769_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=12NNB3w2I7kAX_iYhCS&_nc_ht=scontent.fyzd1-2.fna&oh=d8067c48899f91dcf93b8f47aa7814f8&oe=6104DD4E",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/220659176_120989543570890_4430305687958371769_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=12NNB3w2I7kAX_iYhCS&_nc_ht=scontent.fyzd1-2.fna&oh=d8067c48899f91dcf93b8f47aa7814f8&oe=6104DD4E",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: ""
        },
        {
            src: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/220707784_120989586904219_5843724214657538796_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=z8G4YTkZc6QAX-ISsv4&_nc_ht=scontent.fyzd1-3.fna&oh=9ba99c928e8050b3c87935f4c8048ad9&oe=610508C8",
            thumbnail: "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/220707784_120989586904219_5843724214657538796_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=z8G4YTkZc6QAX-ISsv4&_nc_ht=scontent.fyzd1-3.fna&oh=9ba99c928e8050b3c87935f4c8048ad9&oe=610508C8",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/219604758_120989613570883_2283633053019618400_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=8-VVhDyWaRIAX_4jqSc&_nc_ht=scontent.fyzd1-2.fna&oh=70f157418f6642f95df7230663445286&oe=6104EB5A",
            thumbnail: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/219604758_120989613570883_2283633053019618400_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=8-VVhDyWaRIAX_4jqSc&_nc_ht=scontent.fyzd1-2.fna&oh=70f157418f6642f95df7230663445286&oe=6104EB5A",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        
        





    ]
};

