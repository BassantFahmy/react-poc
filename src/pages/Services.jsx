import React, { useState } from 'react'

const Services = () => {
    const [showNav, HandleNav] = useState(1);
    function UpdateNavVisibility(id) {
        HandleNav(id);

    }
    return (
        <div className='t-container'>
            <ul className='tabs'>
                <li>
                    <button className={showNav === 1 ? 'btn btn--rectangle btn--white t-bold tabs-active' : 'btn btn--rectangle btn--white t-bold'} onClick={() => UpdateNavVisibility(1)}>service 1</button>
                </li>
                <li>
                    <button className={showNav === 2 ? 'btn btn--rectangle btn--white t-bold tabs-active' : 'btn btn--rectangle btn--white t-bold'} onClick={() => UpdateNavVisibility(2)}>service 2</button>
                </li>
                <li>
                    <button className={showNav === 3 ? 'btn btn--rectangle btn--white t-bold tabs-active' : 'btn btn--rectangle btn--white t-bold'} onClick={() => UpdateNavVisibility(3)}>service 3</button>
                </li>
            </ul>
            <div className="t-text-center t-pt-m">
                <p className={showNav === 1 ? 't-show' : 't-hide'}>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p className={showNav === 2 ? 't-show' : 't-hide'}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <p className={showNav === 3 ? 't-show' : 't-hide'}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
        </div>
    )
}

export default Services
