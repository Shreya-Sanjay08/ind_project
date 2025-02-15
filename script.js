// Redirect Student to Dashboard
function redirectToStudent() {
    window.location.href = "student.html";
}

// Show Teacher Login Form
function showTeacherLogin() {
    document.getElementById("teacher-login").classList.remove("hidden");
}

// Validate Teacher Login
function validateTeacher() {
    const password = document.getElementById("teacher-password").value;
    if (password === "admin123") { // Change this to a more secure method in real applications
        window.location.href = "teacher.html";
    } else {
        document.getElementById("error-msg").innerText = "Incorrect Password!";
    }
}

// Fetch Student Data (Simulated Example)
document.addEventListener("DOMContentLoaded", function() {
    const studentInfo = document.getElementById("student-info");
    const gradesTable = document.getElementById("grades-table");
    const attendanceWarning = document.getElementById("attendance-warning");
    
    // Simulated Data (Replace with Firebase Fetch)
    const studentData = {
        name: "John Doe",
        attendance: 70, // in %
        grades: [
            { subject: "Math", grade: "A" },
            { subject: "Science", grade: "B" },
            { subject: "History", grade: "C" }
        ]
    };

    studentInfo.innerText = `Welcome, ${studentData.name}. Your attendance is ${studentData.attendance}%.`;

    studentData.grades.forEach(g => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${g.subject}</td><td>${g.grade}</td>`;
        gradesTable.appendChild(row);
    });

    if (studentData.attendance < 75) {
        attendanceWarning.innerText = "⚠️ Warning: Your attendance is low!";
    }
});

// Fetch Teacher Data (Simulated Example)
document.addEventListener("DOMContentLoaded", function() {
    const teacherDataTable = document.getElementById("teacher-data");

    if (teacherDataTable) {
        const students = [
            { name: "John Doe", attendance: 70, grades: "A, B, C" },
            { name: "Jane Smith", attendance: 85, grades: "A, A, B" }
        ];

        students.forEach(s => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${s.name}</td><td>${s.attendance}%</td><td>${s.grades}</td>`;
            teacherDataTable.appendChild(row);
        });
    }
});
