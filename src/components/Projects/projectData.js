import maverickThumb from "../../Assets/Projects/maverick-thumb.jpg";
import maverick1 from "../../Assets/Projects/maverick1.jpg";
import maverick2 from "../../Assets/Projects/maverick2.jpg";
import maverick3 from "../../Assets/Projects/maverick3.jpg";
import villageThumb from "../../Assets/Projects/village-thumb.jpg";
import village1 from "../../Assets/Projects/village1.jpg";
import village2 from "../../Assets/Projects/village2.jpg";
import village4 from "../../Assets/Projects/village4.jpg";
import rankorbitThumb from "../../Assets/Projects/rankorbit-thumb.jpg";
import rankorbit1 from "../../Assets/Projects/rankorbit1.jpg";
import rankorbit2 from "../../Assets/Projects/rankorbit2.jpg";
import rankorbit3 from "../../Assets/Projects/rankorbit3.jpg";
import gymvisa from "../../Assets/Projects/gymvisa-thumb.jpg";
import quattaThumb from "../../Assets/Projects/quatta-thumb.jpg";
import quatta1 from "../../Assets/Projects/quatta1.jpg";
import quatta2 from "../../Assets/Projects/quatta2.jpg";
import classinsights from "../../Assets/Projects/classinsight.jpg";
import leptocheck from "../../Assets/Projects/leptocheck.jpg";
import dealhunterThumb from "../../Assets/Projects/dealhunter-thumb.jpg";
import instagram from "../../Assets/Projects/instagram.jpg";

const projects = [
  {
    id: "quatta",
    featured: true,
    title: "Quatta",
    role: "Fintech mobile app",
    imgPath: quattaThumb,
    gallery: [quattaThumb, quatta1, quatta2],
    summary:
      "A production fintech app with more than 6,000 users. It helps people understand their money and improve their financial health.",
    stack: ["React Native", "Expo", "Firebase", "AWS"],
    architecture: [
      "User accounts and a dashboard built for each person.",
      "Financial data and portfolio workflows.",
      "A Money Health Score calculated from the user's own data.",
      "Investment and transaction features.",
      "Real-time financial data, with access limited to that user.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/quatta/id6755897717",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.quatta.app",
      },
    ],
  },
  {
    id: "maverick",
    featured: true,
    title: "Maverick Motors",
    role: "Platform & AI Chatbots",
    imgPath: maverickThumb,
    gallery: [maverickThumb, maverick1, maverick2, maverick3],
    summary:
      "Automotive marketplace where people buy and sell vehicles, with AI agents that answer from real inventory and dealer data.",
    stack: ["Next.js", "Node.js", "Supabase", "AWS"],
    architecture: [
      "Buyer, seller, and admin workflows with role-based access.",
      "Vehicle listings and search backed by PostgreSQL / Supabase.",
      "Intent router sends each chat to a Buy, Sell, or Finance agent, using live inventory.",
      "Dealer and finance integrations: Tekion, RouteOne, Carfax, and JD Power.",
      "Production runs on AWS.",
    ],
    links: [
      { label: "Live site", href: "https://maverickmotors.us" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/EXCSRr583ADq7o9IPaqK8V/Maverick-Motors-2.0-BUY-SELL-FINANCE?node-id=36704-22921",
      },
    ],
  },
  {
    id: "villagerithm",
    featured: true,
    title: "Villagerithm",
    role: "Web & Mobile",
    imgPath: villageThumb,
    gallery: [villageThumb, village1, village2, village4],
    summary:
      "Family and community platform. People keep profiles, find activities, and pay for a subscription. Events can come in from Eventbrite.",
    stack: ["React", "React Native", "Expo", "Supabase"],
    architecture: [
      "User, family, and child profiles in one data model.",
      "Community feeds plus activity discovery and recommendations.",
      "Personalized activity vision board.",
      "Stripe for subscriptions. Eventbrite for outside events.",
      "Same product on the web and on Android.",
    ],
    links: [
      { label: "Live site", href: "https://villagerithm.com" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.villagerithm.app",
      },
    ],
  },
  {
    id: "rankorbit",
    featured: true,
    title: "RankOrbit.ai",
    role: "Platform & AI Voice Agents",
    imgPath: rankorbitThumb,
    gallery: [rankorbitThumb, rankorbit1, rankorbit2, rankorbit3],
    summary:
      "AI voice agents for phone calls and websites. Businesses use them to answer questions, book appointments, and qualify leads.",
    stack: ["Next.js", "NestJS", "MongoDB", "Node.js"],
    architecture: [
      "Inbound and outbound call agents, plus a website agent.",
      "Natural language handling for questions, bookings, and lead qualification.",
      "Live call analytics so a team can see what the agents did.",
      "CRM hookup and an admin panel for campaigns.",
    ],
    links: [{ label: "Live site", href: "https://rankorbit.ai" }],
  },
  {
    id: "gymvisa",
    featured: false,
    title: "Gym Visa",
    role: "Mobile app",
    imgPath: gymvisa,
    gallery: [gymvisa],
    summary:
      "One subscription that opens many gyms. Members pay in the app, watch offline workouts, and check in with a QR code.",
    stack: ["Flutter", "Dart", "Firebase", "Android"],
    architecture: [
      "Packages and in-app payments.",
      "QR check-in at partner gyms.",
      "Offline exercise videos and diet-plan requests.",
      "Admin panel for members, gyms, and subscriptions.",
    ],
    links: [
      {
        label: "Demo",
        href: "https://kf9ya4nsnhhhuv9b.public.blob.vercel-storage.com/gymVisaVideo-6S5B7Rvi1anAfqpgjptQhppvfK5uhG.mp4",
      },
    ],
  },
  {
    id: "classinsights",
    featured: false,
    title: "Class Insights",
    role: "Mobile app",
    imgPath: classinsights,
    gallery: [classinsights],
    summary:
      "School app for admins, teachers, students, and parents. It keeps records and messages in one place.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
    architecture: [
      "Separate roles for school staff, students, and parents.",
      "Day-to-day school records and communication.",
    ],
    links: [
      {
        label: "Demo",
        href: "https://kf9ya4nsnhhhuv9b.public.blob.vercel-storage.com/ClassInsightDemo-EnF09TXq2CJ9CBPPL57ZWxv77X2j6M.mp4",
      },
    ],
  },
  {
    id: "lepto",
    featured: false,
    title: "Leptospirosis Detection",
    role: "Mobile app",
    imgPath: leptocheck,
    gallery: [leptocheck],
    summary:
      "People enter symptoms. The app scores how likely leptospirosis is and shows what to do next.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
    architecture: [
      "Symptom input mapped to a risk score.",
      "Immediate result and next-step guidance.",
    ],
    links: [
      {
        label: "Demo",
        href: "https://kf9ya4nsnhhhuv9b.public.blob.vercel-storage.com/LeptoDemo-cmHeiKaobyWyWARPs29yi0xotUkKCr.mp4",
      },
    ],
  },
  {
    id: "dealhunter",
    featured: false,
    title: "Deal Hunter",
    role: "Finance app",
    imgPath: dealhunterThumb,
    gallery: [dealhunterThumb],
    summary:
      "A Flutter finance app for daily expenses, savings goals, and progress reports, with live deals pulled in from the web.",
    stack: ["Flutter", "Dart", "Python", "Django"],
    architecture: [
      "Secure accounts and smart budget alerts.",
      "Interactive reports for spending and savings progress.",
      "Python/Django backend and a data pipeline.",
      "Web scraping for real-time deals and discounts.",
    ],
    links: [
      {
        label: "Demo",
        href: "https://kf9ya4nsnhhhuv9b.public.blob.vercel-storage.com/munafaVideo-yOiogDLBZZNPbLAPRiPzgQo2MKVQYT.mp4",
      },
    ],
  },
  {
    id: "instagram",
    featured: false,
    title: "Instagram Clone",
    role: "Mobile app",
    imgPath: instagram,
    gallery: [instagram],
    summary:
      "A social app with posts, likes, comments, follow, and profiles, updated in real time.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
    architecture: [
      "Email and password sign-in.",
      "Posts, likes, comments, search, and follow.",
      "Profile pages for posts, followers, and following.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/IMUSARAZA/Instagram-Clone-Flutter",
      },
    ],
  },
];

export default projects;
