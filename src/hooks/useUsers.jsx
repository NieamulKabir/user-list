import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    data: usersData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/users`);
      return res.json();
    },
  });
  return [usersData, loading, refetch];
};

export default useUsers;
