import React from 'react';
import './styles.css'

const Navbar = ({ onGetUsers }) => {
    return (


        <nav class="nav">
            <div class="container nav__container">
                <a class="logo" href="/">
                    <img src='https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png' />
                </a>
                <ul class=" nav__links hide__nav">
                    <a className='user-btn' onClick={onGetUsers}>Get Users</a>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
