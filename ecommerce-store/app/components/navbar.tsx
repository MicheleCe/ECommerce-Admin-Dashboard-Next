import getCategories from "@/actions/get-categories";
import Link from "next/link";
import MainNav from "./main-nav";
import NavBarActions from "./navbar-actions";
import Container from "./ui/container";

const Navbar = async () => {
  const categories = await getCategories();
  
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:m-0 gap-x2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories}/>
          <NavBarActions/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
