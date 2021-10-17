import Link from "next/link";

const Header = () => {
    return (
      <>
        <header className="flex -space-between full-width">
          <h1>
            <Link href="/">
              <a className="flex">
                <span>Eneftee</span>
              </a>
            </Link>
          </h1>
          <nav className="flex">
          <Link href="/about">About</Link>
        </nav>
        </header>
      </>
    );
  };
  
  export default Header;