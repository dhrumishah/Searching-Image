import React from 'react'

const imageList = (props) => {
   const images = props.images.map((image) => {
    return <div alt={image.description} key={image.id} >
    <img src={image.urls.regular}/>
    </div>
   });
    return (
        <div>
            {images}
        </div>
    );
}

export default imageList
