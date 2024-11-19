import '../assets/styles/ContactForm.scss';
import Swal from 'sweetalert2';

const ContactForm = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        formData.append("access_key", "dcd734cd-b9c9-483c-9388-ec32bf5407e5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Poszło!",
                text: "Twoja wiadomość została wysłana!",
                icon: "success"
            }).then(() => {
                e.target.reset();
            });
        }
    };

    return (
        <section className="contactForm">
          <form onSubmit={onSubmit}>
            <h2>napisz do nas</h2>
            <div className="input-box">
              <label>twoje imię</label>
              <input type="text" placeholder="wpisz imię" name='name' required/>
            </div>
            <div className="input-box">
              <label>twój e-mail adres</label>
              <input type="email" placeholder="wpisz swój e-mail adres" name='email' required/>
            </div>
            <div className="input-box">
              <label>twoja wiadomość</label>
              <textarea type="text" name="message" placeholder='wpisz swoją wiadomość' required/>
            </div>
            <button type='submit'>wyślij wiadomość</button>
          </form>
        </section>
    );
};

export default ContactForm;
