import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Frame = () => {
    return (
        <div className='frame'>
          <Carousel>
                <Carousel.Item>
                    <img
                    className="browse__carousel d-block w-100"
                    src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_SH_FastandFurious/2c00960a-b26e-4344-a17c-624bf7d112d1._UR3000,600_SX1500_FMwebp_.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="browse__carousel d-block w-100"
                    src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_WORE_Control/115317d6-2cf1-48bc-a2ee-ba638f5174a3._UR3000,600_SX1500_FMwebp_.jpeg" 
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="browse__carousel d-block w-100"
                    src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_WerewolvesWithin/b662f12d-c63f-4ac0-ab54-25b46339f12b._UR3000,600_SX1500_FMwebp_.jpeg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
      )
}

export default Frame;