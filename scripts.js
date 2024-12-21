// JavaScript for Interactive Resume Builder

// Function to navigate to the next step
function nextStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach((step) => {
        step.style.display = 'none';
    });

    // Show the next step
    document.getElementById(`step${stepNumber}`).style.display = 'block';

    // Update progress bar
    updateProgress(stepNumber);
}

// Function to navigate to the previous step
function previousStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach((step) => {
        step.style.display = 'none';
    });

    // Show the previous step
    document.getElementById(`step${stepNumber}`).style.display = 'block';

    // Update progress bar
    updateProgress(stepNumber);
}

// Function to update the progress bar
function updateProgress(currentStep) {
    const progressBar = document.querySelector('.progress-bar');
    const progressPercentage = (currentStep / 8) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', progressPercentage);
}

// Function to add a skill to the list
function addSkill() {
    const skillsInput = document.getElementById('skills');
    const skillsList = document.getElementById('skillsList');
    const skill = skillsInput.value.trim();

    if (skill) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = skill;

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm';
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            skillsList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        skillsList.appendChild(listItem);

        // Clear input field
        skillsInput.value = '';
    }
}

// Function to generate the resume
function generateResume() {
    const resumeData = collectFormData();
    displayResumePreview(resumeData);
    nextStep(9); // Assuming step 9 is for preview/download
}

// Function to collect form data
function collectFormData() {
    return {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        jobTitle: document.getElementById('jobTitle').value.trim(),
        company: document.getElementById('company').value.trim(),
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        description: document.getElementById('description').value.trim(),
        degree: document.getElementById('degree').value.trim(),
        school: document.getElementById('school').value.trim(),
        eduStartDate: document.getElementById('eduStartDate').value,
        eduEndDate: document.getElementById('eduEndDate').value,
        skills: Array.from(document.getElementById('skillsList').children).map((item) => item.textContent.trim()),
        projectTitle: document.getElementById('projectTitle').value.trim(),
        projectDescription: document.getElementById('projectDescription').value.trim(),
        certification: document.getElementById('certification').value.trim(),
        issuedBy: document.getElementById('issuedBy').value.trim(),
        language: document.getElementById('language').value.trim(),
        proficiency: document.getElementById('proficiency').value.trim(),
        referenceName: document.getElementById('referenceName').value.trim(),
        referenceContact: document.getElementById('referenceContact').value.trim()
    };
}

// Function to display a preview of the resume (optional)
function displayResumePreview(data) {
    // Example implementation (you can customize this)
    console.log('Resume Preview Data:', data);

    alert("Resume preview generation feature in progress!");
}

// Function to download the resume as a PDF
function downloadPDF() {
    alert("PDF download feature is under development!");
}

// Function to download the resume as a Word document
function downloadWord() {
    alert("Word document download feature is under development!");
}
