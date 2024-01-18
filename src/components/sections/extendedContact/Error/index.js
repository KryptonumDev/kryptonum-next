import Button from "@/components/atoms/Button";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";
import { Error } from "@/components/atoms/Icons";

const ErrorSend = ({ resend }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textPart}>
        <h2>
          <Error /> Jakiś serwer ma czkawkę
        </h2>
        <Markdown>
          Już go **namierzamy**, a Ciebie prosimy: wyślij formularz jeszcze raz lub spróbuj za jakiś czas
        </Markdown>
        <Button onClick={resend} theme="primary">
          Spróbuj ponownie
        </Button>
        <Markdown>Problem się **powtarza**? Skontaktuj się z nami telefonicznie lub mailowo</Markdown>
        <div className={styles.flex}>
          <div>
            <Tel /> <span>+48 793 272 020</span>
          </div>
          <div>
            <Mail /> <span>michal@kryptonum.eu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSend;

const Tel = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g>
      <path
        stroke="#EFF0F3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.093 11.987v2a1.332 1.332 0 01-1.454 1.334 13.193 13.193 0 01-5.753-2.047 13 13 0 01-4-4 13.193 13.193 0 01-2.047-5.78A1.333 1.333 0 013.166 2.04h2A1.333 1.333 0 016.5 3.187a8.56 8.56 0 00.467 1.874 1.333 1.333 0 01-.3 1.406l-.847.847a10.666 10.666 0 004 4l.847-.847a1.333 1.333 0 011.407-.3 8.56 8.56 0 001.873.467 1.333 1.333 0 011.147 1.353z"
      ></path>
    </g>
  </svg>
);

const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g>
      <path
        stroke="#EFF0F3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.093 4.707c0-.733-.6-1.333-1.333-1.333H3.093c-.733 0-1.333.6-1.333 1.333m13.333 0v8c0 .733-.6 1.333-1.333 1.333H3.093c-.733 0-1.333-.6-1.333-1.333v-8m13.333 0L8.426 9.374 1.76 4.707"
      ></path>
    </g>
  </svg>
);