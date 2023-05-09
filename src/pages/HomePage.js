import UsersList from "components/UsersList/UsersList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import { useGetUsersQuery } from "redux/usersSlice";
import { useSearchParams } from "react-router-dom";
import Dropdown from "components/Dropdown/Dropdown";


const Home = () => {
  const { data: users, error } = useGetUsersQuery();

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    filter: "",
  });

  const page = Number(searchParams.get("page"));
  const filter = searchParams.get("filter");
  const itemsPerPage = 3;

  const getFilteredValue = (value) => {
    setSearchParams({ page: page, filter: value });
  };

  function filterUsers(users) {
    switch (filter) {
      case "":
      case "all":
        return users;

      case "follow":
        return users.filter((user) => user.following === true);

      case "not follow":
        return users.filter((user) => user.following === false);

      default:
        return users;
    }
  }

  const setCurrentPage = (number) => {
    const pageCount = Math.ceil(filterUsers(users).length / itemsPerPage);
    if (number > pageCount) {
      return;
      //  } else if (number === pageCount) {
      //    setSearchParams({ page: number, filter: filter });
    } else {
      setSearchParams({ page: number, filter: filter });
    }
  };

  function paginateUsers(arr) {
    const lastIndex = page * itemsPerPage;
    const firstIndex = 0;
    const filteredUsers = filterUsers(users);
    return filteredUsers.slice(firstIndex, lastIndex);
  }

  return (
    <div>
      <Dropdown placeHolder="Select..." getFilteredValue={getFilteredValue} />
      {error && "ERROR(("}
      {users && <UsersList users={paginateUsers(users)} />}
      <LoadMoreBtn setPage={setCurrentPage} page={page} />

      <ToastContainer />
    </div>
  );
};

export default Home;
