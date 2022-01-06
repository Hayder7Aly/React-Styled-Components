import React from 'react'
import {FaTwitterSquare , FaFacebookF , FaLinkedin} from "react-icons/fa"
import { StyledSocialIcons } from './styled/SocialIcons.styled'

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li> <a href="https://twitter.com"><FaTwitterSquare /></a> </li>
            <li> <a href="https://facebook.com"><FaFacebookF /></a> </li>
            <li> <a href="https://linkedin.com"><FaLinkedin /></a> </li>
        </StyledSocialIcons>
    )
}

export default SocialIcons
