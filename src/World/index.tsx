import React from "react";
import styles from "./style.scss";

interface Props {
  name: string;
}

const World = (props: Props) => {
  const { name } = props;

  const a: any = {};
  console.log("hahaha...", a?.b);
  return (
    <>
      <div className={styles.box}>{`World, ${name}`}</div>
    </>
  );
};

export default World;
