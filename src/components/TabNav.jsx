import React from 'react'
import './TabNav.css'

class TabNav extends React.Component {

    render () {
        return(
            <div className='tabnav-main-div'>
                <ul >
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active ' : '' );

                            return(
                                <li key={ tab }>
                                    <a className='tabnav-a' onClick={ () => this.props.setSelected(tab) } >
                                        { tab }
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                { this.props.children }
            </div>
        );
    }
}

export default TabNav;
