"use client";

// base
import { FC, useState } from "react";
// lib
import { BiMenu } from "react-icons/bi";
import { CiSquareChevDown, CiSquareChevLeft } from "react-icons/ci";
// core
import { headerMenuList } from "@/core/data/HeaderMenu/HeaderMenu.data";
import { headerMenuKeyEnum } from "@/core/enums/headerMenu-key.enum";

interface IPropType {}

const HeaderResponsive: FC<IPropType> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<headerMenuKeyEnum[]>([]);

  const toggleSubmenu = (key: headerMenuKeyEnum) => {
    setOpenSubMenu((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };
  return (
    <section>
      <BiMenu
        className="cursor-pointer"
        size={30}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <section className="fixed top-24 right-4 mx-auto w-[90%]">
          <ul className="p-4 w-[90%] cursor-pointer">
            {headerMenuList.map((item) => (
              <>
                <li
                  key={item.key}
                  className="flex items-center justify-between py-2"
                  onClick={() => toggleSubmenu(item.key)}
                >
                  {/* واسه اینکه از آیکونم که تو دیتا تعریف کردم ارور تایپ نگیره */}
                  <div className="flex items-center gap-2">
                    <item.icon />
                    {item.title}
                  </div>
                  {item.subMenu && (
                    <>
                      {openSubMenu.includes(item.key) ? (
                        <CiSquareChevDown size={20} />
                      ) : (
                        <CiSquareChevLeft size={20} />
                      )}
                    </>
                  )}
                </li>
                <section>
                  {openSubMenu.includes(item.key) && (
                    <ul className="px-5 text-gray-700">
                      {item.subMenu?.map((subItem) => (
                        <li
                          className="flex items-center gap-2 py-1"
                          onClick={() => toggleSubmenu(item.key)}
                        >
                          <subItem.icon />
                          {subItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export { HeaderResponsive };
