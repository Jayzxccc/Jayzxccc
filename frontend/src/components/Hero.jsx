import React from 'react'
import Hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className="flex justify-center flex-wrap">
        <div className="max-w-lg text-center">
            <div className="flex-row">
                <h1 className="text=2x1 font-bold mb-4">Sit and shop, we got you!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam maxime laborum commodi, nam asperiores temporibus facere earum. Ad impedit autem tenetur odio asperiores. Nemo accusantium dolorem deserunt dignissimos ratione explicabo.</p>
                <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">Order Now</button>
            </div>
        </div>

        <div>
            <img src={Hero_image} alt="hero_img" className="w-full max-w-md object-cover" />
        </div>
    </div>
  );
};

export default Hero
