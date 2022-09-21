import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../Gallary/Gallery.css'

const handleDragStart = (e) => e.preventDefault();

const items= [
  <img className="item"  src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80" onDragStart={handleDragStart} role="presentation"  alt=""/>,

  <img className="item"  src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" onDragStart={handleDragStart} role="presentation" alt=""/>,

  <img className="item"  src='https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80' onDragStart={handleDragStart} role="presentation" alt="" />,
];




const Gallery = () => {
  return (
    <div className='Gallery'>
    <div className="gallery-heading">
          <h1>ALUMINI TESTIMONALS</h1>
    </div>
    
    <AliceCarousel 
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1500}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items} />
    </div>
  );
}

export default Gallery


