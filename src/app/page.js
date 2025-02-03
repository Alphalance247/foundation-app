"use client";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import Section from "./components/Section";
// import Heading from "./components/Heading";

// export default function Page() {
//   return (
//     <Section>
//       <Heading>Title</Heading>
//       <Section>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }
// "use client";
import styles from "../../src/globals.scss";

// import { useReducer } from "react";
// import Chat from "./components/chat.jsx";
// import ContactList from "./components/contactList.jsx";
// import {
//   initialState,
//   messengerReducer,
// } from "./components/messangerReducer.jsx";
// import { redirect } from "next/navigation";
// import { getSession } from "@/lib";
// import Logout from "./logout/page";
// import { useState } from "react";

// export default function Messenger() {
//   // const [state, dispatch] = useReducer(messengerReducer, initialState);
//   // const message = state.messages[state.selectedId];
//   // const contact = contacts.find((c) => c.id === state.selectedId);
//   // const session = await getSession();
//   // console.log(session?.payload?.payload?.user?.email);

//   // if (!session) {
//   //   console.log("time out");
//   //   redirect("/login");
//   // }
//   const task = [
//     // {
//     //   id: 1,
//     //   content: "task 1",
//     // },
//     // {
//     //   id: 2,
//     //   content: "task 2",
//     // },
//   ];
//   let nextId = 0;

//   const [addTask, setAddask] = useState(task);
//   const [add, setAdd] = useState("");
//   const [isEdit, setIsEdit] = useState(true);
//   const handleAddTask = (newTask) => {
//     setAdd("");
//     setAddask((prev) => {
//       return [...prev, { id: addTask.length + 1, content: newTask }];
//     });
//   };

//   const handleDelete = (id) => {
//     setAddask(
//       addTask.filter((item) => {
//         return item?.id !== id;
//       })
//     );
//   };

//   const handleEdit = () => {
//     setIsEdit(false);
//   };
//   const handleSave = () => {
//     setIsEdit(true);
//   };

//   return (
//     <section className=" text-center">
//       {/* <h1>Welcome back {session?.payload?.payload?.user?.email}</h1> */}
//       <p>This is the home page</p>
//       {/* <Logout /> */}
//       <br /> <br />
//       {/* Learning useReducer hooks */}
//       <h1 className="text-center text-3xl mb-4 text-teal-700">Use Reducer</h1>
//       <input
//         type="text"
//         name="add"
//         value={add}
//         className="px-4 py-2 border border-yellow-500 mr-6"
//         onChange={(e) => setAdd(e.target.value)}
//       />
//       <button
//         className="px-4 py-2 text-white bg-black"
//         onClick={() => handleAddTask(add)}
//       >
//         add
//       </button>
//       {/* Task to show */}
//       <div>
//         {addTask.map((el) => {
//           return (
//             <div key={el?.id} className="mb-6">
//               <p className="">{el.content}</p>

//               <div>
//                 <button
//                   onClick={() => handleDelete(el?.id)}
//                   className="px-2 py-1 text-white bg-black mr-6"
//                 >
//                   delete
//                 </button>
//                 {isEdit ? (
//                   <button
//                     onClick={() => handleEdit(el?.id)}
//                     className="px-2 py-1 text-white bg-black"
//                   >
//                     edit
//                   </button>
//                 ) : (
//                   <>
//                     <input
//                       type="text"
//                       name="add"
//                       value={add}
//                       className="px-4 py-2 border border-yellow-500 mr-6"
//                       onChange={(e) => setAdd(e.target.value)}
//                     />
//                     <button
//                       onClick={() => handleSave(el?.id)}
//                       className="px-2 py-1 text-white bg-black"
//                     >
//                       save
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// // const contacts = [
// //   { id: 0, name: "Taylor", email: "taylor@mail.com" },
// //   { id: 1, name: "Alice", email: "alice@mail.com" },
// //   { id: 2, name: "Bob", email: "bob@mail.com" },
// // ];

import React from "react";
// import HeroSection from "../components/foundation/hero";
import HeroSection from "./components/foundation/hero";
import AboutSection from "./components/foundation/about";
import Programs from "./components/foundation/programs";
import ImpactSection from "./components/foundation/impact";
import TrusteesSection from "./components/foundation/boardSection";
import Navbar from "./components/foundation/navbar";
import VisionMissionValues from "./components/foundation/mission";
import MediaSection from "./components/foundation/media";
import DonationSection from "./components/foundation/donation";
import ContactSection from "./components/foundation/contact";
import Footer from "./components/foundation/footer";
import Head from "next/head";
import NextPlansSection from "./components/foundation/NextPlans";

const FoundationPage = () => {
  return (
    <>
      <Head>
        <title>Home | Aisha Women’s Rise Foundation</title>
        <meta
          name="description"
          content="Aisha Foundation is dedicated to empowering youth through skills training in baking and tie-dye, promoting personal hygiene with menstrual pad distribution, and supporting communities with food palliatives and service initiatives in Kano State. Join us in uplifting lives and fostering hope."
        />
        <meta
          name="keywords"
          content="Aisha Foundation, youth empowerment, baking skills training, tie-dye skills training, menstrual hygiene awareness, community support initiatives, food palliatives distribution, NGO in Kano State, nonprofit organization, empowering young girls and boys, hygiene education, community service in Nigeria"
        />
        <meta name="author" content="Aisha Foundation" />
      </Head>
      <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VisionMissionValues />
        <Programs />
        <ImpactSection />
        <NextPlansSection />
        <TrusteesSection />
        <MediaSection />
        <DonationSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default FoundationPage;
