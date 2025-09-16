// Keep icons at the top
import { Home, Star, Rocket, HelpCircle, BookOpen } from "lucide-react";

export const templateName = "Dream Duas";

export const templateSeo = {
  title: "Mobile App Landing Template",
  description: "Mobile App Landing Template",
};

export const templateTheme = {
  theme: "light",
  forceTheme: false,
  showThemeSwitch: true,
  backgroundGrid: false,
};

export const templateLogo = "/logo.svg";

export const appStoreLink = "https://apps.apple.com/us/app/google/id284815942";
export const googlePlayLink = "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox";

export const header = {
  cta: "Join The Waitlist",
  headline: "Your all-in-one travel app",
  subtitle: "Join a growing ummah of students and mentors united by the light of Islamic knowledge.",
  screenshots: ["/screenshots/homepage-screenshot-img.webp"],
  rewards: ["إن شاءالله"],
  usersDescription: "2,000+ people already in the waiting list",
  headlineMark: [2, 5],
};

export const footer = {
  legalLinks: {
    privacyPolicy: true,
  },
  poweredBy: {
    title: "The Travels Of Zee",
    link: "https://thetravelsofzee.com/",
  },
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  links: [
    { href: "/#features", title: "Features" },
    { href: "/#how-it-works", title: "How it works" },
    { href: "/#faq", title: "FAQ" },
    { href: "/#contact-us", title: "Contact Us" },
  ],
};

export const topNavbar = {
  cta: "Join for Free",
  disableWidthAnimation: false,
  hideAppStore: false,
  hideGooglePlay: false,
  links: [
    { href: "/", title: "Home", icon: Home },
    { href: "#features", title: "Features", icon: Star },
    { href: "#how-it-works", title: "How it works", icon: Rocket },
    { href: "#faq", title: "FAQ", icon: HelpCircle },
  ],
};

export const appBanner = {
  id: "app-banner",
  title: "Download On The First Day Of Launch!",
  subtitle:
    "Discover halal-friendly travel like never before, all at your reach. Find nearby halal food, prayer spaces, and more, anytime, anywhere. Download Dream Duas and travel with peace of mind.",
  screenshots: ["/screenshots/appbanner-home-screen.webp", "/screenshots/appbanner-guidance-screen.webp"],
};

export const features = {
  id: "features",
  title: "Your travel should be effortless.",
  subtitle:
    "Dream Duas is more than just a travel app, it's a trusted companion for every Muslim traveler. From finding halal food to locating nearby prayer spaces, Dream Duas brings peace of mind wherever your journey takes you.",
  cards: [
    {
      title: "Halal Food Locator",
      subtitle:
        "Easily discover halal certified restaurants, cafes, and eateries around you, whether you're in your hometown or exploring a new country.",
      icon: "/videos/compass.webm",
    },
    {
      title: "Nearby Prayer Spaces",
      subtitle:
        "Never miss a prayer again. Dream Duas helps you find mosques and clean, accessible prayer areas based on your current location.",
      icon: "/videos/prayer-mat.webm",
    },
    {
      title: "Inclusive for All",
      subtitle:
        "Whether you're Muslim or simply curious about halal options, Dream Duas offers value for everyone who respects diverse lifestyles.",
      icon: "/videos/passenger-running.webm",
    },
  ],
};

export const howItWorks = {
  id: "how-it-works",
  title: "How Dream Duas Works",
  subtitle:
    "Set meaningful goals, share your journey, and inspire others — all while staying motivated and accountable in a supportive community.",
  steps: [
    {
      title: "Set Your Goal",
      subtitle:
        "Define what matters most to you — fitness, learning a skill, completing a creative project, or transforming your lifestyle.",
      image: "/screenshots/set-goal.webp",
    },
    {
      title: "Create Your Plan",
      subtitle:
        "Break your goal into milestones, add timelines, and commit to your journey with clarity and intention.",
      image: "/screenshots/create-plan.webp",
    },
    {
      title: "Track Your Progress",
      subtitle:
        "Update your journey with progress posts, photos, and reflections. Celebrate small wins that lead to big achievements.",
      image: "/screenshots/track-progress.webp",
    },
    {
      title: "Stay Motivated",
      subtitle:
        "See how others are achieving their goals, get encouragement from the community, and let their stories inspire yours.",
      image: "/screenshots/stay-motivated.webp",
    },
    {
      title: "Inspire & Support Others",
      subtitle:
        "Share your experiences, celebrate milestones together, and empower others to take action with your journey.",
      image: "/screenshots/inspire-others.webp",
    },
    {
      title: "Grow With the Ummah",
      subtitle:
        "Your goals go beyond yourself — they build collective strength, positivity, and barakah when shared with the community.",
      image: "/screenshots/community-growth.webp",
    },
  ],
};

export const faq = {
  id: "faq",
  title: "Frequently Asked Questions",
  qa: [
    {
      question: "What is Dream Duas?",
      answer:
        "Dream Duas is a community-driven platform where you can set goals, share your journey, and celebrate achievements together. It’s designed to keep you motivated, accountable, and inspired by others.",
    },
    {
      question: "Is Dream Duas only for fitness goals?",
      answer:
        "Not at all! While many people use Dream Duas for fitness, you can track and share any personal milestone — from learning new skills to completing creative projects or lifestyle transformations.",
    },
    {
      question: "How does Dream Duas keep me motivated?",
      answer:
        "By letting you set clear goals, commit to timelines, and share progress updates with the community. Every milestone is celebrated, and seeing others succeed will fuel your own motivation.",
    },
    {
      question: "Can I inspire others with my journey?",
      answer:
        "Yes! Sharing your goals and achievements not only holds you accountable but also encourages others to take action. Every story on Dream Duas has the power to inspire.",
    },
    {
      question: "Does Dream Duas cost anything?",
      answer:
        "Dream Duas is free to start. We plan to introduce premium features like personalized coaching and advanced analytics in the future, but the core goal-sharing experience will always remain accessible.",
    },
    {
      question: "Is my progress and data private?",
      answer:
        "Absolutely. You’re in control of what you share. Sensitive data is never exposed without your permission, and you can choose to keep certain goals private or only visible to close friends.",
    },
  ],
};

export const privacyPolicy = {
  seo: {
    title: "Privacy Policy - Dream Duas",
    description: "Privacy Policy",
  },
  content: `# Privacy Policy

**Last Updated:** 21/5/2025

## Introduction

Welcome to Dream Duas. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, We may collect identifiers such as your name, email address, and any other information you provide when creating an account.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## Legal Basis

We process your personal information based on your consent, to fulfill our contractual obligations, and where we have a legitimate interest.

## Children’s Privacy

Our App is not intended for use by children under the age of 13 (or 16 in the EU). We do not knowingly collect personal information from children.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at [Your Contact Information].
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

Dream Duas

📧 [info@thetravelsofzee.com](mailto:info@thetravelsofzee.com)  
🕌 With sincerity and responsibility,  
**Team Dream Duas**

`,
};

export const blogs = [
  {
    id: 1,
    title: "Boost Your Productivity with These Tools",
    slug: "productivity-tools",
    excerpt: "Discover top tools to streamline your workflow and save time.",
    thumbnail: "/blogs/productivity-tools.jpg",
  },
  {
    id: 2,
    title: "How to Scale Your App in 2025",
    slug: "scale-your-app",
    excerpt: "A step-by-step guide on scaling infrastructure for modern apps.",
    thumbnail: "/blogs/scale-app.jpg",
  },
  {
    id: 3,
    title: "Design Systems that Scale",
    slug: "design-systems",
    excerpt: "Learn how to build a consistent and reusable design system.",
    thumbnail: "/blogs/design-systems.jpg",
  },
];
