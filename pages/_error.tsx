import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "../styles/css/error.module.css";

export default function Error({
  statusCode,
  message,
}: {
  statusCode: string;
  message: string;
}): ReactElement {
  const Router = useRouter();

  return (
    <div className={styles.page404Container}>
      {message ? (
        <>
          <p>{statusCode}</p>
          <span className={styles.page404MessageEn}>
            خطای {message} رخ داده است، لطفا مجددا تلاش کنید
          </span>
        </>
      ) : (
        <span className={styles.page404MessageEn}>
          خطایی رخ داده است، لطفا مجددا تلاش کنید
        </span>
      )}
      <div className={styles.page404Btn} onClick={() => Router.back()}>
        بازگشت به صفحه قبل
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
