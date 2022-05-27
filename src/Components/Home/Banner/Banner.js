import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen  bg-white" style={{backgroundImage: 'url(https://i.ibb.co/16WBv7D/pexels-lex-ger-4294075.png)'}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/16WBv7D/pexels-lex-ger-4294075.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pr-28'>
                        <h1 className="text-5xl font-bold text-white">Find The Riht Parts Faster</h1>
                        <p className="py-6 text-white">Parts to keep your motor running. Service that overcomes the competition.</p>
                        <button className="btn btn-primary font-bold text-white px-4 my-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;