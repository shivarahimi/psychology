// base
import { ElementType } from "react";
// lib
import {
  BiDownload,
  BiInfoCircle,
  BiPhone,
  BiShare,
  BiShoppingBag,
} from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { HiHome } from "react-icons/hi2";
// core
import { headerMenuKeyEnum } from "@/core/enums/headerMenu-key.enum";

export interface IHeaderMenuList {
  key: headerMenuKeyEnum;
  title: string;
  href?: string;
  icon: ElementType;
  exact?: boolean;
  subMenu?: {
    title: string;
    icon: ElementType;
    href: string;
  }[];
}

export const headerMenuList: IHeaderMenuList[] = [
  {
    key: headerMenuKeyEnum.landing,
    title: "صفحه اصلی",
    href: `/`,
    icon: HiHome,
    exact: true,
  },
  {
    key: headerMenuKeyEnum.courses,
    title: "دوره های آموزشی",
    icon: BiShoppingBag,
    href: "/courses",
  },
  {
    key: headerMenuKeyEnum.blogs,
    title: "اخبار و مقالات",
    href: `/blogs`,
    icon: FiFileText,
  },
  {
    key: headerMenuKeyEnum.aboutUs,
    title: "درباره ما",
    href: `/about-us`,
    exact: true,
    icon: BiInfoCircle,
  },
  {
    key: headerMenuKeyEnum.contactUs,
    title: "ارتباط با ما",
    href: `/contact-us`,
    exact: true,
    icon: BiPhone,
  },
  {
    key: headerMenuKeyEnum.socialMedia,
    title: "شبکه های اجتماعی",
    icon: BiShare,
    subMenu: [
      {
        title: "اینستاگرام",
        icon: BsInstagram,
        href: "https://www.instagram.com/yourusername",
      },
      {
        title: "تلگرام",
        icon: BsTelegram,
        href: "https://t.me/yourusername",
      },
      {
        title: "فیسبوک",
        icon: BsFacebook,
        href: "https://www.facebook.com/yourusername",
      },
      {
        title: "توییتر",
        icon: BsTwitter,
        href: "https://twitter.com/yourusername",
      },
    ],
  },
  {
    key: headerMenuKeyEnum.contactUs,
    title: "دانلود اپلیکیشن",
    href: `/download-app`,
    // exact: true,
    icon: BiDownload,
  },
];
