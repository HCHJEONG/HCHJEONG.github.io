import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://hchjeong.github.io/",
    title: "Heechan Jeong",
    description: "Notes on legal AI, privacy, and building responsible technology.",
    author: "Heechan Jeong",
    profile: "https://www.linkedin.com/in/heechan-jeong-218b2927/",
    ogImage: "og.png",
    lang: "en",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/HCHJEONG" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/heechan-jeong-218b2927/",
    },
    { name: "mail", url: "mailto:hchjeong@gmail.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
