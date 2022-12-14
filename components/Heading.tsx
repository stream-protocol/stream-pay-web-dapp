import Image from "next/image";
import logo from "../public/logo.png";
import Wallet from "./Wallet";
import styles from "./Wallet.module.scss";
import cx from "classnames";

import React, { useEffect } from "react";
import Link from "next/link";

type IHeaderProps = {};

const defaultProps = {};

const Header: React.FC<IHeaderProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between p-7 z-10">
      <Link href={"/"}>
        <div>
          <Image
            alt="stream-pay"
            src={logo}
            width={190}
            height={50}
            className={cx(styles.image)}
          />
          <p
            className={cx(
              styles.image,
              "font-base text-xs text-white mt-2 ml-1 opacity-60"
            )}
          >
            Web3 Payments Made Simple
          </p>
        </div>
      </Link>

      <div className="md:block">
        <Wallet />
      </div>
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
