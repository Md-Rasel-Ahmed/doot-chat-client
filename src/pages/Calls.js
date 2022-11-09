import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase_init";
function Calls() {
  const genarate = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "receptcha",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+9607326656";
    if (phoneNumber) {
      genarate();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleOTP = (e) => {
    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;
    const number = e.target.otp.value;
    signInWithPhoneNumber(auth, number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        // ...
      })
      .catch((error) => {
        // console.log(error.message);
        // Error; SMS not sent
        // ...
      });
  };
  return (
    <div>
      <h1>Calls</h1>
      <form onSubmit={handlePhoneSubmit}>
        <input className="input w-48 text-black" type="number" name="number" />
      </form>
      <form onSubmit={handleOTP}>
        <input
          className="input border w-48 text-black"
          type="number"
          name="otp"
        />
      </form>
      <div id="receptcha"></div>
    </div>
  );
}

export default Calls;
