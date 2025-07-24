
var careerFields = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    icon: 'code',
    posts: 234,
    members: 1567,
    description: 'Build applications, systems, and solutions that power the digital world'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: 'bar-chart-2',
    posts: 189,
    members: 892,
    description: 'Extract insights from data to drive business decisions'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'trending-up',
    posts: 156,
    members: 743,
    description: 'Promote brands and products in the digital landscape'
  },
  {
    id: 'product-management',
    title: 'Product Management',
    icon: 'package',
    posts: 98,
    members: 456,
    description: 'Guide products from conception to market success'
  },
  {
    id: 'ux-design',
    title: 'UX/UI Design',
    icon: 'figma',
    posts: 167,
    members: 623,
    description: 'Create intuitive and beautiful user experiences'
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    icon: 'dollar-sign',
    posts: 134,
    members: 789,
    description: 'Manage money, investments, and financial planning'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'heart',
    posts: 112,
    members: 934,
    description: 'Provide care and improve human health outcomes'
  },
  {
    id: 'education',
    title: 'Education',
    icon: 'book-open',
    posts: 87,
    members: 567,
    description: 'Shape minds and foster learning at all levels'
  }
];


var samplePosts = {};
samplePosts['software-engineering'] = [
  {
    id: 1,
    type: 'question',
    title: 'How to transition from frontend to full-stack development?',
    content: 'I\'ve been working as a frontend developer for 2 years and want to expand my skills to become full-stack. What backend technologies should I learn first?',
    author: 'Sarah Chen',
    authorLevel: 'mid',
    skills: ['JavaScript', 'React', 'Career Transition'],
    likes: 23,
    comments: 8,
    timestamp: '2 hours ago',
    replies: [
      {
        id: 101,
        content: 'Great question! Since you already know JavaScript, I\'d recommend starting with Node.js for the backend. It allows you to use the same language on both frontend and backend. After that, learn Express.js for building APIs and MongoDB for database management. This stack will give you a solid foundation.',
        author: 'Mike Rodriguez',
        isTeacher: true,
        timestamp: '1 hour ago'
      },
      {
        id: 102,
        content: 'I agree with Mike! Also consider learning about REST APIs, authentication (JWT), and basic DevOps concepts like Docker. These are essential skills that employers look for in full-stack developers. Feel free to reach out if you need specific learning resources!',
        author: 'Jennifer Liu',
        isTeacher: true,
        timestamp: '45 minutes ago'
      }
    ]
  },
  {
    id: 2,
    type: 'tutorial',
    title: 'Building Your First REST API with Node.js',
    content: 'A comprehensive guide to creating a REST API from scratch using Node.js and Express. Includes authentication, database integration, and deployment tips.',
    author: 'Mike Rodriguez',
    authorLevel: 'senior',
    isMentor: true,
    skills: ['Node.js', 'Express', 'REST API', 'MongoDB'],
    likes: 67,
    comments: 15,
    timestamp: '1 day ago'
  },
  {
    id: 3,
    type: 'experience',
    title: 'My Journey from Bootcamp to Senior Developer',
    content: 'Sharing my 4-year journey from completing a coding bootcamp to landing a senior developer role at a Fortune 500 company. Key learnings and advice included.',
    author: 'Alex Kim',
    authorLevel: 'senior',
    skills: ['Career Growth', 'Professional Development'],
    likes: 134,
    comments: 42,
    timestamp: '3 days ago'
  }
];

samplePosts['data-science'] = [
  {
    id: 4,
    type: 'article',
    title: 'Essential Python Libraries for Data Science in 2025',
    content: 'An updated guide to the most important Python libraries every data scientist should know, including new additions and updated best practices.',
    author: 'Dr. Emily Watson',
    authorLevel: 'expert',
    isMentor: true,
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    likes: 89,
    comments: 21,
    timestamp: '5 hours ago'
  }
];

var sampleSkills = {};
sampleSkills['software-engineering'] = [
  {
    name: 'Advanced React Patterns', 
    level: 'Advanced', 
    description: 'Master complex React patterns including Higher-Order Components, Render Props, and Custom Hooks to build scalable applications.',
    author: 'Jennifer Liu',
    isMentor: true,
    prerequisites: ['JavaScript', 'React Basics', 'ES6+'],
    resources: 'Official React docs: https://react.dev/reference/react\nAdvanced patterns guide: https://reactpatterns.com\nPractice project: Build a dashboard with custom hooks'
  },
  {
    name: 'JavaScript', 
    level: 'Essential', 
    description: 'Programming language for web development - the foundation of modern web applications.',
    author: 'Mike Rodriguez',
    isMentor: true,
    prerequisites: ['Basic programming concepts'],
    resources: 'MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript\nJavaScript.info tutorial\nPractice on Codewars.com'
  },
  {
    name: 'System Design Fundamentals', 
    level: 'Expert', 
    description: 'Learn to design scalable, reliable systems that can handle millions of users. Essential for senior engineering roles.',
    author: 'Jennifer Liu',
    isMentor: true,
    prerequisites: ['Database Design', 'Web APIs', 'Networking Basics'],
    resources: 'System Design Interview book\nDesigning Data-Intensive Applications\nPractice with real-world system design problems'
  },
  {name: 'Python', level: 'Important', description: 'Versatile programming language'},
  {name: 'Node.js', level: 'Backend', description: 'Server-side JavaScript runtime'},
  {name: 'Git', level: 'Essential', description: 'Version control system'},
  {name: 'SQL', level: 'Important', description: 'Database query language'}
];

sampleSkills['data-science'] = [
  {
    name: 'Machine Learning Model Deployment', 
    level: 'Advanced', 
    description: 'Learn to deploy ML models in production using Docker, Kubernetes, and cloud platforms. Bridge the gap between development and real-world applications.',
    author: 'Dr. Emily Watson',
    isMentor: true,
    prerequisites: ['Python', 'Machine Learning Basics', 'API Development'],
    resources: 'MLOps course on Coursera\nDocker for Data Science\nAWS SageMaker documentation\nPractice: Deploy a model using FastAPI'
  },
  {name: 'Python', level: 'Essential', description: 'Primary programming language for data science'},
  {name: 'R', level: 'Important', description: 'Statistical programming language'},
  {name: 'SQL', level: 'Essential', description: 'Database querying and manipulation'},
  {name: 'Machine Learning', level: 'Core', description: 'Algorithms and model building'},
  {name: 'Statistics', level: 'Core', description: 'Mathematical foundation for analysis'},
  {name: 'Data Visualization', level: 'Important', description: 'Presenting insights effectively'}
];


var sampleMentors = {};
sampleMentors['software-engineering'] = [
  {
    name: 'Jennifer Liu',
    title: 'Senior Software Architect',
    company: 'Google',
    experience: '12 years',
    specialties: ['System Design', 'Microservices', 'Leadership'],
    rating: 4.9,
    sessions: 156
  },
  {
    name: 'David Johnson',
    title: 'Full Stack Lead Developer',
    company: 'Microsoft',
    experience: '8 years',
    specialties: ['React', 'Node.js', 'Azure'],
    rating: 4.8,
    sessions: 89
  }
];


var currentUser = {
  name: 'Aditya Bodapati',
  title: 'Software Engineer',
  skills: ['HTML', 'CSS', 'Javascript'],
  experience: 'mid',
  role: null,
  expertiseField: null
};


function startApp() {
  feather.replace();

  
  showCareerFields();
  if (currentUser.role === null) {
    showRoleModal();
  }
}

function showCareerFields() {
  var grid = document.getElementById('careerGrid');

  grid.innerHTML = '';

  for (var i = 0; i < careerFields.length; i++) {
    var field = careerFields[i];

    
    var isExpertiseField = currentUser.role === 'teacher' && currentUser.expertiseField === field.id;
    var cardClass = 'career-card';
    var titleStyle = '';
    var mentorBadge = '';

    if (isExpertiseField) {
      cardClass += ' expertise-field';
      titleStyle = 'font-weight: bold; color: #667eea;';
      mentorBadge = '<div style="position: absolute; top: 15px; right: 15px; background: #28a745; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.7rem; display: flex; align-items: center; gap: 3px;"><i data-feather="award" style="width: 10px; height: 10px;"></i>Your Field</div>';
    }

   
    var cardHTML = '<div class="' + cardClass + '" onclick="openCareerField(\'' + field.id + '\')" style="position: relative;">';
    cardHTML += mentorBadge;
    cardHTML += '<div class="career-icon">';
    cardHTML += '<i data-feather="' + field.icon + '" style="color: white;"></i>';
    cardHTML += '</div>';
    cardHTML += '<div class="career-title" style="' + titleStyle + '">' + field.title + '</div>';
    cardHTML += '<p style="color: #666; margin-bottom: 15px;">' + field.description + '</p>';
    cardHTML += '<div class="career-stats">';
    cardHTML += '<span><i data-feather="message-square" style="width: 16px; height: 16px;"></i> ' + field.posts + ' posts</span>';
    cardHTML += '<span class="members-count" onclick="showMembers(\'' + field.id + '\'); event.stopPropagation();"><i data-feather="users" style="width: 16px; height: 16px;"></i> ' + field.members + ' members</span>';
    cardHTML += '</div>';
    cardHTML += '</div>';

    grid.innerHTML += cardHTML;
  }

  feather.replace();
}

function searchCareers() {
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();

  var filteredFields = [];
  for (var i = 0; i < careerFields.length; i++) {
    var field = careerFields[i];
    var titleMatch = field.title.toLowerCase().indexOf(searchTerm) !== -1;
    var descriptionMatch = field.description.toLowerCase().indexOf(searchTerm) !== -1;

    if (titleMatch || descriptionMatch) {
      filteredFields.push(field);
    }
  }

  var grid = document.getElementById('careerGrid');

  if (filteredFields.length === 0) {
    grid.innerHTML = '<div style="text-align: center; color: white; font-size: 1.2rem;">No career fields found matching your search.</div>';
    return;
  }

  grid.innerHTML = '';
  for (var i = 0; i < filteredFields.length; i++) {
    var field = filteredFields[i];

    var cardHTML = '<div class="career-card" onclick="openCareerField(\'' + field.id + '\')">';
    cardHTML += '<div class="career-icon">';
    cardHTML += '<i data-feather="' + field.icon + '" style="color: white;"></i>';
    cardHTML += '</div>';
    cardHTML += '<div class="career-title">' + field.title + '</div>';
    cardHTML += '<p style="color: #666; margin-bottom: 15px;">' + field.description + '</p>';
    cardHTML += '<div class="career-stats">';
    cardHTML += '<span><i data-feather="message-square" style="width: 16px; height: 16px;"></i> ' + field.posts + ' posts</span>';
    cardHTML += '<span class="members-count" onclick="showMembers(\'' + field.id + '\'); event.stopPropagation();"><i data-feather="users" style="width: 16px; height: 16px;"></i> ' + field.members + ' members</span>';
    cardHTML += '</div>';
    cardHTML += '</div>';

    grid.innerHTML += cardHTML;
  }

  feather.replace();
}

function showMembers(fieldId) {
  var field = null;
  for (var i = 0; i < careerFields.length; i++) {
    if (careerFields[i].id === fieldId) {
      field = careerFields[i];
      break;
    }
  }

  if (!field) return;
  var sampleMembers = [];

  if (fieldId === 'software-engineering') {
    sampleMembers = [
      {
        name: 'Sarah Chen',
        title: 'Frontend Developer',
        skills: ['JavaScript', 'React', 'CSS', 'HTML', 'TypeScript'],
        experience: 'Mid Level',
        canHelp: ['React', 'JavaScript', 'Frontend Development']
      },
      {
        name: 'Mike Rodriguez',
        title: 'Senior Full Stack Developer',
        skills: ['Node.js', 'Express', 'MongoDB', 'React', 'AWS'],
        experience: 'Senior Level',
        canHelp: ['Node.js', 'Express', 'Full Stack Development']
      },
      {
        name: 'Alex Kim',
        title: 'Software Architect',
        skills: ['System Design', 'Microservices', 'Leadership', 'Docker'],
        experience: 'Expert Level',
        canHelp: ['System Design', 'Architecture', 'Leadership']
      }
    ];
  } else if (fieldId === 'data-science') {
    sampleMembers = [
      {
        name: 'Dr. Emily Watson',
        title: 'Senior Data Scientist',
        skills: ['Python', 'Machine Learning', 'Statistics', 'TensorFlow'],
        experience: 'Expert Level',
        canHelp: ['Machine Learning', 'Python', 'Statistical Analysis']
      },
      {
        name: 'Robert Chang',
        title: 'Data Analyst',
        skills: ['SQL', 'Python', 'Tableau', 'Excel', 'Power BI'],
        experience: 'Mid Level',
        canHelp: ['Data Visualization', 'SQL', 'Analytics']
      },
      {
        name: 'Maya Patel',
        title: 'ML Engineer',
        skills: ['Python', 'PyTorch', 'MLOps', 'Kubernetes', 'Docker'],
        experience: 'Senior Level',
        canHelp: ['ML Engineering', 'Model Deployment', 'MLOps']
      }
    ];
  } else if (fieldId === 'digital-marketing') {
    sampleMembers = [
      {
        name: 'Jessica Martinez',
        title: 'Digital Marketing Manager',
        skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Analytics', 'Content Strategy'],
        experience: 'Senior Level',
        canHelp: ['SEO', 'Paid Advertising', 'Campaign Strategy']
      },
      {
        name: 'David Thompson',
        title: 'Social Media Specialist',
        skills: ['Social Media Marketing', 'Content Creation', 'Influencer Marketing', 'Canva'],
        experience: 'Mid Level',
        canHelp: ['Social Media', 'Content Creation', 'Brand Building']
      },
      {
        name: 'Lisa Wang',
        title: 'Email Marketing Expert',
        skills: ['Email Marketing', 'Automation', 'Segmentation', 'A/B Testing'],
        experience: 'Senior Level',
        canHelp: ['Email Campaigns', 'Marketing Automation', 'Customer Retention']
      }
    ];
  } else if (fieldId === 'product-management') {
    sampleMembers = [
      {
        name: 'Kevin Park',
        title: 'Senior Product Manager',
        skills: ['Product Strategy', 'User Research', 'Agile', 'Roadmapping', 'Analytics'],
        experience: 'Senior Level',
        canHelp: ['Product Strategy', 'User Research', 'Product Roadmaps']
      },
      {
        name: 'Amanda Foster',
        title: 'Product Owner',
        skills: ['Scrum', 'User Stories', 'Backlog Management', 'Stakeholder Management'],
        experience: 'Mid Level',
        canHelp: ['Agile Methodologies', 'Requirements Gathering', 'Team Coordination']
      }
    ];
  } else if (fieldId === 'ux-design') {
    sampleMembers = [
      {
        name: 'Rachel Green',
        title: 'UX Designer',
        skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
        experience: 'Mid Level',
        canHelp: ['UX Research', 'Design Thinking', 'Prototyping']
      },
      {
        name: 'James Wilson',
        title: 'Senior UI/UX Designer',
        skills: ['Sketch', 'Adobe XD', 'Design Systems', 'Interaction Design', 'Visual Design'],
        experience: 'Senior Level',
        canHelp: ['Design Systems', 'Visual Design', 'Design Leadership']
      }
    ];
  } else if (fieldId === 'finance') {
    sampleMembers = [
      {
        name: 'Michael Brown',
        title: 'Financial Analyst',
        skills: ['Excel', 'Financial Modeling', 'Valuation', 'Bloomberg Terminal', 'Python'],
        experience: 'Mid Level',
        canHelp: ['Financial Analysis', 'Excel Modeling', 'Investment Research']
      },
      {
        name: 'Samantha Davis',
        title: 'Investment Banking Associate',
        skills: ['M&A', 'DCF Modeling', 'PowerPoint', 'Due Diligence', 'Pitch Decks'],
        experience: 'Senior Level',
        canHelp: ['Investment Banking', 'Financial Modeling', 'M&A Analysis']
      }
    ];
  } else if (fieldId === 'healthcare') {
    sampleMembers = [
      {
        name: 'Dr. Jennifer Adams',
        title: 'Registered Nurse',
        skills: ['Patient Care', 'Medical Records', 'Emergency Response', 'Communication'],
        experience: 'Senior Level',
        canHelp: ['Patient Care', 'Healthcare Protocols', 'Medical Ethics']
      },
      {
        name: 'Mark Johnson',
        title: 'Healthcare Administrator',
        skills: ['Healthcare Management', 'Policy Development', 'Budget Management', 'Compliance'],
        experience: 'Expert Level',
        canHelp: ['Healthcare Operations', 'Policy Development', 'Leadership']
      }
    ];
  } else if (fieldId === 'education') {
    sampleMembers = [
      {
        name: 'Maria Rodriguez',
        title: 'Elementary School Teacher',
        skills: ['Curriculum Development', 'Classroom Management', 'Assessment', 'Educational Technology'],
        experience: 'Senior Level',
        canHelp: ['Teaching Methods', 'Curriculum Planning', 'Student Engagement']
      },
      {
        name: 'Thomas Lee',
        title: 'Education Technology Specialist',
        skills: ['EdTech', 'LMS Administration', 'Digital Learning', 'Training'],
        experience: 'Mid Level',
        canHelp: ['Educational Technology', 'Online Learning', 'Teacher Training']
      }
    ];
  } else {
    // Default members for any other fields
    sampleMembers = [
      {
        name: 'Professional A',
        title: 'Industry Expert',
        skills: ['Leadership', 'Communication', 'Problem Solving'],
        experience: 'Senior Level',
        canHelp: ['Professional Development', 'Career Guidance']
      }
    ];
  }

  // Create the members list HTML
  var membersHTML = '<h3>Members in ' + field.title + '</h3>';
  membersHTML += '<p>Click on any member to reach out for help with their skills!</p>';

  for (var i = 0; i < sampleMembers.length; i++) {
    var member = sampleMembers[i];

    membersHTML += '<div class="post" style="cursor: pointer;" onclick="contactMember(\'' + member.name + '\')">';
    membersHTML += '<div class="post-header">';
    membersHTML += '<div>';
    membersHTML += '<span class="post-author">' + member.name + '</span>';
    membersHTML += '<span style="color: #999; margin-left: 10px;">' + member.experience + '</span>';
    membersHTML += '</div>';
    membersHTML += '<span class="post-type">Member</span>';
    membersHTML += '</div>';
    membersHTML += '<div class="post-content">';
    membersHTML += '<h3>' + member.title + '</h3>';
    membersHTML += '<p><strong>Can help with:</strong> ' + member.canHelp.join(', ') + '</p>';
    membersHTML += '<div class="skills-list">';
    for (var j = 0; j < member.skills.length; j++) {
      membersHTML += '<span class="skill-tag">' + member.skills[j] + '</span>';
    }
    membersHTML += '</div>';
    membersHTML += '<p style="margin-top: 10px; color: #666; font-style: italic;">Click to send a message for help!</p>';
    membersHTML += '</div>';
    membersHTML += '</div>';
  }

  // Show this in a simple alert for now (in a real app, this would be a proper modal)
  var membersList = document.createElement('div');
  membersList.innerHTML = membersHTML;

  // Create a simple modal to show members
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
  modal.style.zIndex = '2000';
  modal.style.padding = '20px';
  modal.style.overflow = 'auto';

  var modalContent = document.createElement('div');
  modalContent.style.backgroundColor = 'white';
  modalContent.style.maxWidth = '800px';
  modalContent.style.margin = '0 auto';
  modalContent.style.borderRadius = '20px';
  modalContent.style.padding = '30px';
  modalContent.style.position = 'relative';

  var closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '15px';
  closeButton.style.right = '20px';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.cursor = 'pointer';
  closeButton.onclick = function() {
    document.body.removeChild(modal);
  };

  modalContent.appendChild(closeButton);
  modalContent.appendChild(membersList);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

// Function to contact a member
function contactMember(memberName) {
  showToast('You can now reach out to ' + memberName + ' for help! In a real app, this would open a messaging system.', 'info', 'Contact Member');
}

// Function to create a new skill (for teachers)
function createSkill(fieldId) {
  var skillName = document.getElementById('skillName').value;
  var skillLevel = document.getElementById('skillLevel').value;
  var skillDescription = document.getElementById('skillDescription').value;
  var skillResources = document.getElementById('skillResources').value;
  var skillPrerequisites = document.getElementById('skillPrerequisites').value;

  // Validate required fields
  if (!skillName || !skillDescription) {
    showToast('Please fill in the skill name and description to create your learning content.', 'warning', 'Missing Information');
    return;
  }

  // Only teachers in their expertise field can add skills
  if (currentUser.role !== 'teacher' || currentUser.expertiseField !== fieldId) {
    showToast('Only teachers can add skills to their field of expertise.', 'error', 'Access Denied');
    return;
  }

  // Create new skill object
  var newSkill = {
    name: skillName,
    level: skillLevel,
    description: skillDescription,
    author: currentUser.name,
    isMentor: true,
    resources: skillResources || null,
    prerequisites: [],
    timestamp: 'Just now'
  };

  // Process prerequisites
  if (skillPrerequisites) {
    var prereqArray = skillPrerequisites.split(',');
    for (var i = 0; i < prereqArray.length; i++) {
      var prereq = prereqArray[i].trim();
      if (prereq) {
        newSkill.prerequisites.push(prereq);
      }
    }
  }

  // Initialize skills array if it doesn't exist
  if (!sampleSkills[fieldId]) {
    sampleSkills[fieldId] = [];
  }

  // Add new skill to the beginning of the array
  sampleSkills[fieldId].unshift(newSkill);

  // Reload the skills tab
  loadSkills(fieldId);

  // Clear the form
  document.getElementById('skillName').value = '';
  document.getElementById('skillDescription').value = '';
  document.getElementById('skillResources').value = '';
  document.getElementById('skillPrerequisites').value = '';

  showToast('Your skill has been shared successfully! Students can now learn from your expertise.', 'success', 'Skill Shared');
}

// Function to add skill to student profile
function addSkillToProfile(skillName) {
  if (currentUser.role !== 'student') {
    showToast('Only students can add skills to their learning profile.', 'warning', 'Feature for Students');
    return;
  }

  // Check if skill is already in profile
  for (var i = 0; i < currentUser.skills.length; i++) {
    if (currentUser.skills[i] === skillName) {
      showToast('This skill is already in your profile!', 'info', 'Already Added');
      return;
    }
  }

  // Add skill to user profile
  currentUser.skills.push(skillName);
  updateProfileDisplay();

  showToast('Skill "' + skillName + '" added to your profile! Keep learning and growing.', 'success', 'Skill Added');
}

// Function to start learning a skill
function startLearning(skillName) {
  if (currentUser.role !== 'student') {
    showToast('This feature is designed for students to track their learning progress.', 'info', 'Learning Feature');
    return;
  }

  var messages = [
    'Great choice! "' + skillName + '" is an valuable skill to master.',
    'Learning "' + skillName + '" will help advance your career in this field.',
    'You\'ve started learning "' + skillName + '". Check the resources provided by the mentor.',
    'Excellent! "' + skillName + '" is a skill that will set you apart in your field.'
  ];

  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  showToast(randomMessage + ' In a real app, this would track your progress and provide learning materials.', 'success', 'Learning Started');
  
  // Add to profile if not already there
  setTimeout(function() {
    addSkillToProfile(skillName);
  }, 1000);
}

// Function to contact a mentor about a specific skill
function contactMentor(mentorName) {
  if (currentUser.role !== 'student') {
    showToast('Students can reach out to mentors for guidance and support.', 'info', 'Mentoring Feature');
    return;
  }

  showToast('You can now ask ' + mentorName + ' for guidance on this skill! In a real app, this would open a direct messaging system with the mentor.', 'info', 'Contact Mentor');
}

// Function to open a specific career field modal
function openCareerField(fieldId) {
  // Find the career field information
  var field = null;
  for (var i = 0; i < careerFields.length; i++) {
    if (careerFields[i].id === fieldId) {
      field = careerFields[i];
      break;
    }
  }

  if (!field) return;

  // Update the modal title and subtitle
  document.getElementById('modalTitle').innerHTML = field.title;
  document.getElementById('modalSubtitle').innerHTML = field.description;

  // Show the modal
  document.getElementById('careerModal').style.display = 'block';

  // Load content for each tab
  loadPosts(fieldId);
  loadResources(fieldId);
  loadSkills(fieldId);
  loadMentors(fieldId);

  // Make sure we start on the first tab
  switchTab('posts');
}

// Function to load posts for a career field
function loadPosts(fieldId) {
  var posts = samplePosts[fieldId] || [];
  var container = document.getElementById('postsContainer');

  if (posts.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666;">No posts yet. Be the first to share something!</p>';
    return;
  }

  var postsHTML = '';
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    postsHTML += '<div class="post">';
    postsHTML += '<div class="post-header">';
    postsHTML += '<div>';
    postsHTML += '<span class="post-author">' + post.author + '</span>';
    if (post.isMentor) {
      postsHTML += '<span class="mentor-badge"><i data-feather="award" style="width: 12px; height: 12px;"></i>Mentor</span>';
    }
    postsHTML += '<span style="color: #999; margin-left: 10px;">' + post.timestamp + '</span>';
    postsHTML += '</div>';
    postsHTML += '<span class="post-type">' + post.type.charAt(0).toUpperCase() + post.type.slice(1) + '</span>';
    postsHTML += '</div>';
    postsHTML += '<div class="post-content">';
    postsHTML += '<h3>' + post.title + '</h3>';
    postsHTML += '<p>' + post.content + '</p>';
    postsHTML += '<div class="skills-list">';
    for (var j = 0; j < post.skills.length; j++) {
      postsHTML += '<span class="skill-tag">' + post.skills[j] + '</span>';
    }
    postsHTML += '</div>';
    postsHTML += '</div>';
    postsHTML += '<div class="engagement-stats">';
    postsHTML += '<div class="stat" onclick="likePost(' + post.id + ')">';
    postsHTML += '<i data-feather="heart" style="width: 16px; height: 16px;"></i>';
    postsHTML += '<span>' + post.likes + '</span>';
    postsHTML += '</div>';
    postsHTML += '<div class="stat" onclick="showComments(' + post.id + ')">';
    postsHTML += '<i data-feather="message-circle" style="width: 16px; height: 16px;"></i>';
    postsHTML += '<span>' + post.comments + '</span>';
    postsHTML += '</div>';
    postsHTML += '<div class="stat" onclick="sharePost(' + post.id + ')">';
    postsHTML += '<i data-feather="share-2" style="width: 16px; height: 16px;"></i>';
    postsHTML += '<span>Share</span>';
    postsHTML += '</div>';
    if (currentUser.role === 'teacher') {
      postsHTML += '<div class="stat" onclick="toggleReplyForm(' + post.id + ')" style="margin-left: auto;">';
      postsHTML += '<i data-feather="message-square" style="width: 16px; height: 16px;"></i>';
      postsHTML += '<span>Reply</span>';
      postsHTML += '</div>';
    }
    postsHTML += '</div>';
    
    // Add reply form for teachers (initially hidden)
    if (currentUser.role === 'teacher') {
      postsHTML += '<div id="replyForm-' + post.id + '" class="reply-form" style="display: none; margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #28a745;">';
      postsHTML += '<h4 style="margin-bottom: 10px; color: #28a745;"><i data-feather="user-check" style="width: 16px; height: 16px; margin-right: 5px;"></i>Teacher Response</h4>';
      postsHTML += '<textarea id="replyContent-' + post.id + '" placeholder="Share your expertise, answer questions, or provide guidance..." style="width: 100%; min-height: 80px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; resize: vertical; margin-bottom: 10px;"></textarea>';
      postsHTML += '<div style="display: flex; gap: 10px;">';
      postsHTML += '<button class="btn btn-primary" onclick="submitReply(' + post.id + ')" style="padding: 8px 16px; font-size: 14px;">';
      postsHTML += '<i data-feather="send" style="width: 14px; height: 14px;"></i>';
      postsHTML += 'Post Reply';
      postsHTML += '</button>';
      postsHTML += '<button class="btn btn-secondary" onclick="cancelReply(' + post.id + ')" style="padding: 8px 16px; font-size: 14px;">';
      postsHTML += '<i data-feather="x" style="width: 14px; height: 14px;"></i>';
      postsHTML += 'Cancel';
      postsHTML += '</button>';
      postsHTML += '</div>';
      postsHTML += '</div>';
    }
    
    // Add existing replies display
    if (post.replies && post.replies.length > 0) {
      postsHTML += '<div class="replies-container" style="margin-top: 20px; padding-left: 20px; border-left: 2px solid #e0e0e0;">';
      postsHTML += '<h4 style="margin-bottom: 15px; color: #666; font-size: 14px;"><i data-feather="corner-down-right" style="width: 14px; height: 14px; margin-right: 5px;"></i>' + post.replies.length + ' Response' + (post.replies.length > 1 ? 's' : '') + '</h4>';
      for (var k = 0; k < post.replies.length; k++) {
        var reply = post.replies[k];
        postsHTML += '<div class="reply" style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 10px; border-left: 3px solid #28a745;">';
        postsHTML += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">';
        postsHTML += '<div>';
        postsHTML += '<span style="font-weight: 600; color: #333;">' + reply.author + '</span>';
        if (reply.isTeacher) {
          postsHTML += '<span class="mentor-badge" style="margin-left: 8px;"><i data-feather="award" style="width: 10px; height: 10px;"></i>Teacher</span>';
        }
        postsHTML += '<span style="color: #999; margin-left: 10px; font-size: 12px;">' + reply.timestamp + '</span>';
        postsHTML += '</div>';
        postsHTML += '</div>';
        postsHTML += '<p style="color: #555; line-height: 1.5; margin: 0;">' + reply.content + '</p>';
        postsHTML += '</div>';
      }
      postsHTML += '</div>';
    }
    postsHTML += '</div>';
  }

  container.innerHTML = postsHTML;
  feather.replace();
}

// Function to load resources for a career field
function loadResources(fieldId) {
  var container = document.getElementById('resourcesContainer');

  // Sample resources (same for all fields for simplicity)
  var resources = [
    {
      title: 'Complete Learning Path',
      type: 'Course Series',
      description: 'Structured curriculum from beginner to advanced level',
      provider: 'Industry Experts',
      rating: 4.8,
      students: 2341
    },
    {
      title: 'Interview Preparation Guide',
      type: 'Document',
      description: 'Common questions, technical challenges, and tips',
      provider: 'Senior Professionals',
      rating: 4.9,
      students: 1876
    },
    {
      title: 'Industry Trends 2025',
      type: 'Report',
      description: 'Latest developments and future outlook',
      provider: 'Research Team',
      rating: 4.7,
      students: 956
    }
  ];

  var resourcesHTML = '';
  for (var i = 0; i < resources.length; i++) {
    var resource = resources[i];

    resourcesHTML += '<div class="post" style="border-left-color: #28a745;">';
    resourcesHTML += '<div class="post-header">';
    resourcesHTML += '<div>';
    resourcesHTML += '<span class="post-author">' + resource.provider + '</span>';
    resourcesHTML += '</div>';
    resourcesHTML += '<span class="post-type" style="background: #28a745;">' + resource.type + '</span>';
    resourcesHTML += '</div>';
    resourcesHTML += '<div class="post-content">';
    resourcesHTML += '<h3>' + resource.title + '</h3>';
    resourcesHTML += '<p>' + resource.description + '</p>';
    resourcesHTML += '<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">';
    resourcesHTML += '<div style="display: flex; align-items: center; gap: 15px; color: #666;">';
    resourcesHTML += '<span><i data-feather="star" style="width: 16px; height: 16px; color: #ffc107;"></i> ' + resource.rating + '</span>';
    resourcesHTML += '<span><i data-feather="users" style="width: 16px; height: 16px;"></i> ' + resource.students + ' learners</span>';
    resourcesHTML += '</div>';
    resourcesHTML += '<button class="btn btn-primary" style="padding: 8px 16px; font-size: 14px;">';
    resourcesHTML += '<i data-feather="external-link" style="width: 14px; height: 14px;"></i>';
    resourcesHTML += 'Access';
    resourcesHTML += '</button>';
    resourcesHTML += '</div>';
    resourcesHTML += '</div>';
    resourcesHTML += '</div>';
  }

  container.innerHTML = resourcesHTML;
  feather.replace();
}

// Function to load skills for a career field
function loadSkills(fieldId) {
  var skills = sampleSkills[fieldId] || [];
  var container = document.getElementById('skillsContainer');

  var skillsHTML = '';

  // Add skill creation form for teachers
  if (currentUser.role === 'teacher') {
    skillsHTML += '<div class="create-post" style="border-left: 4px solid #dc3545;">';
    skillsHTML += '<h3><i data-feather="plus" style="width: 20px; height: 20px; margin-right: 8px;"></i>Share Your Expertise</h3>';
    skillsHTML += '<p style="color: #666; margin-bottom: 20px;">Create learning content to help students master essential skills in this field.</p>';
    skillsHTML += '<div class="form-group">';
    skillsHTML += '<label>Skill/Topic Name</label>';
    skillsHTML += '<input type="text" id="skillName" placeholder="e.g., Advanced React Patterns, Data Visualization with Python">';
    skillsHTML += '</div>';
    skillsHTML += '<div class="form-group">';
    skillsHTML += '<label>Skill Level</label>';
    skillsHTML += '<select id="skillLevel">';
    skillsHTML += '<option value="Beginner">Beginner</option>';
    skillsHTML += '<option value="Intermediate">Intermediate</option>';
    skillsHTML += '<option value="Advanced">Advanced</option>';
    skillsHTML += '<option value="Expert">Expert</option>';
    skillsHTML += '</select>';
    skillsHTML += '</div>';
    skillsHTML += '<div class="form-group">';
    skillsHTML += '<label>Description & Learning Outcomes</label>';
    skillsHTML += '<textarea id="skillDescription" placeholder="Describe what students will learn and how this skill applies in real-world scenarios..."></textarea>';
    skillsHTML += '</div>';
    skillsHTML += '<div class="form-group">';
    skillsHTML += '<label>Learning Resources (Optional)</label>';
    skillsHTML += '<textarea id="skillResources" placeholder="Share links to tutorials, documentation, practice exercises, or recommended readings..."></textarea>';
    skillsHTML += '</div>';
    skillsHTML += '<div class="form-group">';
    skillsHTML += '<label>Prerequisites</label>';
    skillsHTML += '<input type="text" id="skillPrerequisites" placeholder="What should students know before learning this? (comma-separated)">';
    skillsHTML += '</div>';
    skillsHTML += '<button class="btn btn-primary" onclick="createSkill(\'' + fieldId + '\')">';
    skillsHTML += '<i data-feather="send"></i>';
    skillsHTML += 'Share Skill';
    skillsHTML += '</button>';
    skillsHTML += '</div>';
  }

  // Display existing skills
  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    skillsHTML += '<div class="post" style="border-left-color: #dc3545;">';
    skillsHTML += '<div class="post-header">';
    skillsHTML += '<div>';
    skillsHTML += '<span class="post-author">' + skill.name + '</span>';
    if (skill.author) {
      skillsHTML += '<span style="color: #999; margin-left: 10px;">by ' + skill.author + '</span>';
      if (skill.isMentor) {
        skillsHTML += '<span class="mentor-badge"><i data-feather="award" style="width: 12px; height: 12px;"></i>Mentor</span>';
      }
    }
    skillsHTML += '</div>';
    skillsHTML += '<div style="display: flex; align-items: center; gap: 10px;">';
    skillsHTML += '<span class="post-type" style="background: #dc3545;">' + skill.level + '</span>';
    if (currentUser.role === 'student') {
      skillsHTML += '<button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="addSkillToProfile(\'' + skill.name + '\')">';
      skillsHTML += '<i data-feather="plus" style="width: 12px; height: 12px;"></i>';
      skillsHTML += 'Add to Profile';
      skillsHTML += '</button>';
    }
    skillsHTML += '</div>';
    skillsHTML += '</div>';
    skillsHTML += '<div class="post-content">';
    skillsHTML += '<p>' + skill.description + '</p>';
    
    if (skill.prerequisites && skill.prerequisites.length > 0) {
      skillsHTML += '<div style="margin: 15px 0;">';
      skillsHTML += '<strong style="color: #dc3545;">Prerequisites:</strong> ';
      skillsHTML += '<div class="skills-list" style="margin-top: 5px;">';
      for (var j = 0; j < skill.prerequisites.length; j++) {
        skillsHTML += '<span class="skill-tag" style="background: #fff3cd; color: #856404;">' + skill.prerequisites[j] + '</span>';
      }
      skillsHTML += '</div>';
      skillsHTML += '</div>';
    }

    if (skill.resources) {
      skillsHTML += '<div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">';
      skillsHTML += '<strong><i data-feather="book" style="width: 16px; height: 16px; margin-right: 5px;"></i>Learning Resources:</strong>';
      skillsHTML += '<p style="margin-top: 8px; white-space: pre-line;">' + skill.resources + '</p>';
      skillsHTML += '</div>';
    }

    skillsHTML += '<div style="margin-top: 15px; display: flex; gap: 10px;">';
    if (currentUser.role === 'student') {
      skillsHTML += '<button class="btn btn-primary" style="padding: 8px 16px; font-size: 14px;" onclick="startLearning(\'' + skill.name + '\')">';
      skillsHTML += '<i data-feather="play" style="width: 14px; height: 14px;"></i>';
      skillsHTML += 'Start Learning';
      skillsHTML += '</button>';
    }
    if (skill.author && currentUser.role === 'student') {
      skillsHTML += '<button class="btn btn-secondary" style="padding: 8px 16px; font-size: 14px;" onclick="contactMentor(\'' + skill.author + '\')">';
      skillsHTML += '<i data-feather="message-circle" style="width: 14px; height: 14px;"></i>';
      skillsHTML += 'Ask Mentor';
      skillsHTML += '</button>';
    }
    skillsHTML += '</div>';
    skillsHTML += '</div>';
    skillsHTML += '</div>';
  }

  if (skills.length === 0 && currentUser.role === 'student') {
    skillsHTML += '<p style="text-align: center; color: #666; margin-top: 30px;">No skills shared yet. Mentors in this field can add learning content to help you grow!</p>';
  }

  container.innerHTML = skillsHTML;
  feather.replace();
}

// Function to load mentors for a career field
function loadMentors(fieldId) {
  var mentors = sampleMentors[fieldId] || [];
  var container = document.getElementById('mentorsContainer');

  if (mentors.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666;">No mentors available yet. Check back soon!</p>';
    return;
  }

  var mentorsHTML = '';
  for (var i = 0; i < mentors.length; i++) {
    var mentor = mentors[i];

    mentorsHTML += '<div class="post" style="border-left-color: #28a745;">';
    mentorsHTML += '<div class="post-header">';
    mentorsHTML += '<div>';
    mentorsHTML += '<span class="post-author">' + mentor.name + '</span>';
    mentorsHTML += '<span class="mentor-badge"><i data-feather="award" style="width: 12px; height: 12px;"></i>Mentor</span>';
    mentorsHTML += '</div>';
    mentorsHTML += '<div style="display: flex; align-items: center; gap: 5px; color: #666;">';
    mentorsHTML += '<i data-feather="star" style="width: 16px; height: 16px; color: #ffc107;"></i>';
    mentorsHTML += '<span>' + mentor.rating + '</span>';
    mentorsHTML += '</div>';
    mentorsHTML += '</div>';
    mentorsHTML += '<div class="post-content">';
    mentorsHTML += '<h3>' + mentor.title + ' at ' + mentor.company + '</h3>';
    mentorsHTML += '<p><strong>' + mentor.experience + '</strong> of experience</p>';
    mentorsHTML += '<div class="skills-list">';
    for (var j = 0; j < mentor.specialties.length; j++) {
      mentorsHTML += '<span class="skill-tag">' + mentor.specialties[j] + '</span>';
    }
    mentorsHTML += '</div>';
    mentorsHTML += '<p style="margin-top: 10px; color: #666;">' + mentor.sessions + ' mentoring sessions completed</p>';
    mentorsHTML += '<div style="margin-top: 15px; display: flex; gap: 10px;">';
    mentorsHTML += '<button class="btn btn-primary" style="padding: 8px 16px; font-size: 14px;">';
    mentorsHTML += '<i data-feather="message-circle" style="width: 14px; height: 14px;"></i>';
    mentorsHTML += 'Message';
    mentorsHTML += '</button>';
    mentorsHTML += '<button class="btn btn-secondary" style="padding: 8px 16px; font-size: 14px;">';
    mentorsHTML += '<i data-feather="calendar" style="width: 14px; height: 14px;"></i>';
    mentorsHTML += 'Schedule Session';
    mentorsHTML += '</button>';
    mentorsHTML += '</div>';
    mentorsHTML += '</div>';
    mentorsHTML += '</div>';
  }

  container.innerHTML = mentorsHTML;
  feather.replace();
}

// Function to switch between tabs in the modal
function switchTab(tabName) {
  // Get all tab buttons and remove the 'active' class
  var tabs = document.querySelectorAll('.tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Get all tab content areas and hide them
  var contents = document.querySelectorAll('.tab-content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }

  // Find which tab was clicked and make it active
  var clickedTab = event.target;
  clickedTab.classList.add('active');

  // Show the corresponding content
  var contentToShow = document.getElementById(tabName + '-content');
  contentToShow.classList.add('active');
}

// Function to create a new post
function createPost() {
  var type = document.getElementById('postType').value;
  var title = document.getElementById('postTitle').value;
  var content = document.getElementById('postContent').value;
  var skills = document.getElementById('postSkills').value;

  // Check if required fields are filled
  if (!title || !content) {
    showToast('Please fill in both title and content to create your post.', 'warning', 'Missing Information');
    return;
  }

  // Create a new post object
  var newPost = {
    id: Date.now(), // Use current timestamp as unique ID
    type: type,
    title: title,
    content: content,
    author: currentUser.name,
    authorLevel: currentUser.experience,
    skills: [],
    likes: 0,
    comments: 0,
    timestamp: 'Just now'
  };

  // Convert skills string to array
  if (skills) {
    var skillsArray = skills.split(',');
    for (var i = 0; i < skillsArray.length; i++) {
      var skill = skillsArray[i].trim();
      if (skill) {
        newPost.skills.push(skill);
      }
    }
  }

  // Add to software-engineering posts (for demo purposes)
  if (!samplePosts['software-engineering']) {
    samplePosts['software-engineering'] = [];
  }
  samplePosts['software-engineering'].unshift(newPost); // Add to beginning of array

  // Reload the posts
  loadPosts('software-engineering');

  // Clear the form
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
  document.getElementById('postSkills').value = '';

  showToast('Your post has been published successfully!', 'success', 'Post Created');
}

// Function to update the post form based on post type
function updatePostForm() {
  var type = document.getElementById('postType').value;
  var postSkills = document.getElementById('postSkills');

  if (type === 'question') {
    postSkills.placeholder = 'Topics you need help with (comma-separated)';
  } else if (type === 'article') {
    postSkills.placeholder = 'Skills covered in your article (comma-separated)';
  } else if (type === 'tutorial') {
    postSkills.placeholder = 'Skills taught in your tutorial (comma-separated)';
  } else if (type === 'experience') {
    postSkills.placeholder = 'Skills related to your experience (comma-separated)';
  }
}

// Function to close the career modal
function closeModal() {
  document.getElementById('careerModal').style.display = 'none';
}

// Function to show the user profile
function showProfile() {
  document.getElementById('profileModal').style.display = 'block';
  updateProfileDisplay();

  // Fill form fields with current values
  if (currentUser.role) {
    document.getElementById('updateRole').value = currentUser.role;
    handleRoleChange();
    if (currentUser.expertiseField) {
      document.getElementById('updateExpertiseField').value = currentUser.expertiseField;
    }
  }
}

// Function to close the profile modal
function closeProfileModal() {
  document.getElementById('profileModal').style.display = 'none';
}

// Function to update the profile display
function updateProfileDisplay() {
  document.getElementById('profileName').innerHTML = currentUser.name;

  var titleHTML = currentUser.title;
  if (currentUser.role) {
    var roleIcon = currentUser.role === 'teacher' ? 'user-check' : 'book-open';
    var roleText = currentUser.role === 'teacher' ? 'Teacher' : 'Student';
    titleHTML += '<span class="user-role-badge"><i data-feather="' + roleIcon + '" style="width: 12px; height: 12px;"></i>' + roleText + '</span>';
  }

  document.getElementById('profileTitle').innerHTML = titleHTML;

  // Create initials for avatar
  var nameParts = currentUser.name.split(' ');
  var initials = '';
  for (var i = 0; i < nameParts.length; i++) {
    initials += nameParts[i][0];
  }
  document.getElementById('profileAvatar').innerHTML = initials;

  // Update skills display
  var skillsContainer = document.getElementById('profileSkills');
  var skillsHTML = '';
  for (var i = 0; i < currentUser.skills.length; i++) {
    skillsHTML += '<span class="skill-tag">' + currentUser.skills[i] + '</span>';
  }
  skillsContainer.innerHTML = skillsHTML;

  feather.replace();
}

// Function to handle role change in profile form
function handleRoleChange() {
  var role = document.getElementById('updateRole').value;
  var expertiseFieldGroup = document.getElementById('expertiseFieldGroup');

  if (role === 'teacher') {
    expertiseFieldGroup.style.display = 'block';
  } else {
    expertiseFieldGroup.style.display = 'none';
  }
}

// Function to update user profile
function updateProfile() {
  var name = document.getElementById('updateName').value;
  var title = document.getElementById('updateTitle').value;
  var skills = document.getElementById('updateSkills').value;
  var experience = document.getElementById('updateExperience').value;
  var role = document.getElementById('updateRole').value;
  var expertiseField = document.getElementById('updateExpertiseField').value;

  // Update user information if fields are filled
  if (name) currentUser.name = name;
  if (title) currentUser.title = title;
  if (experience) currentUser.experience = experience;
  if (role) currentUser.role = role;
  if (role === 'teacher' && expertiseField) currentUser.expertiseField = expertiseField;

  // Update skills
  if (skills) {
    currentUser.skills = [];
    var skillsArray = skills.split(',');
    for (var i = 0; i < skillsArray.length; i++) {
      var skill = skillsArray[i].trim();
      if (skill) {
        currentUser.skills.push(skill);
      }
    }
  }

  updateProfileDisplay();

  // Clear form fields
  document.getElementById('updateName').value = '';
  document.getElementById('updateTitle').value = '';
  document.getElementById('updateSkills').value = '';

  showToast('Your profile has been updated successfully!', 'success', 'Profile Updated');
}

// Function to like a post
function likePost(postId) {
  // Find the post and increase its likes
  var found = false;
  for (var fieldId in samplePosts) {
    var posts = samplePosts[fieldId];
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id === postId) {
        posts[i].likes += 1;
        loadPosts(fieldId);
        found = true;
        break;
      }
    }
    if (found) break;
  }
}

// Function to show comments (placeholder)
function showComments(postId) {
  showToast('Comments feature coming soon! This would open a detailed view with comments and replies.', 'info', 'Coming Soon');
}

// Function to share a post (placeholder)
function sharePost(postId) {
  showToast('Post shared to your network!', 'success', 'Shared');
}

// Function to toggle reply form visibility
function toggleReplyForm(postId) {
  if (currentUser.role !== 'teacher') {
    showToast('Only teachers can reply to posts to share their expertise.', 'warning', 'Teacher Feature');
    return;
  }

  var replyForm = document.getElementById('replyForm-' + postId);
  if (replyForm.style.display === 'none') {
    replyForm.style.display = 'block';
    document.getElementById('replyContent-' + postId).focus();
  } else {
    replyForm.style.display = 'none';
  }
  feather.replace();
}

// Function to submit a reply
function submitReply(postId) {
  if (currentUser.role !== 'teacher') {
    showToast('Only teachers can reply to posts.', 'error', 'Access Denied');
    return;
  }

  var replyContent = document.getElementById('replyContent-' + postId).value.trim();
  if (!replyContent) {
    showToast('Please enter your response before posting.', 'warning', 'Empty Reply');
    return;
  }

  // Find the post and add the reply
  var postFound = false;
  var currentFieldId = null;
  
  for (var fieldId in samplePosts) {
    var posts = samplePosts[fieldId];
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id === postId) {
        currentFieldId = fieldId;
        
        // Initialize replies array if it doesn't exist
        if (!posts[i].replies) {
          posts[i].replies = [];
        }
        
        // Create new reply object
        var newReply = {
          id: Date.now(),
          content: replyContent,
          author: currentUser.name,
          isTeacher: true,
          timestamp: 'Just now'
        };
        
        // Add reply to the post
        posts[i].replies.push(newReply);
        posts[i].comments += 1; // Increment comment count
        postFound = true;
        break;
      }
    }
    if (postFound) break;
  }

  if (postFound && currentFieldId) {
    // Reload the posts to show the new reply
    loadPosts(currentFieldId);
    showToast('Your expert response has been posted successfully!', 'success', 'Reply Posted');
  } else {
    showToast('Could not find the post to reply to.', 'error', 'Error');
  }
}

// Function to cancel reply
function cancelReply(postId) {
  var replyForm = document.getElementById('replyForm-' + postId);
  var replyContent = document.getElementById('replyContent-' + postId);
  
  replyForm.style.display = 'none';
  replyContent.value = '';
}

// Function to show help information
function showHelp() {
  var helpMessage = 'Welcome to CareerPath! Here\'s how to get started:\n\n';
  helpMessage += '1. Browse career fields by clicking on any card\n';
  helpMessage += '2. Join discussions by asking questions or sharing knowledge\n';
  helpMessage += '3. Find learning resources and essential skills for each field\n';
  helpMessage += '4. Connect with mentors who can guide your career journey\n';
  helpMessage += '5. Update your profile to showcase your skills and experience\n\n';
  helpMessage += 'This platform helps you achieve UN Sustainable Development Goal 8: ';
  helpMessage += 'Decent Work and Economic Growth by connecting you with professionals ';
  helpMessage += 'and resources in your field of interest.';

  alert(helpMessage);
}

// Function to handle clicking outside modals
function handleModalClick(event) {
  var careerModal = document.getElementById('careerModal');
  var profileModal = document.getElementById('profileModal');
  var roleModal = document.getElementById('roleModal');
  var teacherFieldModal = document.getElementById('teacherFieldModal');

  if (event.target === careerModal) {
    careerModal.style.display = 'none';
  }
  if (event.target === profileModal) {
    profileModal.style.display = 'none';
  }
  if (event.target === roleModal && currentUser.role) {
    roleModal.style.display = 'none';
  }
  if (event.target === teacherFieldModal) {
    teacherFieldModal.style.display = 'none';
  }
}

// Function to show role selection modal
function showRoleModal() {
  document.getElementById('roleModal').style.display = 'block';
}

// Function to select user role
function selectRole(role) {
  currentUser.role = role;
  document.getElementById('roleModal').style.display = 'none';

  if (role === 'teacher') {
    showTeacherFieldSelection();
  } else {
    completeRoleSetup();
  }
}

// Function to show teacher field selection
function showTeacherFieldSelection() {
  var grid = document.getElementById('teacherFieldGrid');
  grid.innerHTML = '';

  for (var i = 0; i < careerFields.length; i++) {
    var field = careerFields[i];

    var cardHTML = '<div class="career-card" onclick="selectTeacherField(\'' + field.id + '\')">';
    cardHTML += '<div class="career-icon">';
    cardHTML += '<i data-feather="' + field.icon + '" style="color: white;"></i>';
    cardHTML += '</div>';
    cardHTML += '<div class="career-title">' + field.title + '</div>';
    cardHTML += '<p style="color: #666; margin-bottom: 15px;">' + field.description + '</p>';
    cardHTML += '<div class="career-stats">';
    cardHTML += '<span><i data-feather="message-square" style="width: 16px; height: 16px;"></i> ' + field.posts + ' posts</span>';
    cardHTML += '<span><i data-feather="users" style="width: 16px; height: 16px;"></i> ' + field.members + ' members</span>';
    cardHTML += '</div>';
    cardHTML += '</div>';

    grid.innerHTML += cardHTML;
  }

  document.getElementById('teacherFieldModal').style.display = 'block';
  feather.replace();
}

// Function to select teacher field
function selectTeacherField(fieldId) {
  var field = null;
  for (var i = 0; i < careerFields.length; i++) {
    if (careerFields[i].id === fieldId) {
      field = careerFields[i];
      break;
    }
  }

  if (field) {
    currentUser.expertiseField = fieldId;
    currentUser.title = field.title + ' Professional';
  }

  document.getElementById('teacherFieldModal').style.display = 'none';
  completeRoleSetup();
}

// Function to complete role setup
function completeRoleSetup() {
  updateProfileDisplay();

  var roleText = currentUser.role === 'teacher' ? 'Teacher/Professional' : 'Student';
  var fieldText = '';
  if (currentUser.expertiseField) {
    var field = null;
    for (var i = 0; i < careerFields.length; i++) {
      if (careerFields[i].id === currentUser.expertiseField) {
        field = careerFields[i];
        break;
      }
    }
    if (field) {
      fieldText = ' in ' + field.title;
    }
  }

  var welcomeMessage = 'Welcome to CareerPath! You\'re registered as a ' + roleText + fieldText + '. ';
  welcomeMessage += 'You can update your profile anytime by clicking the Profile button.';

  showToast(welcomeMessage, 'success', 'Welcome to CareerPath!', 8000);
}

// Function to handle Enter key in search
function handleSearchEnter(event) {
  if (event.key === 'Enter') {
    searchCareers();
  }
}

// Toast notification system
function showToast(message, type = 'info', title = null, duration = 5000) {
  var container = document.getElementById('toastContainer');

  // Create toast element
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;

  // Set icon based on type
  var iconName = 'info';
  if (type === 'success') iconName = 'check-circle';
  else if (type === 'error') iconName = 'x-circle';
  else if (type === 'warning') iconName = 'alert-triangle';

  // Build toast content
  var toastHTML = '<div class="toast-icon"><i data-feather="' + iconName + '"></i></div>';
  toastHTML += '<div class="toast-content">';
  if (title) {
    toastHTML += '<div class="toast-title">' + title + '</div>';
  }
  toastHTML += '<div class="toast-message">' + message + '</div>';
  toastHTML += '</div>';
  toastHTML += '<div class="toast-close" onclick="closeToast(this)">&times;</div>';

  toast.innerHTML = toastHTML;

  // Add click to close functionality
  toast.onclick = function(event) {
    if (event.target.classList.contains('toast-close')) {
      return; // Let the close button handle it
    }
    closeToast(toast.querySelector('.toast-close'));
  };

  // Add to container
  container.appendChild(toast);

  // Initialize feather icons
  feather.replace();

  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(function() {
      closeToast(toast.querySelector('.toast-close'));
    }, duration);
  }

  return toast;
}

function closeToast(closeButton) {
  var toast = closeButton.closest('.toast');
  toast.classList.add('sliding-out');

  setTimeout(function() {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

// Set up event listeners when the page loads
document.addEventListener('DOMContentLoaded', startApp);
window.onclick = handleModalClick;

// Add Enter key listener to search input
setTimeout(function() {
  var searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', handleSearchEnter);
  }
}, 100);