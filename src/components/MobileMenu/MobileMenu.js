export default function MobileMenu() {
  return (
    <div className="fixed inset-0 flex flex-col md:hidden w-full mx-auto min-h-full z-30">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
