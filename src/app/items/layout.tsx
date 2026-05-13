import { Footer2 } from "@/components/footer2";
import { Navbar1 } from "@/components/navbar1";

export default function ItemsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container  min-h-full flex flex-col max-w-7xl mx-auto">
      {children}
    </div>
  );
}
