export function filterUsers(users) {
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