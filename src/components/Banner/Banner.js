/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Banner = () => {
    return (
        <>

            <div class="carousel rounded-box carousel-end">
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/500/256/144" />
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/501/256/144" />
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/502/256/144" />
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/503/256/144" />
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/504/256/144" />
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/505/256/144" />
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/id/506/256/144" />
                </div>
            </div>

            <div class="w-full carousel">
                <div id="item1" class="w-full pt-20 carousel-item">
                    <img src="https://picsum.photos/id/500/800/300" class="w-full" />
                </div>
                <div id="item2" class="w-full pt-20 carousel-item">
                    <img src="https://picsum.photos/id/501/800/300" class="w-full" />
                </div>
                <div id="item3" class="w-full pt-20 carousel-item">
                    <img src="https://picsum.photos/id/502/800/300" class="w-full" />
                </div>
                <div id="item4" class="w-full pt-20 carousel-item">
                    <img src="https://picsum.photos/id/503/800/300" class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-4 space-x-2">
                <a href="/components/carousel#item1" class="btn btn-xs btn-circle">1</a>
                <a href="/components/carousel#item2" class="btn btn-xs btn-circle">2</a>
                <a href="/components/carousel#item3" class="btn btn-xs btn-circle">3</a>
                <a href="/components/carousel#item4" class="btn btn-xs btn-circle">4</a>
            </div>
        </>
    );
};

export default Banner;