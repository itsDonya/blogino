import "./styles/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "بلاگینو – فضای خلاقانه برای افکار شما",
  description:
    "بلاگینو یک اپلیکیشن وبلاگ ساده و مدرن است که به کاربران این امکان را می‌دهد تا ایده‌ها، داستان‌ها و نظرات خود را به راحتی و خلاقانه به اشتراک بگذارند. با طراحی مینیمالیستی و رابط کاربری شهودی، بلاگینو تجربه‌ای بی‌نظیر برای نویسندگان و خوانندگان فراهم می‌کند. به جامعه‌ای از سازندگان محتوا بپیوندید و صدای خود را با جهان به اشتراک بگذارید.",
  keywords:
    "بلاگینو، اپلیکیشن وبلاگ، پلتفرم نوشتن، نوشتن خلاقانه، وبلاگ فارسی، اشتراک‌گذاری ایده‌ها، تولید محتوا، نویسندگی آنلاین",
  author: "تیم بلاگینو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
