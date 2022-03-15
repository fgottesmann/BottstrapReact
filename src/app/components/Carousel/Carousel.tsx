import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels(): JSX.Element {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/app/assets/iStock-1.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/app/assets/iStock-1.png"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/app/assets/iStock-184677248.png"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/app/assets/iStock-1.png"
          alt="Fourth slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/app/assets/iStock-1.png"
          alt="Fifth slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
