import React from 'react';
import { Link } from 'gatsby';
import ClampLines from 'react-clamp-lines';


const Breadcrumb = ({ items } ) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full p-0">
                <li className="inline-flex items-center gap-0">
                    <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                        />
                    </svg>
                    <div className="inline-block">
                        <div className='inline-flex items-center text-sm font-medium text-stone-700'>
                            <ClampLines
                                text="Home"
                                id="breadcrumb-home"
                                lines={1}
                                ellipsis="..."
                                moreText=""
                                lessText=""
                            />
                        </div>
                    </div>
                </li>
             
                    <li  className="flex items-center">
                        <svg
                            className="rtl:rotate-180 w-3 h-3 text-stone-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                     
                            <Link
                        to={"/blogs/"}
                                className="block items-center text-sm font-medium text-stone-700 hover:text-yellow-400 dark:text-stone-400 dark:hover:text-white justify-center"
                            >
                                <ClampLines
                                className='block'
                                    text={"Blogs"}
                                    id={`breadcrumb`}
                                    lines={1}
                                    ellipsis="..."
                                    moreText=""
                                    lessText=""
                                />
                            </Link>
                       
                    </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="rtl:rotate-180 w-3 h-3 text-stone-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <Link to={item.link} className="block items-center text-sm font-medium text-stone-700 hover:text-yellow-400 dark:text-stone-400 dark:hover:text-white justify-center">
                            <ClampLines text={item.text} id={`breadcrumb-${index}`} lines={1} ellipsis="..." moreText="" lessText="" />
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
