import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHeader from "@/components/editorial/EditorialHeader";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#18201c]">
      <EditorialHeader />
      {children}
      <EditorialFooter />
    </div>
  );
}
