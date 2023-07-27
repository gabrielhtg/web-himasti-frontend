import "./style/defaultStyle.css";

export const metadata = {
  title: "HIMASTI IT Del",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
