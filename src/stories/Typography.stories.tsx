import React from "react";

import * as styles from "../styles";

export default {
  title: "Principles/Typography",
};

export const TextStyles = () => (
  <>
    <p className={styles.textHeading}>Heading</p>
    <p className={styles.textBody}>Body</p>
    <p className={styles.textPlaceholder}>Placeholder</p>
    <p className={styles.textLabel}>Label</p>
  </>
);
