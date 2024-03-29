import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import {
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
  InstagramIcon,
  GithubIcon,
  DiscordIcon,
  MediumIcon,
  YoutubeIcon,
} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.zodiacswap.xyz/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "Community",
        href: "https://docs.zodiacswap.xyz/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.zodiacswap.xyz/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.zodiacswap.xyz/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.zodiacswap.xyz/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.zodiacswap.xyz/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.zodiacswap.xyz",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.zodiacswap.xyz/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.zodiacswap.xyz/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/zodiacswap",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/zodiacswap",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/zodiacswap",
  },

];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
