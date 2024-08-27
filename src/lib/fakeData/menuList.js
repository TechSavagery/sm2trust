import menu_image_1 from "@/assets/images/menu-image-1.png"
export const menuList = [
    {
        id: 1,
        name: "Home",
        path: "#",
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 2,
        name: "About",
        path: '/#about',
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 3,
        name: "Services",
        path: "#",
        isDropdown: false,
        isMegaMenu: [
            {
                id: 1,
                menus: [
                    {
                        id: 1,
                        name: "Trustee Services",
                        path: "/service-single",
                        desc: "Efficient management of financial and estate matters."
                    },
                    {
                        id: 2,
                        name: "Conservator-of-the-Person Services",
                        path: "/service-single",
                        desc: "Compassionate care for individuals with limited decision-making abilities."
                    },
                    {
                        id: 3,
                        name: "",
                        path: "",
                        desc: ""
                    }
                ]
            },
            {
                id: 2,
                menus: [
                    {
                        id: 4,
                        name: "Special Needs Trusts and Guardianship Services",
                        path: "/service-single",
                        desc: "Tailored services for special needs trusts and guardianship."
                    },
                    {
                        id: 5,
                        name: "Conservator-of-the-Estate Services",
                        path: "/service-single",
                        desc: "Comprehensive management of financial and estate affairs."
                    },
                    {
                        id: 6,
                        name: "",
                        path: "",
                        desc: ""
                    }
                ]
            },
            {
                id: 3,
                menus: [
                    {
                        id: 7,
                        name: "Powers of Attorney",
                        path: "/service-single",
                        desc: "Authority to act on behalf of others in financial, health, or personal matters."
                    },
                    {
                        id: 8,
                        name: "Fees",
                        path: "/#fees",
                        desc: "Hourly billing based on task and expertise."
                    },
                    {
                        id: 8,
                        name: "",
                        path: "",
                        desc: ""
                    }
                ]
            },
        ]
    },
    {
        id: 4,
        name: "Pages",
        path: "#",
        isMegaMenu: false,
        isDropdown: [
            {
                id: 1,
                name: "About Us",
                path: "/about-us"
            },
            {
                id: 2,
                name: "Services",
                path: "/services"
            },
            // {
            //     id: 3,
            //     name: "Service Single",
            //     path: "/service-single"
            // },
            {
                id: 4,
                name: "Project Single",
                path: "/project-single"
            },
            {
                id: 5,
                name: "Product Single",
                path: "/product-single"
            },
            {
                id: 6,
                name: "Product Archive",
                path: "/product-archive"
            },
            {
                id: 7,
                name: "Career",
                path: "/career"
            },
            {
                id: 8,
                name: "Job Details",
                path: "/job-details"
            },
            {
                id: 9,
                name: "Team",
                path: "/team"
            },
            {
                id: 10,
                name: "Team Single",
                path: "/team-single"
            },
            {
                id: 11,
                name: "Contact 2",
                path: "/contact-2"
            },
        ]
    },
    {
        id: 5,
        name: "Blog",
        path: "#",
        isMegaMenu: false,
        isDropdown: [
            {
                id: 1,
                name: "Blog Archive",
                path: "/blog-archive"
            },
            {
                id: 2,
                name: "Blog Single",
                path: "/blog-single"
            },
            {
                id: 3,
                name: "Blog Left Sidebar",
                path: "/blog-left-sidebar"
            },
            {
                id: 4,
                name: "Blog Right Sidebar",
                path: "/blog-right-sidebar"
            },
        ]
    },
    {
        id: 6,
        name: "Contact",
        path: "/contact",
        isMegaMenu: false,
        isDropdown: false
    },
]