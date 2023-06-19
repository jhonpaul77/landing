/*===================

==== AppCreative2 dummy data list ====

- Navbar
- Banner
- Why Choose Us
- Analytics Tool
- Ever Need
- Testimonial
- Wallet Experience
- Technology Community
- Pricing
- FAQ's
- CTA
- Footer Top
- Footer

====================*/

import appleStore from 'common/assets/image/appCreativeTwo/apple-store.png';
import googlePlay from 'common/assets/image/appCreativeTwo/google-play.png';
import icon1 from 'common/assets/image/appCreativeTwo/icons/1.png';
import icon2 from 'common/assets/image/appCreativeTwo/icons/2.png';
import icon3 from 'common/assets/image/appCreativeTwo/icons/3.png';
import icon4 from 'common/assets/image/appCreativeTwo/icons/4.png';
import walletIcon1 from 'common/assets/image/appCreativeTwo/icons/5.png';
import walletIcon2 from 'common/assets/image/appCreativeTwo/icons/6.png';
import cards from 'common/assets/image/appCreativeTwo/icons/cards.png';
import doc from 'common/assets/image/appCreativeTwo/icons/doc.png';
import grid from 'common/assets/image/appCreativeTwo/icons/grid.png';
import layout from 'common/assets/image/appCreativeTwo/icons/layout.png';
import loop from 'common/assets/image/appCreativeTwo/icons/loop.png';
import shape from 'common/assets/image/appCreativeTwo/icons/shape.png';
import sidebar from 'common/assets/image/appCreativeTwo/icons/sidebar.png';
import smartphone from 'common/assets/image/appCreativeTwo/icons/smartphone.png';
import technologyImage from 'common/assets/image/appCreativeTwo/technology.png';
import { default as testimonial2 } from 'common/assets/image/appCreativeTwo/testimonial/client-2.png';
import { default as testimonial1 } from 'common/assets/image/appCreativeTwo/testimonial/client.png';
import { default as testimonial2Logo } from 'common/assets/image/appCreativeTwo/testimonial/logo-2.png';
import { default as testimonial1Logo } from 'common/assets/image/appCreativeTwo/testimonial/logo.png';
import walletImage from 'common/assets/image/appCreativeTwo/wallet-experience.png';
import dribbble from 'common/assets/image/webAppCreative/icons/dribbble.png';
import facebook from 'common/assets/image/webAppCreative/icons/facebook.png';
import twitter from 'common/assets/image/webAppCreative/icons/twitter.png';
import siteLogo from 'common/assets/image/webAppCreative/logo.png';


/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
    id: 1,
  },
  {
    label: 'Produk',
    path: '#about',
    offset: '70',
    id: 2,
  },
  {
    label: 'Testimonial',
    path: '#testimonial',
    offset: '70',
    id: 3,
  },
  {
    label: 'Harga',
    path: '#pricing',
    offset: '70',
    id: 4,
  },
  {
    label: 'Hubungi Kami',
    path: '#cta',
    offset: '70',
    id: 5,
  },
];

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */
export const bannerData = {
  news: 'NEWS',
  newsLabel: 'We have updated our term & condition policy',
  title: 'Memperkenalkan Mikro Cloud for Sovereignty.',
  text: 'MikroApps Cloud for Sovereignty memungkinkan untuk bisnis anda bekerja secara maksimal, produktif dan effisien',
  button: [
    {
      id: 1,
      title: 'Google Play',
      thumb: googlePlay,
      link: 'https://play.google.com/store',
    },
    {
      id: 2,
      title: 'App Store',
      thumb: appleStore,
      link: 'https://www.apple.com/sg/app-store/',
    },
  ],
};

/* ------------------------------------ */
// Why Choose Us data section
/* ------------------------------------ */
export const whyChooseUs = [
  {
    id: 1,
    icon: icon1,
    title: 'Order App',
    text: `Aplikasi Penjualan, Warehouse, Invoice, Followup Customer, Up Selling `,
    linkLabel: 'Info lebih lanjut',
    link: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'SquadApp -soon',
    text: `Kehidupan kerja dengan fleksibilitas yang Anda inginkan.`,
    linkLabel: 'Info lebih lanjut',
    link: '#',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Mikro CLoud for Retail -soon',
    text: `Percepat pertumbuhan bisnis dengan solusi yang disesuaikan untuk customer.`,
    linkLabel: 'Info lebih lanjut',
    link: '#',
  },
  {
    id: 4,
    icon: icon4,
    title: 'MiLogistik',
    text: `Get the best DoorDash experience with live order tracking.`,
    linkLabel: 'Info lebih lanjut',
    link: '#',
  },
];

/* ------------------------------------ */
// Analytics Tool data section
/* ------------------------------------ */
export const analyticsTool = {
  slogan: 'Dasboard monitoring',
  title: 'Analisa Bisnis Owner',
  desc: `Analisa data lebih mudah, bayak model analisa sehingga memudahkan pengambilan keputusan`,
  features: [
    'Dashboard Analisis Bisnis',
    'Analisa penjualan',
    'Analisa Progress',
  ],
  button: {
    link: '#',
    label: 'Lebih Lanjut',
  },
};

/* ------------------------------------ */
// Ever Need data section
/* ------------------------------------ */
export const everNeed = [
  {
    id: 1,
    icon: cards,
    title: '50+ Unique Design Blocks',
    background: 'rgba(240, 64, 55, 0.097195)'
  },
  {
    id: 2,
    icon: layout,
    title: 'Multiple Layouts',
    background: 'rgba(84, 84, 212, 0.1)'
  },
  {
    id: 3,
    icon: smartphone,
    title: 'Mobile First Design',
    background: 'rgba(254, 220, 90, 0.1)'
  },
  {
    id: 4,
    icon: sidebar,
    title: 'Fully Responsive',
    background: 'rgba(84, 84, 212, 0.1)'
  },
  {
    id: 5,
    icon: grid,
    title: 'Bootstrap 4 Framework',
    background: 'rgba(240, 64, 55, 0.1)'
  },
  {
    id: 6,
    icon: grid,
    title: 'Bootstrap 4 Framework',
    background: 'rgba(240, 64, 55, 0.1)'
  },
  {
    id: 7,
    icon: shape,
    title: 'Humanly Support',
    background: 'rgba(119, 191, 65, 0.1)'
  },
  {
    id: 8,
    icon: loop,
    title: 'Lifetime Updates',
    background: 'rgba(240, 64, 55, 0.1)'
  },
  {
    id: 9,
    icon: doc,
    title: 'Rich Documentation',
    background: 'rgba(84, 84, 212, 0.1)'
  },
];

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonialData = {
  title: 'Apa kata Mereka',
  posts: [
    {
      image: testimonial1,
      logo: testimonial1Logo,
      text: 'OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design. We deliver on such an expansive with innovation agenda with so many theme projects.',
      name: 'Supatno',
      designation: 'Bisnis Owner',
      rating: 5,
      button: {
        link: '#',
        label: 'Read the GeekWire case study'
      }
    },
    {
      image: testimonial2,
      logo: testimonial2Logo,
      text: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
      name: 'Jonathan Taylor',
      designation: 'Head of Communication by Envato',
      rating: 4,
      button: {
        link: '#',
        label: 'Read the Envato case study'
      }
    },
    {
      image: testimonial2,
      logo: testimonial2Logo,
      text: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
      name: 'Jonathan Taylor',
      designation: 'Head of Communication by Envato',
      rating: 5,
      button: {
        link: '#',
        label: 'Read the Envato case study'
      }
    },
  ],
};

/* ------------------------------------ */
// Wallet Experience data section
/* ------------------------------------ */
export const walletExperience = {
  slogan: 'Ultimate wallet experience',
  title: 'Take your wallet experience to new ultimate level',
  desc: `Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.`,
  thumb: walletImage,
  features: [
    {
      id: 1,
      icon: walletIcon1,
      title: "Fast & Instant Transfer",
      content: "We’re driven beyond just finishing the projects. We want to find solutions."
    },
    {
      id: 2,
      icon: walletIcon2,
      title: "File Management System",
      content: "We’re driven beyond just finishing the projects. We want to find solutions with the assessment."
    },
  ],
};

/* ------------------------------------ */
// Technology Community data section
/* ------------------------------------ */
export const technologyCommunity = {
  slogan: 'Technology based Community',
  title: 'Join our community by using our technology to grow up faster with our tools',
  desc: `Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption.`,
  thumb: technologyImage,
  button: {
    label: 'Explore More',
    link: '#',
  },
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'Pilih sesuai dengan kebutuhan Bisnis ',
  title: 'Kami menyediakan solusi sesuai kebutuhan bisnis anda',
  save: 'Save 25%',
  currency: "Rp.",
  plans: {
    monthly: [
      {
        id: 1,
        title: 'Starter Plan',
        description: 'Per user',
        price: 15,
        period: "mo",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
      {
        id: 2,
        title: 'Dedicated Plan',
        description: 'Per user',
        price: 49,
        period: "mo",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
    ],
    yearly: [
      {
        id: 1,
        title: 'Starter Plan',
        description: 'Per user',
        price: Math.floor(19 * 12),
        period: "yr",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
      {
        id: 2,
        title: 'Business Plan',
        description: 'Per user',
        price: Math.floor(49 * 12),
        period: "yr",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
    ],
  }
};

/* ------------------------------------ */
// FAQ's data section
/* ------------------------------------ */
export const faqs = [
  {
    id: 1,
    title: 'Can I use Omega for my clients?',
    description: `Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.`,
  },
  {
    id: 2,
    title: 'Do I get free updates?',
    description: `Yes. We update all of our themes regularly, plus are constantly adding new components, pages, and features to our themes. Purchase once and get lifetime updates.`,
  },
  {
    id: 3,
    title: 'Does it work with WordPress?',
    description: `Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. `,
  },
  {
    id: 4,
    title: 'Will you provide support?',
    description: `With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.`,
  },
];


/* ------------------------------------ */
// CTA data section
/* ------------------------------------ */
export const callToAction = {
  title: 'Siap untuk maju bersama Mikro Apps?',
  content: 'Tingkatkan efisiensi, produktivitas, dan performa bisnis dengan berbagai produk MikroApps yang telah digunakan oleh bisnis owner di Indonesia.',
  button: {
    label: 'Jadwalkan Demo',
    link: 'https://wa.me/6287759975410?&text={{code}}%20-%20Halo, Saya tertarik dengan produk MikroApps'
  },
  info: 'No credit card required'
};

/* ------------------------------------ */
// Footer Top data section
/* ------------------------------------ */
export const footerTop = {
  about: {
    logo: siteLogo,
    text: `Dapatkan lebih banyak informasi dan nilai pelanggan dari data Anda dengan menyatukan sumber data dari customer untuk membuat keputusan dimasa mendatang. `,
  },
  widgets: [
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Support Center',
          link: '#',
        },
        {
          id: 2,
          title: 'Customer Support',
          link: '#',
        },
        {
          id: 3,
          title: 'About Us',
          link: '#',
        },
        {
          id: 4,
          title: 'Copyright',
          link: '#',
        },
        {
          id: 5,
          title: 'Popular Campaign',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [
        {
          id: 1,
          title: 'Return Policy ',
          link: '#',
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: '#',
        },
        {
          id: 3,
          title: 'Terms & Conditions',
          link: '#',
        },
        {
          id: 4,
          title: 'Site Map',
          link: '#',
        },
        {
          id: 5,
          title: 'Store Hours',
          link: '#',
        },
      ],
    },
    {
      id: 4,
      title: 'My Account',
      list: [
        {
          id: 1,
          title: 'Press inquiries',
          link: '#',
        },
        {
          id: 2,
          title: 'Social media ',
          link: '#',
        },
        {
          id: 3,
          title: 'directories',
          link: '#',
        },
        {
          id: 4,
          title: 'Images & B-roll',
          link: '#',
        },
        {
          id: 5,
          title: 'Permissions',
          link: '#',
        },
      ],
    },
  ],
  contactInfo: {
    title: 'Contact info',
    address: `Surabaya, Indonesia`,
    phone: `+62 877 599 75 410`,
    openingTime: `7 Days - 8am - 10pm`,
    email: `info.demo@mikroapps.id`,
  },
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const footer = {
  copyright: `Copyright © 2023 MikroApps. All rights reserved`,
  // nav: [
  //   {
  //     id: 1,
  //     title: 'Support',
  //     link: '#',
  //   },
  //   {
  //     id: 2,
  //     title: 'Hiring',
  //     link: '#',
  //   },
  //   {
  //     id: 3,
  //     title: 'Privacy',
  //     link: '#',
  //   },
  //   {
  //     id: 4,
  //     title: 'Terms',
  //     link: '#',
  //   },
  // ],
  socialLinks: [
    {
      id: 1,
      link: 'http://facebook.com',
      icon: facebook,
      label: 'Facebook',
    },
    {
      id: 2,
      link: 'http://twitter.com',
      icon: twitter,
      label: 'Twitter',
    },
    {
      id: 3,
      link: 'http://dribbble.com',
      icon: dribbble,
      label: 'Youtube',
    },
  ],
};
