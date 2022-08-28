import styles from "./topMain.module.css";

export const TopMain = () => {
  return (
    <>
      <div className={styles.fv}>
        <div className={styles.kvWrapper}>
          <div className={styles.copyWrapper}>
            <p className={styles.copyJp}>デザインで人を笑顔にする会社</p>
            <p className={styles.copyCompany}>DIGSMILE INC.</p>
            <p className={styles.mainCopy}>
              Design
              <br />
              for
              <br />
              smile.
            </p>
          </div>
        </div>
      </div>
      <section className="section-wrapper">
        <div className="content-wrapper about-bg">
          <div className="about-content">
            <h2 className="section-title">About us</h2>
            <p className="section-text lines">
              DIGSMILEは、デザインで人を笑顔にする会社。
              <br />
              なんでもない日常に少しのワクワクと遊び心を提供します。笑顔には世界を変える力がある、デザインには人を幸せにする力がある。毎日に幸せを感じて生きていきたい。
              <br />
              DIGSMILEの社名にはそんな想いが込められています。
            </p>
            <a href="./about/" className="link-btn">
              view more
            </a>
          </div>
        </div>
      </section>
      <div className="gray-bg l-section-wrapper">
        <div className="flex-box l-content-wrapper">
          <section className="s-section-wrapper">
            <div className="s-content-wrapper">
              <h2 className="section-title">Works</h2>
              <div className="section-img-wrapper">
                <img
                  src="../../../Images/works-img.jpg"
                  alt="黒と白の椅子や机が並んでいるテラスの写真"
                />
              </div>
              <p>DIGSMILEの制作実績を紹介します。</p>
              <a href="#!" className="link-btn">
                view more
              </a>
            </div>
          </section>
          <section className="s-section-wrapper">
            <div className="s-content-wrapper">
              <h2 className="section-title">Culture</h2>
              <div className="section-img-wrapper">
                <img
                  src="../../../Images/culture-img.jpg"
                  alt="夕焼けをバックに飛び跳ねる6人の人物のシルエット"
                />
              </div>
              <p>DIGSMILEの社内文化について紹介します。</p>
              <a href="#!" className="link-btn">
                view more
              </a>
            </div>
          </section>
        </div>
      </div>
      <section className="section-wrapper">
        <div className="content-wrapper">
          <h2 className="section-title">Latest topics</h2>
          <ul className="topics-list ml-auto">
            <li className="topics-item">
              <a href="#!">
                <time className="topics-date">2020.02.01</time>
                <h3 className="topics-title">
                  イベントレポート「VRクリエイター座談会 〜5Gの次に来るもの〜」
                </h3>
              </a>
            </li>
            <li className="topics-item">
              <a href="#!">
                <time className="topics-date">2020.01.18</time>
                <h3 className="topics-title">
                  プレスリリースのお知らせ DIGGIN’ RECORDS
                </h3>
              </a>
            </li>
            <li className="topics-item">
              <a href="#!">
                <time className="topics-date">2020.01.01</time>
                <h3 className="topics-title">
                  新年明けましておめでとうございます
                </h3>
              </a>
            </li>
          </ul>
          <a href="#!" className="link-btn ml-auto">
            view more
          </a>
        </div>
      </section>
      <section className="section-wrapper gray-bg">
        <div className="content-wrapper flex-box">
          <div className="contact-content">
            <h2 className="section-title">Contact</h2>
            <p className="contact-text lines">
              制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせはコンタクトページから承っております。
              <br />
              まずはお気軽にご連絡ください。担当者から改めて返信いたします。
            </p>
            <a href="./contact/" className="link-btn">
              view more
            </a>
          </div>
          <div className="contact-img-wrapper">
            <img src="../../../Images/contact-img.jpg" alt="屋外での集合写真" />
          </div>
        </div>
      </section>
    </>
  );
};
