import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div
      className={` mx-auto  min-h-screen max-w-[1280px] px-12 ${inter.className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
