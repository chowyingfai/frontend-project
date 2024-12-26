import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function AdvertiseBanner() {
    return (
        <div className={"d-flex justify-content-center align-items-center"} >
        <Carousel fade>
            <Carousel.Item>
                <img src={"https://images.fineartamerica.com/images/artworkimages/mediu" +
                    "mlarge/1/four-happy-cats-website-banner-susan-schmitz.jpg"}/>

                <Carousel.Caption>
                    {/*<h3>First slide label</h3>*/}
                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        //     <Carousel.Item>
        //         <ExampleCarouselImage text="Second slide" />
        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //
        //     <Carousel.Item>
        //         <ExampleCarouselImage text="Third slide" />
        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
    );
}

