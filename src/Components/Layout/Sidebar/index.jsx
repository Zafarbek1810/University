import { useRouter } from "next/router";
import React from "react";
// import { useContextSelector } from "use-context-selector";
// import UserContext from "../../../Context/UserContext";
import MyLink from "../../Common/MyLink";
import UserCircle from "../../Common/Svgs/UserCircle";
import { SidebarWrapper } from "./Sidebar.style";
import { useContextSelector } from "use-context-selector";
import UserContext from "../../../Context/UserContext/Context";
import Books from "../../Common/Svgs/Books";

const NavListMenu = [
  {
    title: "Shaxsiy kabinet",
    path: "/dashboard/cabinet",
    src: "/icons/students.png",
    role: ["ROLE_STUDENT"],
  },
  
  {
    title: "Fanlar",
    path: "/dashboard/science",
    src: "/icons/faculty.png",
    role: ["ROLE_STUDENT"],
  },

  {
    title: "Universitetlar",
    path: "/admin/university",
    src: "/icons/university.png",
    role: ["ROLE_ADMIN"],
  },
  {
    title: "Fakultetlar",
    path: "/admin/faculties",
    src: "/icons/faculty.png",
    role: ["ROLE_ADMIN"],
  },
  {
    title: "Yo'nalishlar",
    path: "/admin/specialties",
    src: "/icons/special.png",
    role: ["ROLE_ADMIN"],
  },
  {
    title: "Fanlar",
    path: "/admin/science",
    src: "/icons/faculty.png",
    role: ["ROLE_ADMIN"],
  },
  {
    title: "Talabalar",
    path: "/admin/students",
    src: "/icons/students.png",
    role: ["ROLE_ADMIN"],
  },
  
];

const Sidebar = () => {
  const router = useRouter();

  const userRole = useContextSelector(
    UserContext,
    (ctx) => ctx.state?.user?.roles
  );
  console.log(userRole);

  const UmumiyListMenu = NavListMenu.filter(({ role }) =>
    role.includes(userRole)
  );

  return (
    <SidebarWrapper>
     
      <div className="sidebar-menu">
        
        {UmumiyListMenu.map(({ title, src, path }, idx) => (
          <MyLink
            className={router.pathname === path ? "activelink" : "link"}
            to={path}
            key={idx}
          >
            <img src={src} alt="" />
            {title}
          </MyLink>
        ))}
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
