import { logout } from "@/lib";
import { requestToBodyStream } from "next/dist/server/body-streams";
import { redirect } from "next/navigation";

const Logout = () => {
  return (
    <form
      action={async (FormData) => {
        "use server";
        await logout(FormData);
        redirect("/login");
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="email"
        className=" w-[70%] border-[black] border-[3px]"
      />
      <br />
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
