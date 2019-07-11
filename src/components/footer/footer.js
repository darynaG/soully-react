import React from 'react'
import '../../css/footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faFacebookF,
    faInstagram,
    faTwitter
);
function Footer() {
    return (
        <footer class="footer">

            <div class="footer-content">
                <div>
            <a  href= "https://www.fb.me/soully.xyz" target="blank">
                <FontAwesomeIcon icon={faFacebookF} size="3x" className = "icon" />
</a>
                </div>
                <a href = "https://www.instagram.com/soully.xyz/?hl=ru" target="blank">
                <FontAwesomeIcon icon={faInstagram} size="3x" className = "icon"  />
                </a>
                < a href= "https://twitter.com/Soully43369957" target="blank">
                <FontAwesomeIcon icon={faTwitter} size="3x"  className = "icon" />
                </a>
            </div>
            <span class="footer-label">
                <h3 class="h3-label">Made by team Oscar. Bootcamp`19.</h3>
            </span>

        </footer>);
}
export default Footer;