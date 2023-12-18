import Button from "@/components/atoms/Button";
import { Error, Mail, Tel } from "@/components/atoms/Icons";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

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
