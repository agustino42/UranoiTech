import Link from "next/link";
import {BiArrowBack} from "react-icons/bi";
import {NavbarProps} from "sanity";

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div className="flex items-center justify-between p-5">
      <Link href="/" className="flex items-center space-x-2 text-sm">
        <BiArrowBack  className="h-5 w-5 cursor-pointer"/>
        <span> UranoTech WebSite</span>
      </Link>
        <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;