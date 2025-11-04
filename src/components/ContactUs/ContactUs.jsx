import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-box'>
            <h1>Send a message to us!</h1>
            <form>
                <input type="text" id="name" placeholder='Name' />
                <input type="email" id="email" placeholder='Email' />
                <input type="text" id="subject" placeholder='Subject' />
                <textarea id="message" placeholder='Message'></textarea>
                <input type="submit" value="Send Meassage" />
            </form>
        </div>
    )
}

export default ContactUs
