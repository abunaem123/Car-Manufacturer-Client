import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='px-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 my-8'>
                <div>
                    <img className='rounded-md drop-shadow-lg' src="https://i.ibb.co/NKjc0cB/pexels-fauxels-3184429.png" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl py-2 text-primary font-bold'>Business Deal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad, adipisci eos error nihil laborum ratione tempore corrupti quaerat dolore earum aspernatur blanditiis omnis asperiores nulla temporibus est reiciendis vel esse molestias magni. Qui provident dolore porro in sit voluptatibus, molestiae tempora accusamus eius itaque consectetur? Assumenda ad aliquam id quia earum nemo illum possimus inventore a quidem tenetur quibusdam expedita provident facere rem magnam culpa, quasi vitae voluptates labore iure quis? Maxime aperiam, explicabo distinctio saepe non incidunt animi? Natus libero consequatur deserunt, modi eos earum quaerat fugit possimus impedit quia officiis, tempora similique saepe inventore quibusdam, qui ut!</p>
                    <button className="btn bg-primary border-0 text-white font-bold px-4 my-4">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;