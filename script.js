// Constants for calculation weights
const EFFORT_WEIGHT = 0.4;
const COMPLEXITY_WEIGHT = 0.3;
const DEPENDENCIES_WEIGHT = 0.3;

// Track saved tasks for CSV export
let savedTasks = [];

document.addEventListener('DOMContentLoaded', function() {
    // Form submission event - ENSURING THE PREVENTION OF DEFAULT BEHAVIOR
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault(); // This line is critical - it prevents the form from submitting and refreshing
        calculatePoints();
    });
    
    // Reset button event
    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('calculatorForm').reset();
        document.getElementById('resultContainer').classList.add('d-none');
    });
    
    // Save button event
    document.getElementById('saveButton').addEventListener('click', function() {
        saveTask();
    });
});

function calculatePoints() {
    // Get task-specific values
    const taskType = document.getElementById('taskType').value;
    const similarTask = document.getElementById('similarTask').value;
    
    // Get core metric values
    const effortValue = parseInt(document.getElementById('effortTime').value);
    const complexityValue = parseInt(document.getElementById('complexity').value);
    const dependenciesValue = parseInt(document.getElementById('dependencies').value);
    
    // Apply adjustments based on task type and similarity
    let adjustedComplexity = complexityValue;
    let adjustedEffort = effortValue;
    
    // Apply complexity adjustments based on task type
    if (taskType === "copy" || taskType === "social") {
        adjustedComplexity = Math.max(1, complexityValue - 1); // Reduce complexity for simpler tasks
    } else if (taskType === "seo" || taskType === "ppc") {
        // No adjustment - these are standard complexity
    } else if (taskType === "landing" || taskType === "email" || taskType === "analytics") {
        // Slight adjustment for mid-complexity tasks
        if (complexityValue < 2) adjustedComplexity = 2; // Minimum complexity level
    } else if (taskType === "product" || taskType === "nurture" || taskType === "webinar") {
        adjustedComplexity = Math.min(8, complexityValue + 1); // Increase complexity for more complex tasks
    }
    
    // Apply effort adjustments based on task type and similarity
    if (taskType === "copy" && effortValue > 3) {
        adjustedEffort = 3; // Cap effort for copy tasks
    } else if (taskType === "landing" && effortValue < 3) {
        adjustedEffort = 3; // Minimum effort for landing pages
    } else if (taskType === "product" && effortValue < 5) {
        adjustedEffort = 5; // Minimum effort for product launches
    }
    
    // Further adjust based on similarity to previous tasks
    if (similarTask === "repeat") {
        adjustedEffort = Math.max(1, adjustedEffort - 2); // Significantly reduce effort for repeat tasks
    } else if (similarTask === "very") {
        adjustedEffort = Math.max(1, adjustedEffort - 1); // Reduce effort for very similar tasks
    } else if (similarTask === "no") {
        adjustedEffort = Math.min(8, adjustedEffort + 1); // Increase effort for brand new tasks
    }
    
    // Calculate the weighted factors
    const effortFactor = EFFORT_WEIGHT * adjustedEffort;
    const complexityFactor = COMPLEXITY_WEIGHT * adjustedComplexity;
    const dependenciesFactor = DEPENDENCIES_WEIGHT * dependenciesValue;
    
    let rawPoints = effortFactor + complexityFactor + dependenciesFactor;
    
    // Map to Fibonacci sequence (1, 2, 3, 5, 8, 13, 21)
    const fibonacci = [1, 2, 3, 5, 8, 13, 21];
    let closestIndex = 0;
    
    for (let i = 0; i < fibonacci.length; i++) {
        if (Math.abs(fibonacci[i] - rawPoints) < Math.abs(fibonacci[closestIndex] - rawPoints)) {
            closestIndex = i;
        }
    }
    
    const calculatedPoints = fibonacci[closestIndex];
    
    // Store the calculated points for saving later
    window.calculatedPoints = calculatedPoints;
    
    // Display the result
    document.getElementById('storyPointValue').innerText = calculatedPoints;
    
    // Generate task-specific recommendations and notes
    let taskSpecificNotes = "";
    if (taskType !== "none") {
        if (taskType === "copy" && calculatedPoints > 3) {
            taskSpecificNotes += "<p class='text-warning'><strong>Suggestion:</strong> Copy changes typically range from 1-3 points. Consider breaking this into smaller tasks.</p>";
        } else if (taskType === "social" && calculatedPoints > 5) {
            taskSpecificNotes += "<p class='text-warning'><strong>Suggestion:</strong> Social media tasks typically range from 1-5 points. This seems high - consider splitting it up.</p>";
        } else if (taskType === "landing" && calculatedPoints < 3) {
            taskSpecificNotes += "<p class='text-warning'><strong>Note:</strong> Landing pages typically require at least 3 points. Double-check if this estimate is sufficient.</p>";
        } else if (taskType === "webinar" && calculatedPoints < 5) {
            taskSpecificNotes += "<p class='text-warning'><strong>Warning:</strong> Webinars typically require 5+ points due to coordination and preparation needs.</p>";
        } else if (taskType === "product" && calculatedPoints < 8) {
            taskSpecificNotes += "<p class='text-warning'><strong>Warning:</strong> Product launches typically require 8+ points. This estimate seems low.</p>";
        } else if (taskType === "nurture" && calculatedPoints < 5) {
            taskSpecificNotes += "<p class='text-warning'><strong>Note:</strong> Lead nurture flows usually require 5+ points due to multiple touchpoints and testing.</p>";
        } else if ((taskType === "analytics" || taskType === "research") && calculatedPoints < 3) {
            taskSpecificNotes += "<p class='text-warning'><strong>Note:</strong> Analytics and research tasks typically require 3+ points to ensure quality insights.</p>";
        }
    }
    
    // Create the explanation HTML
    let effortAdj = "";
    if (adjustedEffort !== effortValue) {
        effortAdj = ` <span class="text-info">(adjusted from ${effortValue} based on task similarity)</span>`;
    }
    
    let complexityAdj = "";
    if (adjustedComplexity !== complexityValue) {
        complexityAdj = ` <span class="text-info">(adjusted from ${complexityValue} based on task type)</span>`;
    }
    
    const effortCalc = (adjustedEffort * EFFORT_WEIGHT).toFixed(1);
    const complexityCalc = (adjustedComplexity * COMPLEXITY_WEIGHT).toFixed(1);
    const dependenciesCalc = (dependenciesValue * DEPENDENCIES_WEIGHT).toFixed(1);
    const rawPointsFormatted = rawPoints.toFixed(1);
    
    const explanationHTML = `
        <p><strong>Calculation breakdown:</strong></p>
        <ul>
            <li>Effort (${adjustedEffort}${effortAdj}) × ${EFFORT_WEIGHT} = ${effortCalc}</li>
            <li>Complexity (${adjustedComplexity}${complexityAdj}) × ${COMPLEXITY_WEIGHT} = ${complexityCalc}</li>
            <li>Dependencies (${dependenciesValue}) × ${DEPENDENCIES_WEIGHT} = ${dependenciesCalc}</li>
        </ul>
        <p><strong>Raw score:</strong> ${rawPointsFormatted}</p>
        <p><strong>Mapped to nearest Fibonacci number:</strong> ${calculatedPoints}</p>
        ${taskSpecificNotes}
    `;
    
    document.getElementById('explanation').innerHTML = explanationHTML;
    document.getElementById('resultContainer').classList.remove('d-none');
}

function saveTask() {
    const taskName = document.getElementById('taskName').value;
    const taskTypeElement = document.getElementById('taskType');
    const taskType = taskTypeElement.options[taskTypeElement.selectedIndex].text;
    
    const similarTaskElement = document.getElementById('similarTask');
    const similarTask = similarTaskElement.options[similarTaskElement.selectedIndex].text;
    
    const effortTimeElement = document.getElementById('effortTime');
    const effortTime = effortTimeElement.options[effortTimeElement.selectedIndex].text;
    
    const complexityElement = document.getElementById('complexity');
    const complexity = complexityElement.options[complexityElement.selectedIndex].text;
    
    const dependenciesElement = document.getElementById('dependencies');
    const dependencies = dependenciesElement.options[dependenciesElement.selectedIndex].text;
    
    const dateAdded = new Date().toISOString().split('T')[0];
    
    // Create task object
    const task = {
        taskName,
        taskType,
        similarTask,
        storyPoints: window.calculatedPoints,
        effortTime,
        complexity,
        dependencies,
        dateAdded
    };
    
    // Add to saved tasks array
    savedTasks.push(task);
    
    // Create CSV content
    let csvContent = 'Task Name,Task Type,Similarity,Story Points,Effort,Complexity,Dependencies,Date Added\n';
    
    savedTasks.forEach(task => {
        const row = [
            `"${task.taskName}"`,
            `"${task.taskType}"`,
            `"${task.similarTask}"`,
            task.storyPoints,
            `"${task.effortTime}"`,
            `"${task.complexity}"`,
            `"${task.dependencies}"`,
            `"${task.dateAdded}"`
        ].join(',');
        
        csvContent += row + '\n';
    });
    
    // Create download link
    const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'story_points_' + dateAdded + '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('Task saved to CSV! You can import this file into your spreadsheet.');
}
