// Add Skill dynamically
function addSkill() {
    const skill = document.getElementById('skills').value;
    if (skill) {
        const list = document.getElementById('skillsList');
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = skill;
        list.appendChild(li);
        document.getElementById('skills').value = '';
    }
}

// Navigate to next step
function nextStep(stepNumber) {
    const currentStep = document.querySelector('.step.active');
    const nextStep = document.getElementById('step' + stepNumber);
    
    if (currentStep) {
        currentStep.classList.remove('active');
    }
    nextStep.classList.add('active');
    
    // Update progress bar
    const progress = (stepNumber - 1) * 12.5;
    document.querySelector('.progress-bar').style.width = progress + '%';
}

function step1hide(){
    document.getElementById("resumeForm").style.display="none"
}

// Navigate to previous step
function previousStep(stepNumber) {
    const currentStep = document.querySelector('.step.active');
    const prevStep = document.getElementById('step' + stepNumber);
    
    if (currentStep) {
        currentStep.classList.remove('active');
    }
    prevStep.classList.add('active');
    
    // Update progress bar
    const progress = (stepNumber - 1) * 12.5;
    document.querySelector('.progress-bar').style.width = progress + '%';
}

// Finalize resume generation
function generateResume() {
    // Collect all data from the form and store in a variable
    const resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        experience: {
            jobTitle: document.getElementById('jobTitle').value,
            company: document.getElementById('company').value,
            startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value,
            description: document.getElementById('description').value
        },
        education: {
            degree: document.getElementById('degree').value,
            school: document.getElementById('school').value,
            eduStartDate: document.getElementById('eduStartDate').value,
            eduEndDate: document.getElementById('eduEndDate').value
        },
        skills: Array.from(document.querySelectorAll('#skillsList li')).map(skill => skill.textContent),
        projects: {
            title: document.getElementById('projectTitle').value,
            description: document.getElementById('projectDescription').value
        },
        certifications: {
            certification: document.getElementById('certification').value,
            issuedBy: document.getElementById('issuedBy').value
        },
        languages: {
            language: document.getElementById('language').value,
            proficiency: document.getElementById('proficiency').value
        },
        references: {
            referenceName: document.getElementById('referenceName').value,
            referenceContact: document.getElementById('referenceContact').value
        }
    };

    // Display resume preview in the final step
    document.getElementById('finalStep').classList.add('active');
}

// Download resume as PDF (placeholder function)
function downloadPDF() {
    alert("This feature requires a library like jsPDF for PDF generation.");
}

// Download resume as Word (placeholder function)
function downloadWord() {
    alert("This feature requires a library like FileSaver.js for Word generation.");
}
// Initialize the current step and total steps
let currentStep = 1;
const totalSteps = 8;

// Update progress bar and step visibility
function updateProgressBar() {
    const progress = (currentStep / totalSteps) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
    document.querySelector('.progress-bar').setAttribute('aria-valuenow', progress);
}

// Show the current step and hide the others
function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.style.display = 'none'); // Hide all steps
    document.getElementById(`step${step}`).style.display = 'block'; // Show current step
}

// Navigate to the next step
function nextStep(step) {
    // Hide the current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Move to the next step
    currentStep = step;
    
    // Show the new step and update progress
    showStep(currentStep);
    updateProgressBar();
}

// Navigate to the previous step
function previousStep(step) {
    // Hide the current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Move to the previous step
    currentStep = step;
    
    // Show the new step and update progress
    showStep(currentStep);
    updateProgressBar();
}

// Generate Resume (Dummy Function for Now)
function generateResume() {
    alert("Resume generated! Now you can download it.");
    document.getElementById('finalStep').style.display = 'block'; // Show the final step for download
}

// Dummy Functions to Simulate Resume Download
function downloadPDF() {
    alert("Downloading as PDF...");
}

function downloadWord() {
    alert("Downloading as Word...");
}

// Initialize the first step and progress bar on load
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
    updateProgressBar();
});
