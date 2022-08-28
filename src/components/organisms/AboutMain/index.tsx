import styles from "./aboutMain.module.css";

export const AboutMain = () => {
  return (
    <>
      <div className={styles.fv}>
        <div className={styles.kvWrapper}>
          <h1 className={styles.pageTitle}>
            About us
            <span>DIGSMILEについて</span>
          </h1>
        </div>
      </div>

      <section className={styles.sectionWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.visionWrapper}>
            <h2 className={styles.sectionTitle}>VISION</h2>
            <p className={styles.vision}>デザインで人を笑顔にする会社</p>
            <p className={`${styles.visionText} ${styles.lines}`}>
              {`私達のデザインで人が笑顔になる。

					そんなデザインを目指しています。
					
					私達が考える人を笑顔にできるデザインとは、
					デザインが課題を適切に解決ができているかどうか。
					
					ビジュアルだけではなく、
					本当に求められているものは何かを考え抜いて、
					デザインしていきたい。
					
					誰かの幸せを創ることも、
					世界の常識を変えていくことだってできる。
					
					私達はデザインの力を信じています。`}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionWrapper}>
        <div className={`${styles.contentWrapper} ${styles.relative}`}>
          <div className={`${styles.visionContent} ${styles.grayBg}`}>
            <div className={styles.visionContentInner}>
              <h2 className={styles.sectionTitle}>Ceo massage</h2>
              <p className={`${styles.ceoMessage} ${styles.lines}`}>
                {`良いデザインは人を幸せにする。

					私達はそう信じています。

					デザインを通して、ビジネスの課題とユーザーの課題を解決することで、世の中を幸せにしていきたい。

					現在はあらゆるプロダクトがデジタル化されており、デザイナーに対する需要はますます高まっています。それとともに、期待される役割も幅広くなりつつあります。

					クリエイティブで社会の可能性を切り開いていく。

					変化の激しい現代、私達はデザインの力で社会を良い方向に変革していく企業を目指していきます。
					
					`}
              </p>
            </div>
            <div className={styles.ceoImgWrapper}>
              <img src="../images/ceo-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionWrapper}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>Company</h2>
          <dl className={styles.companyInfoList}>
            <div>
              <dt className={styles.companyInfoTitle}>社名</dt>
              <dd className={styles.companyInfoDetail}>株式会社DIGSMILE</dd>
            </div>
            <div>
              <dt className={styles.companyInfoTitle}>代表取締役</dt>
              <dd className={styles.companyInfoDetail}>テイラー・スウィフト</dd>
            </div>
            <div>
              <dt className={styles.companyInfoTitle}>設立</dt>
              <dd className={styles.companyInfoDetail}>2020年１月1日</dd>
            </div>
            <div>
              <dt className={styles.companyInfoTitle}>資本金</dt>
              <dd className={styles.companyInfoDetail}>1億円</dd>
            </div>
            <div>
              <dt className={styles.companyInfoTitle}>所在地</dt>
              <dd className={styles.companyInfoDetail}>東京都新宿区☓☓0-0-0</dd>
            </div>
            <div>
              <dt className={styles.companyInfoTitle}>電話番号</dt>
              <dd className={styles.companyInfoDetail}>03-0000-0000</dd>
            </div>
          </dl>
          <div className={styles.mapsOuter}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51840.012959975305!2d139.6741808742957!3d35.70159767986079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1579314444156!5m2!1sja!2sjp"
              width="600"
              height="450"
              frameBorder="0"
              // style="border:0;"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
