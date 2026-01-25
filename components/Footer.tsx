const FooterContent = () => {
  return (
    <footer className="h-full bg-foreground">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-center h-full"></div>
      </div>
    </footer>
  );
};

export default function Footer() {
  return (
    <div
      className="relative h-screen bg-foreground"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <div className="h-screen sticky top-0">
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
