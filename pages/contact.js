import Link from 'next/link';
import { useState } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulación de una solicitud asincrónica
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="container">
            <h1 className="heading">Contact Us</h1>
            <p>Feel free to reach out to us. We probably won't respond, but hey, give it a shot!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Name" />
                <input type="email" className="input" placeholder="Email" />
                <textarea className="input" placeholder="Message"></textarea>
                <button className="button" type="submit">Send</button>
            </form>
            <nav>
                <Link href="/">Go to Index</Link>
                <Link href="/about">Go to About</Link>
            </nav>

            <div className="loading-container">
                <RingLoader css={override} color="#123abc" loading={loading} size={50} />
            </div>
        </div>
    );
};

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default ContactPage;


