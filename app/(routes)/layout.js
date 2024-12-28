import Navbar from "@/components/Navbar";



export const metadata = {
  title: "First Next",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar/>
        {children}
   
    </>
        
  );
}
