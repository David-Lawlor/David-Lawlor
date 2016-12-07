angular.module("collegeSubjects", [])
    .controller("subjectCtrl", function($scope){

    // a list of grades and subjects in JSON form
    $scope.subjectList = {

        "col_year1": [
            {
                subject: "Software Development 1",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Computer Architecture",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Fundament of Interface & Web",
                grade: "X",
                percentage: "X"
            },   
            {
                subject: "Business & Information Systems",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Discrete Mathematics 1",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Learning to Learn at 3rd Lvl",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Software Development 2",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Database Fundamentals",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Operating System Fundamentals",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Object-Oriented Systems Analysis",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Statistics",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Social Media Communications",
                grade: "X",
                percentage: "X"
            }
        ],
        "col_year2": [
            {
                subject: "Software Development 3",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Software Quality Assurance & Testing",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Networking 1",
                grade: "X",
                percentage: "X"
            },   
            {
                subject: "Database Design & Programming",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Discrete Mathematics 2",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Web Design and Development",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Software Development 4",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Project",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Networking 2",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Management Science",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Object Oriented Analysis & Design",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Information Security",
                grade: "X",
                percentage: "X"
            }
        ],

        "col_year3": [
            {
                subject: "Algorithms and Data Structures 1",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Web Design & Development 2",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Operating Systems",
                grade: "X",
                percentage: "X"
            },   
            {
                subject: "Innovation & Entrepreneurshp",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Cloud servs and distrib comp",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Advanced Databases",
                grade: "X",
                percentage: "X"
            },
            
            
            {
                subject: "Project",
                grade: "X",
                percentage: "X"
            },        
            {
                subject: "Experiential Learning",
                grade: "X",
                percentage: "X"
            }       
        ],

        "col_year4": [
            {
                subject: "Enterprise Applications Development 1",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Interactive Media Design",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Information Management",
                grade: "X",
                percentage: "X"
            },   
            {
                subject: "Social Media Analysis",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Social Media Analysis",
                grade: "X",
                percentage: "X"
            },
            {
                subject: "Interactive Media Design",
                grade: "X",
                percentage: "X"
            }
        ],
        
        "app_year1": [
            {
                subject: "Intruder Alarm Installation",
                result: "Credit"
            },
            {
                subject: "CCTV Installation",
                result: "Credit"
            },
            {
                subject: "Fire Alarm Installation",
                result: "Credit"
            },   
            {
                subject: "Access Control Installation",
                result: "Credit"
            },
            {
                subject: "Electrical Principles",
                result: "Credit"
            },
            {
                subject: "Induction",
                result: "Credit"
            }
        ],
        "app_year2": [
            {
                subject: "Intruder Alarm Installation",
                result: "Credit"
            },
            {
                subject: "CCTV Installation",
                result: "Credit"
            },
            {
                subject: "Fire Alarm Installation",
                result: "Credit"
            },   
            {
                subject: "Access Control Installation",
                result: "Credit"
            },     
            {
                subject: "Electrical and Electronic Systems",
                result: "Credit"
            },        
            {
                subject: "Customer Communications",
                result: "Credit"
            }
        ],

        "app_year3": [
            {
                subject: "Intruder Alarm Installation",
                result: "Credit"
            },
            {
                subject: "CCTV Installation",
                result: "Credit"
            },
            {
                subject: "Fire Alarm Installation",
                result: "Credit"
            },   
            {
                subject: "Access Control Installation",
                result: "Credit"
            },  
            {
                subject: "Data Network Systems",
                result: "Credit"
            },
            {
                subject: "Electronic Systems",
                result: "Credit"
            }      
        ],
        
        "prep_year1": [
            {
                subject: "Computing",
                result: "Pass"
            },
            {
                subject: "Electronic Engineering",
                result: "Pass"
            },
            {
                subject: "Management",
                result: "Pass"
            },   
            {
                subject: "English",
                result: "Pass"
            },  
            {
                subject: "Math",
                result: "Pass"
            },
            {
                subject: "Mechanical engineering",
                result: "Pass"
            }      
        ]
    };
});