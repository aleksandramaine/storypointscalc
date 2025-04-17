// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Growth Marketing Story Points Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="calculator-container">
            <h2 class="text-center mb-4">Story Points Calculator</h2>
            
            <form id="calculatorForm">
                <div class="mb-3">
                    <label for="taskName" class="form-label">Task Name</label>
                    <input type="text" class="form-control" id="taskName" required>
                </div>
                
                <div class="mb-3">
                    <label for="taskType" class="form-label">Marketing Activity Type</label>
                    <select class="form-select" id="taskType" required>
                        <option value="" selected disabled>-- Select activity type --</option>
                        <option value="copy">Simple Copy Changes (blog, website text)</option>
                        <option value="social">Social Media Post/Campaign</option>
                        <option value="email">Email Campaign/Newsletter</option>
                        <option value="landing">Landing Page Creation/Update</option>
                        <option value="webinar">Webinar/Virtual Event Planning</option>
                        <option value="ppc">Paid Media Setup (Search/Social)</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="content">Content Creation (guide, whitepaper)</option>
                        <option value="analytics">Analytics/Reporting Setup</option>
                        <option value="nurture">Lead Nurture Flow/Journey</option>
                        <option value="product">Product Launch Marketing</option>
                        <option value="other">Other Marketing Activity</option>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label for="similarTask" class="form-label">Have you done this before?</label>
                    <select class="form-select" id="similarTask" required>
                        <option value="no">No, this is brand new</option>
                        <option value="somewhat">Somewhat similar to previous work</option>
                        <option value="very">Very similar, we've done this before</option>
                        <option value="repeat">This is almost identical to previous work</option>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label for="effortTime" class="form-label">How much time will this task take?</label>
                    <select class="form-select" id="effortTime" required>
                        <option value="1">Very quick (< 2 hours)</option>
                        <option value="2">Small (half a day)</option>
                        <option value="3">Medium (1 day)</option>
                        <option value="5">Large (2-3 days)</option>
                        <option value="8">Very large (3-5 days)</option>
                        <option value="13">Massive (5+ days)</option>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label for="complexity" class="form-label">How complex is this task?</label>
                    <select class="form-select" id="complexity" required>
                        <option value="1">Very simple (straightforward, well-understood)</option>
                        <option value="2">Simple (minor complications)</option>
                        <option value="3">Moderate (some unknown elements)</option>
                        <option value="5">Complex (significant unknowns)</option>
                        <option value="8">Very complex (mostly unknowns, new territory)</option>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label for="dependencies" class="form-label">External dependencies and stakeholders?</label>
                    <select class="form-select" id="dependencies" required>
                        <option value="1">None (I can do this independently)</option>
                        <option value="2">Few (need input from 1-2 people)</option>
                        <option value="3">Several (need approval or resources from another team)</option>
                        <option value="5">Many (coordinating with multiple teams)</option>
                        <option value="8">Critical (blocked until external parties deliver)</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-primary w-100">Calculate Story Points</button>
            </form>
            
            <div id="resultContainer" class="mt-4 d-none">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">Recommended Story Points</h5>
                    </div>
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <span id="storyPointValue" class="display-4"></span>
                        </div>
                        <div id="explanation" class="small"></div>
                    </div>
                    <div class="card-footer">
                        <button id="resetButton" class="btn btn-outline-secondary w-100">Reset Calculator</button>
                        <button id="saveButton" class="btn btn-success w-100 mt-2">Save as CSV</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-4 text-center">
            <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#referenceModal">
                View Story Points Reference
            </button>
        </div>
        
        <div class="modal fade" id="referenceModal" tabindex="-1" aria-labelledby="referenceModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="referenceModalLabel">Story Points Reference</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Story Points</th>
                                        <th>Effort & Time</th>
                                        <th>What It Means</th>
                                        <th>Dependencies</th>
                                        <th>Examples</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Very quick (< 2 hours)</td>
                                        <td>Trivial task, well-understood</td>
                                        <td>No dependencies</td>
                                        <td>Quick copy updates, minor CSS tweaks</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Small (half a day)</td>
                                        <td>Simple task with clear requirements</td>
                                        <td>Minimal dependencies</td>
                                        <td>Adding a CTA button, simple email setup</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Medium (1 day)</td>
                                        <td>Moderate complexity, mostly understood</td>
                                        <td>Some dependencies</td>
                                        <td>Creating a basic landing page, simple campaign</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Large (2-3 days)</td>
                                        <td>Complex task with some unknowns</td>
                                        <td>Multiple dependencies</td>
                                        <td>New email flow, complex landing page</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Very large (3-5 days)</td>
                                        <td>Very complex with significant unknowns</td>
                                        <td>Many dependencies</td>
                                        <td>New feature, complex automation flow</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Massive (5+ days)</td>
                                        <td>Extremely complex project with many unknowns</td>
                                        <td>Critical external dependencies</td>
                                        <td>New platform integration, major campaign launch</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

// styles.css
body {
    background-color: #f8f9fa;
    padding: 20px 0;
}

.calculator-container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 20px auto;
    max-width: 700px;
}

#storyPointValue {
    font-size: 5rem;
    font-weight: bold;
    color: #0d6efd;
}

.table th {
    background-color: #0d6efd;
    color: white;
}

// script.js
// Constants for calculation weights
const EFFORT_WEIGHT = 0.4;
const COMPLEXITY_WEIGHT = 0.3;
const DEPENDENCIES_WEIGHT = 0.3;

// Track saved tasks for CSV export
let savedTasks = [];

document.addEventListener('DOMContentLoaded', function() {
    // Form submission event
    document.getElementById('calculatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
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
