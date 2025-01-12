import { getSession, login } from "@/lib";
import { redirect } from "next/navigation";

const Login = () => {
  const session = getSession();

  return (
    <section>
      <p>This is the login page</p>
      <form
        action={async (FormData) => {
          "use server";
          await login(FormData);
          redirect("/");
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          className=" w-[70%] border-[black] border-[3px]"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
};

export default Login;
