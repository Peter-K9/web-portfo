import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        return(
            <div className='Navbar'>
                <ul>
                    <a href='#top'><i class="fas fa-home fa-lg"></i></a>
                    <a href="https://github.com/CheffGeoff" target="_blank">
                       <i class="fab fa-github fa-lg"></i>
                    </a>
                    <i class="fas fa-envelope-square fa-lg"></i> 
                </ul>
            </div>
        );
    }
}
