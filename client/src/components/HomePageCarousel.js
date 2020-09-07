import React from 'react';
import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCarouselCaption } from 'mdbreact';
import styles from '../css-modules/HomePageCarousel.module.css';

const HomePageCarousel = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className={styles.carouselContainer + " z-depth-1"}
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className={styles.carouselImg + " d-block w-100"}
                                src="/images/carousel1.png"
                                alt="First slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 className={styles.cardHeader}>Create flows and add notes to them</h1>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className={styles.carouselImg + ' d-block w-100'}
                                src="/images/carousel2.png"
                                alt="Second slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 className={styles.cardHeader}>Browse flows by your favorite category</h1>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className={styles.carouselImg + " d-block w-100"}
                                src="/images/carousel3.png"
                                alt="Third slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                        <h1 className={styles.cardHeader}>View flows from other users</h1>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    )
}

export default HomePageCarousel;