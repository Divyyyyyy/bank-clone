// Dummy credentials
const dummyUsers = {
    personal: { username: "user123", password: "pass123" },
    corporate: { username: "corp123", password: "corp456" }
};

// Detect account type from URL
const params = new URLSearchParams(window.location.search);
const type = params.get("type");

if (document.getElementById("loginTitle")) {
    document.getElementById("loginTitle").innerText =
        type === "corporate" ? "Corporate Login" : "Personal Login";
}

// Form submission
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const msg = document.getElementById("msg");

        const correct = dummyUsers[type];

        if (username === correct.username && password === correct.password) {
            window.location.href = "dashboard.html";
        } else {
            msg.innerText = "Invalid username or password!";
            msg.style.color = "red";
        }
    });
}
