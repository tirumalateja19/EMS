const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "12345",
    tasks: [
      {
        title: "Build Login Page",
        description: "Create responsive login form using React",
        date: "2025-04-05",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "JWT Integration",
        description: "Implement JWT auth in Node backend",
        date: "2025-04-03",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Error Logger Setup",
        description: "Add centralized logging using Winston",
        date: "2025-04-01",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123456",
    tasks: [
      {
        title: "Create REST API",
        description: "Design CRUD endpoints for user data",
        date: "2025-04-02",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Integrate Firebase Auth",
        description: "Setup Google login using Firebase",
        date: "2025-04-04",
        category: "Auth",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Project Setup",
        description: "Initial project structure using Vite + React",
        date: "2025-03-30",
        category: "Setup",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix CORS Error",
        description: "Handle CORS in Express API",
        date: "2025-04-06",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234567",
    tasks: [
      {
        title: "UI Design in Figma",
        description: "Design the dashboard layout",
        date: "2025-03-31",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Navbar Component",
        description: "Reusable navbar for SPA",
        date: "2025-04-01",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Dark Mode Toggle",
        description: "Add theme switcher in React",
        date: "2025-04-02",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "12345678",
    tasks: [
      {
        title: "Redux Setup",
        description: "Integrate Redux for state management",
        date: "2025-04-03",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Add Pagination",
        description: "Implement pagination on dashboard",
        date: "2025-04-05",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Unit Testing",
        description: "Write Jest tests for user components",
        date: "2025-04-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123456789",
    tasks: [
      {
        title: "Admin Panel",
        description: "Create dashboard with role access",
        date: "2025-04-01",
        category: "Fullstack",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Dockerize App",
        description: "Add Docker support for deployment",
        date: "2025-04-03",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize Images",
        description: "Lazy loading and compression for assets",
        date: "2025-04-02",
        category: "Performance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 6,
    email: "employee6@example.com",
    password: "pass123",
    tasks: [
      {
        title: "Create Blog Editor",
        description: "Build WYSIWYG editor for blog posts",
        date: "2025-04-02",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "SEO Audit",
        description: "Analyze app with Lighthouse",
        date: "2025-04-04",
        category: "Performance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 7,
    email: "employee7@example.com",
    password: "pass456",
    tasks: [
      {
        title: "Webhook Integration",
        description: "Add webhook to trigger on signup",
        date: "2025-04-05",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Stripe Setup",
        description: "Integrate Stripe for payments",
        date: "2025-04-06",
        category: "Payments",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Bugs in Cart Logic",
        description: "Resolve cart total and item bugs",
        date: "2025-04-03",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin1@example.com",
    password: "adminpass1",
  },
  {
    id: 2,
    email: "admin2@example.com",
    password: "adminpass2",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
  // without this stringify method the data will be in object form so its necessary to convert
};
export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  // we need to parse the string data into Json to access
  return { employee, adminData };
};
