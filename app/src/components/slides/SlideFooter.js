import React from 'react';
import styles from './SlideFooter.css';

class SlideFooter extends React.Component {
  render() {
    return (
        <div className={styles.slideFooter}>
            <div className={styles.languages}>
                <select name="languages" id="languages">
                    <option value="English" className={styles.english}>
                        English
                    </option>
                    <option value="German" className={styles.german}>
                        German
                    </option>
                </select>
            </div>
            <a href="/privacy">Privacy</a>
            <a href="/faq">FAQ</a>
            <a href="/support">Support</a>
        </div>
    );
  }
}

export default SlideFooter;