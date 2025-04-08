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
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element:<DashboardLayout/>,
                children:[
                    {
                        path:"/",
                        element:<JoinCommunitePage/>
                    },
                    {
                        path:"mentionable-works",
                        element:<MentionableWork/>
                    },
                    {
                        path:"blogs",
                        element:<Blogs/>
                    },
                    {
                        path:"my-profile",
                        element:<MyProfile/>
                    },
                    {
                        path:"pending-case",
                        element:<PendingCase/>
                    },
                    {
                        path:"rest-case",
                        element:<RestCase/>
                    },
                    // admin routes 
                    {
                        path:"admin-dashboard",
                        element:<AdminDashboard/>
                    },
                    {
                        path:"member-request",
                        element:<MemberRequest/>
                    }
                ]
                
            }
        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"sign-up",
        element:<Register/>
    }
]);