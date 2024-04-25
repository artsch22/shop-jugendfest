import PhotoSwipeLightbox from 'photoswipe-lightbox.esm.js';
const options = {
  gallery: '#gallery--responsive-images',
  children: 'a',
  pswpModule: () => import('photoswipe.esm.js')
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.init();