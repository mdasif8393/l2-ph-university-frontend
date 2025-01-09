export const adminPaths2 = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: "Admin_Dashboard",
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "/admin/create-admin",
                element: "Create_Admin",
            },
            {
                name: "Create Faculty",
                path: "/admin/create-faculty",
                element: "Create_Faculty",
            },
            {
                name: "Create Student",
                path: "/admin/create-student",
                element: "Create_Student",
            },
        ],
    },
];

const newArray = adminPaths2.reduce((acc, item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element

        });
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc;
}, []);

console.log(newArray);