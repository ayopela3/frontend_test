'use client';

import styles from "./page.module.css";
import userApi from "./api/axios";
import Gallery from "./gallery";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    userApi().getUsers().then((res) => {
      console.log(res.data)
      setUsers(res.data)
    });
  }, [])

  const display = useMemo(() => {
    if (users.length !== 0) return <Gallery users={users} />
    else return <>loading data...</>
  }, [users])

  return (
    <main className={styles.main}>
     {display}
    </main>
  );
}
