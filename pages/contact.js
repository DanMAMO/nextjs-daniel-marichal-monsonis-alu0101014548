import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className="container">
            <h1 className="heading">Contact Us</h1>
            <p>Feel free to reach out to us. We probably won't respond, but hey, give it a shot!</p>
            <form>
                <input type="text" className="input" placeholder="Name" />
                <input type="email" className="input" placeholder="Email" />
                <textarea className="input" placeholder="Message"></textarea>
                <button className="button">Send</button>
            </form>
            <nav>
                <Link href="/">Go to Index</Link>

            </nav>
            <nav>

                <Link href="/about">Go to About</Link>
            </nav>
        </div>
        
    );
};

export default ContactPage;
