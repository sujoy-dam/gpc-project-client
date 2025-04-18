import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Common/Home/Home";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import JoinCommunitePage from "../Pages/People/JoinCommunitePage";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import MentionableWork from "../Pages/People/MentionableWork";
import MyProfile from "../Pages/Member/MyProfile";
import PendingCase from "../Pages/Member/PendingCase";
import Blogs from "../Pages/People/Blogs"
import RestCase from "../Pages/Member/RestCase";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminDashboardComponent from "../components/Dashboard/AdminDashboard/AdminDashboardComponent";
import MemberRequest from "../Pages/Admin/MemberRequest";
import ManageUsers from "../Pages/Admin/ManageUsers";
import PostMentionableWork from "../Pages/Admin/PostMentionableWork";
import PostBlogs from "../Pages/Admin/PostBlogs";
import PostCase from "../Pages/Admin/PostCase";
import PostAnnounce from "../Pages/Admin/PostAnnounce";
import NoticeBoard from "../Pages/Member/NoticeBoard";
import PriveteRoute from "./PriveteRoute";
import AboutUs from "../Pages/Common/AboutUs";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "/",
                        element: <JoinCommunitePage />
                    },
                    {
                        path: "mentionable-works",
                        element: <MentionableWork />
                    },
                    {
                        path: "blogs",
                        element: <Blogs />
                    },
                    {
                        path: "my-profile",
                        element:<PriveteRoute>
                             <MyProfile />
                        </PriveteRoute>
                    },
                    {
                        path: "pending-case",
                        element: <PendingCase />
                    },
                    {
                        path: "rest-case",
                        element: <RestCase />
                    },
                    {
                        path: "notice-board",
                        element: <NoticeBoard />
                    },
                    // admin routes 
                    {
                        path: "admin-dashboard",
                        element: <AdminDashboard />
                    },
                    {
                        path: "manage-users",
                        element: <ManageUsers />
                    },
                    {
                        path: "member-request",
                        element: <MemberRequest />
                    },
                    {
                        path: "post-mentionable-works",
                        element: <PostMentionableWork />
                    },
                    {
                        path: "post-blog",
                        element: <PostBlogs />
                    },
                    {
                        path: "post-case",
                        element: <PostCase />
                    },
                    {
                        path: "add-announcement",
                        element: <PostAnnounce />
                    }
                ]

            }
        ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "sign-up",
        element: <Register />
    },
    {
        path:"about-us",
        element:<AboutUs/>
    }
]);