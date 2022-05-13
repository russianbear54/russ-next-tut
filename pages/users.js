// import { useState, useEffect } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  // const [users, setUsers] = useState([
  //   { id: 1, name: "Alex" },
  //   { id: 2, name: "Wayne" },
  // ]);

  // useEffect(async () => {

  // }, []);

  return (
    <MainContainer keywords={"users nextjs"}>
      <h1>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </h1>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
