export const fetchUserDetails = async () => {
  try {
    const response = await fetch("/data/users.json");

    if (!response.ok) {
      throw new Error("Failed to fetch users.json");
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.users)) {
      throw new Error("Invalid user data structure");
    }

    return data.users;
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    return [];
  }
};

export const getUserLoginStatus = async () => {
  try {
    const data = await fetchUserDetails();
    if (!data) {
      throw new Error("Failed to retreive data");
    }

    const userLoginData = data.map((user) => ({
      userName: user.displayName,
      accountCreated: new Date(user.createdAt),
      lastLogin: new Date(user.lastLogin),
    }));

    return userLoginData;
  } catch (error) {
    console.error("Error Fetching user Details:", error);
    return [];
  }
};
