# 🏥 Patient Medicine & Appointment Tracking System

A responsive and modern frontend web application built with **React.js**, **React Router**, **Bootstrap**, and **CSS Modules**. This system allows patients to:

- Register & log in
- View upcoming appointments
- Book new appointments
- Check their prescriptions

---

## ✨ Features

- ✅ **User Registration & Login** with localStorage
- 📆 **Book Appointments** by selecting doctor, date, and time
- 💊 **View Prescriptions** in a clean card layout
- 🧾 **Dashboard** with personalized greetings and upcoming appointments
- 🔀 **React Router** navigation
- 🎨 Styled with **Bootstrap** and **CSS Modules**
- 📱 Fully **Responsive** design
- ⚙️ Modular, reusable, and clean codebase

---

## 🧱 Tech Stack

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| React        | Frontend Framework              |
| React Router | Routing between views/pages     |
| Bootstrap    | UI Framework for styling        |
| CSS Modules  | Scoped and modular CSS          |
| React Icons  | Clean icon integration          |
| localStorage | Simulated authentication & data |

---

## 📁 Project Structure

```

src/
├── assets/
├── components/
│   └── Button/
│       └── Button.jsx
│       └── Button.module.css
│   └── FormInput/
│       └── FormInput.jsx
│       └── FormInput.module.css
│   └── Navbar/
│       └── Navbar.jsx
│       └── Navbar.module.css
├── pages/
│   ├── AuthForm.module.css
│   ├── BookAppointment.jsx
|   ├── BookAppointment.module.css
│   ├── Dashboard.jsx
|   ├── Dashboard.module.css
│   ├── Login.jsx
│   ├── Prescriptions.jsx
|   ├── Prescriptions.module.css
│   ├── Register.jsx
├── App.jsx
└── main.jsx

```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/itsindrajput/ReactProjects/MediTracker.git
cd MEDITRACKER
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🔗 Live Preview

Check out the live demo of the project here:  
👉 [**Medi Tracker – Live Preview**](https://meditracker-two.vercel.app/)

---

## 🙌 Future Improvements

- 🔐 JWT-based Authentication
- ☁️ Backend integration with APIs
- 🗓 Appointment cancellation/rescheduling
- 📄 Downloadable prescriptions (PDF)
- 🌍 Multi-language support
