import React from 'react';
import ImageGallery from 'react-image-gallery';
import { withStyles } from '@material-ui/core/styles';
 const styles ={

 };


export const _ImageSlideShow = withStyles(styles)(({imageUrls}) => {
  console.log(imageUrls);
    const images = [
        {
          original: `${imageUrls[0]}`,
          thumbnail: '',
        },
        {
          original: `${imageUrls[1]}`,
          thumbnail: '',
        },
        {
          original: `${imageUrls[2]}`,
          thumbnail: '',
        },
      ];
    return (
        <div className='myimage'>
            <ImageGallery items={images} />
        </div>
    );
})