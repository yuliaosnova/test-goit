import UsersList from "components/UsersList/UsersList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import { useGetUsersQuery } from "redux/usersSlice";
import { useSearchParams } from "react-router-dom";
import Dropdown from "components/Dropdown/Dropdown";
import { filterUsers } from "utils/filterUsers";
import { paginateUsers } from "utils/paginateUsers";
import { useEffect, useState } from "react";

const Home = () => {
  const { data: users, error } = useGetUsersQuery();
  console.log(users);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    filter: "all",
  });

  const [paginatedUsers, setPaginatedUsers] = useState([]);
  console.log("PAGINATED USERS", paginatedUsers);

  const page = Number(searchParams.get("page"));
  const filter = searchParams.get("filter");
  const itemsPerPage = 3;

  const getFilteredValue = (value) => {
    setSearchParams({ page: 1, filter: value });
    setPaginatedUsers([]);
  };

  const setCurrentPage = (number) => {
    const totalPages = Math.ceil(
      filterUsers(users, filter).length / itemsPerPage
    );
    if (number > totalPages) {
      return;
    } else {
      setSearchParams({ page: number, filter: filter });
    }
  };

  useEffect(() => {
    if (users?.length) {
      const filteredUsers = filterUsers(users, filter);

      const paginatedArr = paginateUsers(filteredUsers, page, itemsPerPage);

      setPaginatedUsers([...paginatedArr]);
    }
  }, [users, page, filter]);

  return (
    <div>
      <Dropdown placeHolder="Select..." getFilteredValue={getFilteredValue} />
      {error && "ERROR(("}
      {users && <UsersList users={paginatedUsers} />}
      {users && paginatedUsers.length < filterUsers(users, filter).length && (
        <LoadMoreBtn setPage={setCurrentPage} page={page} />
      )}

      <ToastContainer />
    </div>
  );
};

export default Home;
