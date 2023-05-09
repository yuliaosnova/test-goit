import { Link, useLocation } from "react-router-dom";
import TweetsGallary from "../components/TweetsGallery/TweetsGallary";
import GoBackBtn from "components/GoBackBtn/GoBackBtn";
import { useRef } from "react";

const TweetsPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const clickedUser = useRef(location.state?.name);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <GoBackBtn />
      </Link>
      <TweetsGallary name={clickedUser.current} />
    </>
  );
};

export default TweetsPage;
