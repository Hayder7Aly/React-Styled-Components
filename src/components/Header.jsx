import React from 'react'
import { StyledHeader, Nav, Logo } from './styled/Header.styled'
import { Container } from './styled/Container.styled'
import {Button} from "./styled/Button.styled"
import {Flex} from "./styled/Flex.styled"
import { Image } from './styled/Header.styled'

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Container>
                    <Nav>
                        <Logo src="./images/5.svg" alt=""/>
                        <Button>Try It Free</Button>
                    </Nav>
                    <Flex>
                        <div><h1>Build The Community Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <Button style={{marginTop: '20px'}} bg="#ff0099" color="#fff">Get Started For Free</Button>
                        </div>

                        <Image src="./images/3.svg" alt=""/>

                    </Flex>
                </Container>
            </StyledHeader>
        </>
    )
}

export default Header
