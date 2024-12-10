document.getElementById("generate-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    const resumeOutput = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    const outputDiv = document.getElementById("resume-output");
    outputDiv.innerHTML = resumeOutput;

    document.getElementById("resume-preview").style.display = "block";
});

// Optional: Add download functionality
document.getElementById("download-btn").addEventListener("click", () => {
    const element = document.createElement("a");
    const content = document.getElementById("resume-output").innerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    element.href = url;
    element.download = "resume.html";
    element.click();
    URL.revokeObjectURL(url);
});
