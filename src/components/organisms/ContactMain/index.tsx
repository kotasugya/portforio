import styles from "./contactMain.module.css";

export const ContactMain = () => {
  return (
    <>
      <div className={styles.fv}>
        <div className={styles.kvWrapper}>
          <h1 className={styles.pageTitle}>
            Contact
            <span>お問い合わせ</span>
          </h1>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInner}>
          <p className={`${styles.contactLead} ${styles.lines}`}>
            ご依頼やご相談についてのご質問やご要望がございましたら、下記フォームよりお気軽にお問い合わせください。送付いただいた内容を確認の上、担当者からご連絡させていただきます。
          </p>
          <form action="">
            <ul className={styles.formList}>
              <li className={styles.formItem}>
                <div className={styles.formItemTitle}>
                  お問い合わせ種別
                  <span className={styles.required}>必須</span>
                </div>
                <ul className={styles.inquiryTypeList}>
                  <li className={styles.inquiryTypeItem}>
                    <input
                      type="radio"
                      className="radioBtn"
                      name="inquiryType"
                      id="request"
                      checked
                    />
                    <label htmlFor="request">制作依頼</label>
                  </li>
                  <li className={styles.inquiryTypeItem}>
                    <input
                      type="radio"
                      className="radioBtn"
                      name="inquiryType"
                      id="recruit"
                    />
                    <label htmlFor="recruit">採用</label>
                  </li>
                  <li className={styles.inquiryTypeItem}>
                    <input
                      type="radio"
                      className="radioBtn"
                      name="inquiryType"
                      id="ir"
                    />
                    <label htmlFor="ir">IR</label>
                  </li>
                  <li className={styles.inquiryTypeItem}>
                    <input
                      type="radio"
                      className="radioBtn"
                      name="inquiryType"
                      id="other"
                    />
                    <label htmlFor="other">その他</label>
                  </li>
                </ul>
              </li>
              <li className={styles.formItem}>
                <div className={styles.formItemTitle}>
                  <label htmlFor="companyName">会社名・団体名</label>
                </div>
                <input type="text" className="textBox" id="companyName" />
              </li>
              <li className={styles.formItem}>
                <div className={styles.formItemTitle}>
                  <label htmlFor="name">お名前</label>
                  <span className="required">必須</span>
                </div>
                <input type="text" className="textBox" id="name" />
              </li>
              <li className={styles.formItem}>
                <div className={styles.formItemTitle}>
                  <label htmlFor="email">メールアドレス</label>
                  <span className="required">必須</span>
                </div>
                <input type="text" className="textBox" id="email" />
              </li>
              <li className={styles.formItem}>
                <div className={styles.formItemTitle}>
                  <label htmlFor="tel">電話番号</label>
                </div>
                <input type="text" className="textBox" id="tel" />
              </li>
              <li className={styles.formItem}>
                <div className={styles.formItemTitle}>
                  <label htmlFor="detail">お問い合わせ内容</label>
                  <span className="required">必須</span>
                </div>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="textarea"
                ></textarea>
              </li>
            </ul>
            <p className={styles.privacyPolicyTitle}>Privacy policy</p>
            <div className={styles.privacyPolicyWrapper}>
              <p className={styles.privacyPolicyDetail}>
                {`個人情報保護方針
              株式会社DIGSMILE（以下、当社）では、個人情報の重要性を認識し、以下の基準に従って、適切な管理、保護に努めます。

              1.個人情報の収集、利用
              当社では、お客様との取引、サービスの提供のために個人情報を適法に収集し、収集した目的の範囲内で、個人情報を利用いたします。

              2.個人情報の第三者への開示と提供
              収集したお客様の個人情報は、法的な要請等によらない限り、お客様の承諾を得ない第三者に対して提供・開示はいたしません。
              業務の都合上、業務委託先に個人情報を提供する場合は、機密保持契約等によって業務委託先に個人情報保護を義務付けるとともに、業務委託先が適切に個人情報を取り扱うように管理いたします。

              3.個人情報の保護
              当社では、個人情報の紛失、破壊、改ざん、不正アクセス、および漏えい等を防止するため、適切な対策を行います。

              4.法令および関連規範の遵守
              当社は、個人情報の取り扱いに関して、個人情報保護法をはじめとする個人情報に関する法令および関連する規範を遵守します。

              5.個人情報の開示・訂正・削除
              当社では、個人情報の開示・訂正・削除等の依頼があった場合、情報提供者本人であることを確認の上、すみやかに対応いたします。

              法令や当社方針により、プライバシー・ポリシーを予告なく改訂することがあります。

              お問い合わせ窓口
              当社の個人情報の取扱いに関するお問い合わせは下記までご連絡お願いいたします。
              株式会社ファイアープレイス
              044-589-4333
              `}
              </p>
            </div>
            <p className={styles.confirm}>
              <input type="checkbox" className="checkbox" id="check" />
              <label htmlFor="check">
                個人情報の取り扱いについて同意のうえ送信します。
              </label>
            </p>
            <div className={styles.btnWrapper}>
              <input
                type="submit"
                value="送信する"
                className={styles.submitBtn}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
