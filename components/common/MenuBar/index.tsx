import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styles from "./styles.module.less";

type MenuContext = {
  name: string;
  linkTo: string;
  childMenuItems?: Array<MenuContext>;
};

interface Props {
  menuItems: Array<MenuContext>;
}

const MenuBar: React.FunctionComponent<Props> = ({ menuItems }) => {
  const router = useRouter();
  const menus = menuItems.map((item) => {
    return (
      <div className={`${styles.menuItem} ${styles.hidden}`}>
        <Link href={item.linkTo}>
          <span
            className={
              router.pathname === item.linkTo ? "text-blue-600" : "text-black"
            }
          >
            {item.name}
          </span>
        </Link>
        {item.childMenuItems && (
          <ul className="hidden">
            {item.childMenuItems.map((childItem) => (
              <li>
                <Link href={childItem.linkTo}>
                  <span
                    className={
                      router.pathname === item.linkTo
                        ? "text-blue-600"
                        : "text-black"
                    }
                  >
                    {childItem.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  });

  return <div className="flex bg-gray-500 flex-row justify-end">{menus}</div>;
};

export default MenuBar;
