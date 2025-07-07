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

export const getUsersFavoriteGames = async () => {
  try {
    const data = await fetchUserDetails();

    if (!data || !Array.isArray(data)) {
      throw new Error("Failed to retrieve user data");
    }

    const userFavoriteDetails = data.map((user) => ({
      userName: user.displayName,
      favoriteGames: user.favorites || [],
    }));

    return userFavoriteDetails;
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    return [];
  }
};
  
export const getNumberOfUsersByQuarter = async () => {
  try {
    const data = await fetchUserDetails();

    if (!Array.isArray(data)) {
      throw new Error("Invalid user data");
    }

    const quarterCounts = {};

    data.forEach((user) => {
      const createdDate = new Date(user.createdAt);
      const year = createdDate.getFullYear();
      const month = createdDate.getMonth(); // 0–11
      const quarter = Math.floor(month / 3) + 1;
      const quarterKey = `Q${quarter} ${year}`;

      if (!quarterCounts[quarterKey]) {
        quarterCounts[quarterKey] = 0;
      }
      quarterCounts[quarterKey]++;
    });

    // Sort quarters chronologically
    const sortedQuarters = Object.keys(quarterCounts).sort((a, b) => {
      const [qA, yA] = a.split(" ");
      const [qB, yB] = b.split(" ");
      return (
        new Date(`${yA}-0${(parseInt(qA[1]) - 1) * 3 + 1}`) -
        new Date(`${yB}-0${(parseInt(qB[1]) - 1) * 3 + 1}`)
      );
    });

    return [["Quarter", "Users"]].concat(
      sortedQuarters.map((quarter) => [quarter, quarterCounts[quarter]])
    );
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    return [["Quarter", "Users"]];
  }
};
