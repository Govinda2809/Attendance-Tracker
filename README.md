# 📊 Attendance Tracker

A simple and elegant web application to track your attendance for different subjects. Monitor your attendance percentage in real-time with visual progress bars and automatic warnings when attendance drops below 75%.

## ✨ Features

- ✅ **Add Subjects** - Easily add subjects/classes you need to track
- 📈 **Track Attendance** - Mark present or absent for each subject
- 📊 **Real-time Statistics** - View attendance percentage for each subject
- ⚠️ **Attendance Warnings** - Get alerts when attendance falls below 75%
- 💾 **Auto-Save** - Data is automatically saved to your browser using localStorage
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 🗑️ **Manage Subjects** - Delete subjects you no longer need

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Enter a subject name and click **Add Subject**
3. Use **Present** button when you attend a class
4. Use **Absent** button when you miss a class
5. Monitor your attendance percentage and warnings
6. Click **Delete** to remove a subject

## 📁 Project Structure

```
Attendance Tracker/
├── index.html      # HTML structure
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🛠️ Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling with gradient backgrounds and animations
- **JavaScript (ES6)** - Dynamic functionality
- **localStorage API** - Data persistence

## 💡 How It Works

- Each subject stores: name, present count, and total attendance count
- Attendance percentage is calculated as: `(Present / Total) × 100`
- ✅ **Green indicator** appears when attendance is 75% or above
- ⚠️ **Warning indicator** appears when attendance is below 75%
- Data persists even after closing the browser

## 📱 Features Breakdown

### Attendance Calculation
- Attends a class → Click **Present** (both present and total increases)
- Misses a class → Click **Absent** (only total increases)

### Storage
- All data is saved in browser's localStorage
- Data persists across browser sessions
- Clear browser data to reset

## 🎯 Minimum Attendance

- 75% is considered good attendance
- Below 75% triggers a warning to help you maintain your academic standards

## 📝 Example

If you have a subject with:
- Present: 18 classes
- Total: 25 classes
- Attendance: 72% (Below 75% - ⚠️ Warning)

## 🔗 Live Demo

Open `index.html` in your browser to start tracking your attendance immediately!

## 📄 License

This project is free to use and modify.

---

**Made with ❤️ for students**
