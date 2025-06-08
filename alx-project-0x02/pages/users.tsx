import Header from '@/components/layout/Header';
// import {useMemo, useState, useEffect} from 'react';
import UserCard from '@/components/common/UserCard';
import { UsersCardProps } from '@/interfaces';


const Users: React.FC<UsersCardProps> = ({ users }) => {

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {
          users?.map(({ id, name, email, address }) => (
            <UserCard key={id} name={name} email={email} address={address} />
            ))
          }
      </div>
    </>
  );
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;