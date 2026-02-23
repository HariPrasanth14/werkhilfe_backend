"use client";

import axios from "axios";
import {MonteCarlo} from 'next/font/google'
import { useEffect, useState } from "react";

const plex = MonteCarlo({
  subsets:["latin"],
  display:"swap",
  weight:"400"
})

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<any>(
          `api/v1/users/provider`,{
            withCredentials:true
          }
        );
        setUsers(response.data?.records);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  console.log(users)

  return (
    <div>
      <div>
        <ul>
          {users.length > 0 ? (
            users.map((u, index) => (
              <li key={index} className={plex.className}>{u.service_type}</li>
            ))
          ) : (
            <li className={plex.className}>No users found</li>
          )}
        </ul>
      </div>
      </div>

)
}
