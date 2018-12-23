import React from 'react';
import styled from 'styled-components';
import Avatar from '../../images/profilepic.jpg';

class About extends React.Component {
    render(){
        return (
            <div>
                <Banner>
                    <div>
                        <Profilepic src={Avatar} alt="Profile picture"/>
                    </div>
                </Banner>
            </div>
        );
    }
}

const Banner = styled.div`
  
`;

const Profilepic = styled.img`
    max-width: 500px;
    height: auto;
`;

export default About;