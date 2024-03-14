// useFetchUserDetails.js
import { useState, useCallback } from "react";

const useFetchUserDetails = (baseUrl, setUserDetails) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserDetails = useCallback(
    async (username) => {
       setLoading(true);
       setError(null);
       try {
         let url;
         const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Example proxy URL
         if (baseUrl.includes("leetcode-stats-api.herokuapp.com")) {
           url = new URL(`${baseUrl}/${username}`);
         } else if (baseUrl.includes("codeforces.com")) {
           url = new URL(`${baseUrl}/api/user.info`);
           url.searchParams.append("handles", username);
         } else if (baseUrl.includes("codechef-api.vercel.app")) {
           url = new URL(`${proxyUrl}${baseUrl}${username}`);
         }
         const response = await fetch(url.toString());
         if (!response.ok) {
           throw new Error("Failed to fetch user details");
         }
         const data = await response.json();
         setUserDetails(data);
       } catch (error) {
         setError(error.message);
       } finally {
         setLoading(false);
       }
    },
    [baseUrl, setUserDetails]
   );
  return { loading, error, fetchUserDetails };
};

export default useFetchUserDetails;
