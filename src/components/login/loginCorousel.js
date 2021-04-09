import React, { useState } from 'react';
import {
  Carousel,CarouselItem,CarouselControl,CarouselIndicators} from 'reactstrap';

const items = [
  {
    src : "https://images.shiksha.com/mediadata/images/1488191373php5kGBoN.jpeg",
    altText : "Slide 1"
  },
  {
    src : "https://getmyuni.azureedge.net/college-image/big/punjab-engineering-college-university-of-technology-pec-chandigarh.jpg",
    altText: 'Slide 2',
  },
  {
    src : "https://www.marketingmind.in/wp-content/uploads/2019/06/yes-700x367.png",
    altText: 'Slide 3',
  },

];

const LoginCorousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
      <div className="LoginCorousel">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className = "LoginCorousel"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default LoginCorousel;