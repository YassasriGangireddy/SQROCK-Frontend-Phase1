/* ================= SEARCH JOBS ================= */

function searchJobs() {

    const jobSearch = document
        .getElementById("jobSearch")
        .value
        .toLowerCase()
        .trim();

    const locationSearch = document
        .getElementById("locationSearch")
        .value
        .toLowerCase()
        .trim();

    const jobCards = document.querySelectorAll(".job-card");

    let found = false;

    jobCards.forEach(function(card) {

        const jobTitle = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const company = card
            .querySelector("h4")
            .textContent
            .toLowerCase();

        const location = card
            .querySelectorAll("p")[0]
            .textContent
            .toLowerCase();

        const matchesJob =
            jobSearch === "" ||
            jobTitle.includes(jobSearch) ||
            company.includes(jobSearch);

        const matchesLocation =
            locationSearch === "" ||
            location.includes(locationSearch);

        if (matchesJob && matchesLocation) {
            card.style.display = "flex";
            found = true;
        } else {
            card.style.display = "none";
        }

    });

    if (!found) {
        alert("No jobs found. Try another keyword or location.");
    }
}


/* ================= SAVE JOB ================= */

function saveJob(button) {

    if (button.textContent.trim() === "♡") {

        button.textContent = "♥";

        alert("Job saved successfully!");

    } else {

        button.textContent = "♡";

        alert("Job removed from saved jobs.");

    }
}


/* ================= APPLY JOB ================= */

function applyJob(jobTitle) {

    const confirmApply = confirm(
        "Do you want to apply for " + jobTitle + "?"
    );

    if (confirmApply) {

        alert(
            "Application submitted successfully for " +
            jobTitle +
            "!"
        );

    }

}


/* ================= LOGIN ================= */

function loginUser() {

    alert("Login successful!");

}


/* ================= REGISTER ================= */

function registerUser() {

    alert("Account created successfully!");

}


/* ================= EMPLOYER DASHBOARD ================= */

function postJob() {

    alert(
        "Post Job feature is ready for employer integration."
    );

}


function editJob() {

    alert(
        "Edit Job feature is ready."
    );

}


function deleteJob() {

    const confirmDelete = confirm(
        "Are you sure you want to delete this job?"
    );

    if (confirmDelete) {

        alert("Job deleted successfully!");

    }

}


/* ================= ENTER KEY SEARCH ================= */

document.addEventListener("DOMContentLoaded", function() {

    const jobSearch = document.getElementById("jobSearch");
    const locationSearch = document.getElementById("locationSearch");

    jobSearch.addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchJobs();
        }

    });

    locationSearch.addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchJobs();
        }

    });

});