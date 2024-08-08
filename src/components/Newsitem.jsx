import React from 'react'

const Newsitem = (props) => {
    let { title, description, newsUrl, imageUrl,publisher,author,date } = props;
    return (
        <>
            <a href={newsUrl} target='_blank' title='Read More'>
                <div className='shadow-md w-80 rounded-t-lg hover:scale-[1.15] cursor-pointer duration-500'>
                    <div className='relative rounded-t-lg overflow-hidden h-44'>
                        <img className="" src={imageUrl ? imageUrl : '/src/assets/NoImageFound.jpg'} alt="image" />
                        <span className='text-white bg-red-600 px-2 rounded-lg top-0 right-0 absolute'>{publisher}</span>
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-bold'>{title}</h1>
                        <p className='py-3'>{description}</p>
                    </div>
                    <div className='px-3 pb-3'>
                    <small className="text-gray-500">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small>
                    </div>
                </div>
            </a>

        </>
    )
}

export default Newsitem
