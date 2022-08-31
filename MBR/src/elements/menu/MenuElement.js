import React from "react";
import menuContent from "../../constants/menuContent";
import {useRouter} from "next/router";

const MenuElement = ({className, listItemClass, content}) => {
    const router = useRouter();
    const routerPath = router.asPath;

    console.log(content)

    return (
        <ul className={className}>
            {content.map((item) => (
                <li key={item.text}
                    className={routerPath === item.link ? listItemClass : undefined}
                >
                    <a href={item.link}>
                        {item.text["en"]}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default MenuElement;
