import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const DashboardPage = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  console.log(user);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Image
        src={user.imageUrl}
        width={40}
        height={40}
        alt="user image"
        className="rounded-full"
      />
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Email: {user.emailAddresses[0].emailAddress}</div>
    </div>
  );
};

export default DashboardPage;
