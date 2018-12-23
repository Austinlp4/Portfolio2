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
                    <h3>About Me</h3>
                    <p>
                        I'm currently located in Fayetteville,AR. I have a lovely wife, Sydney, and a beatiful daughter,
                         Cyan (2yrs old). I am an art enthusiast and practice frequently. I think that my eye for detail 
                         has made me a better developer, and developing has helped me find an entirely new medium. I constantly 
                         try to learn new languages and frameworks, as well as try out new stacks. There most certainly is just not 
                         enough time in a day. Currently pursuing knowledge related to UI/UX design, Vue.js, and MongoDB
                    </p>
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