import React from 'react';
import './styles/Badge.css';
import './styles/Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
                <p class="footer-top">¿Preguntas? Llama al <a href="tel:800-345-1375"> 800-345-1375</a>
                </p>
                <ul class="footer-links">
                    <li>
                        <a href="https://help.netflix.com/support/412" >
                            <span>Preguntas frecuentes</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com">
                            <span>Centro de ayuda</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.netflix.com/jobs" >
                            <span>Empleo</span>
                        </a>
                    </li>
                </ul>
                <ul class="footer-links">
                    <li>
                        <a href="/watch" >
                            <span >Formas de ver</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/legal/termsofuse" >
                            <span>Términos de uso</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/legal/privacy" >
                            <span>Privacidad</span>
                        </a>
                    </li>
                </ul>
                <ul class="footer-links">
                    <li>
                        <a href="https://help.netflix.com/legal/privacy#cookies">
                            <span>Preferencias de cookies</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/es/node/2101" >
                            <span>Información corporativa</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/contactus" >
                            <span>Contáctanos</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;