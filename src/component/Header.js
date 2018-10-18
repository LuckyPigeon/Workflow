import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className='Header'>
                <div className='ui logo' style={{display: 'flex'}}>
                    <a style={{flex: 'none'}}>
                        <img src={logo} alt='logo' className='ui imgae app-logo' onClick={onclick}/>
                    </a>
                </div>
            </header>
        );
    }
}