# Gemini Clone  

Link website: https://gemini-clone-two-phi.vercel.app/

![Gemini Clone](https://drive.google.com/uc?export=view&id=1n38TJIPLbD5Y8_uRa2cu1eydQsoxqEO4)

Gemini Clone is a web application that simulates an AI assistant inspired by Google's Gemini. It provides users with an interactive interface to ask questions, generate ideas, and receive AI-powered responses in real-time.  

## 📌 Table of Contents  
- [Overview](#overview)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Available Scripts](#available-scripts)  
- [Environment Variables](#environment-variables)  
- [Technologies Used](#technologies-used)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 🚀 Overview  
Gemini Clone is designed to provide a seamless user experience for interacting with an AI assistant. The application features a modern UI, dynamic response generation, and a conversational interface. Built with **React** and **Vite** for high performance.  

![Interfaz](https://drive.google.com/uc?export=view&id=1kOCOJGCgqdb8g8r0pGrgVt-Zpi4IDsRq)

---

## ✨ Features  
- **💡 Interactive UI** – Clean and responsive design.  
- **⚡ AI-Powered Responses** – Real-time answers from an AI backend.  
- **📌 Predefined Prompts** – Quick access to example queries.  
- **⏳ Loading Indicators** – Visual feedback during processing.  
- **✅ Input Validation** – User-friendly handling of queries.  
- **🧠 Contextual State Management** – Powered by React Context API.  

---

## 📂 Project Structure  

```bash
GEMINI-CLONE/
│── node_modules/
│── public/
│   └── vite.svg
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Main/
│   │   │   ├── Main.css
│   │   │   ├── Main.jsx
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.css
│   │   │   ├── Sidebar.jsx
│   ├── config/
│   │   ├── gemini.js
│   ├── context/
│   │   ├── Context.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── .env
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
```

---

## 🛠 Getting Started  

### ✅ Prerequisites  
- **Node.js** (v16 or higher)  
- **npm** or **yarn**  
- **API key** for the AI backend  

### ⚙️ Installation  

1️⃣ Clone the repository:  
```bash
git clone https://github.com/OthmanTabeche/gemini-clone.git
cd gemini-clone
```

2️⃣ Install dependencies:  
```bash
npm install
```

3️⃣ Set up environment variables (see [Environment Variables](#environment-variables)).  

---

## 🚀 Usage  

Run the development server:  
```bash
npm run dev
```

Open your browser and navigate to **[http://localhost:5173](http://localhost:5173)**.  

---

## 📜 Available Scripts  

- **Start development server**:  
  ```bash
  npm run dev
  ```  
- **Build for production**:  
  ```bash
  npm run build
  ```  
- **Preview production build**:  
  ```bash
  npm run preview
  ```  
- **Run ESLint for code quality**:  
  ```bash
  npm run lint
  ```  

---

## 🔑 Environment Variables  

Create a `.env` file in the root directory and add:  

```bash
VITE_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.  

---

## 🛠 Technologies Used  

- **React** – UI framework.  
- **Vite** – Fast development & build tool.  
- **CSS** – Styling.  
- **React Context API** – State management.  
- **ESLint** – Code quality.  

---

## 👥 Contributing  

Contributions are welcome! 🚀  

1️⃣ **Fork** the repository.  
2️⃣ **Create a new branch**:  
   ```bash
   git checkout -b feature/your-feature
   ```  
3️⃣ **Commit your changes**:  
   ```bash
   git commit -m "Add your feature"
   ```  
4️⃣ **Push to the branch**:  
   ```bash
   git push origin feature/your-feature
   ```  
5️⃣ **Open a pull request**.  

---

## 📜 License  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  
