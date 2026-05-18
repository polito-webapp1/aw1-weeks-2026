# Exam #N: "Exam Title"
## Student: s123456 LASTNAME FIRSTNAME 

## React Client Application Routes

- Route `/`: page content and purpose
- Route `/something/:param`: page content and purpose, param specification
- ...


## API Server

- GET `/api/sessions/current`
  - request parameters: cookie for passport authentication
  - response body: user info associated with current session
  - response status: 200 OK, 401 Unauthorized, 500 Internal Server Error
  - response body example (in case of success): {
    ... (something goes here)
  }
- GET `/api/courses`
  - request parameters: none
  - response body: list of all courses ordered in alphabetical order respect to course name
  - response status: 200 OK, 500 Internal Server Error
  - response body example (in case of success): {
    [
      {
        cID: '00AAA00',
        name: 'Analisi Matematica II',
        CFUs: 10
        maxStudents: 3,
        enrolledStudents: 2,
        prerequisite: '11BBB11',
        incompatibilities: ['01ABC23', '98ZYX76']
      },
      {
        ...
      },
      ...
    ]
  }
- GET `/api/users/:uID`
  - request parameters: userID and cookie for passport authentication
  - response body: user's info
  - response status: 200 OK, 401 Unauthorized, 404 Not Found, 500 Internal Server Error
  - response body example (in case of success): {
    uID: '001',
    username: 'mario.rossi@polito.it'
    name: 'Mario',
    surname: 'Rossi',
    SPTime: 'full',
    totalCFU: 70
  }
- GET `/api/users/:uID/studyplan`
  - request parameters: userID and cookie for passport authentication
  - response body: list of courses in student's studyplan
  - response status: 200 OK, 401 Unauthorized, 404 Not, 500 Internal Server Error
  - response body example (in case of success): {
    [
      {
        cID: '00AAA00',
        name: 'Analisi Matematica II',
        CFUs: 10
        maxStudents: 3,
        enrolledStudents: 2,
        prerequisite: '11BBB11',
        incompatibilities: ['01ABC23', '98ZYX76']
      },
      {
        ...
      },
      ...
    ]
  }

- POST `/api/something`
  - request parameters and request body content
  - response body content
- POST `/api/something`
  - request parameters and request body content
  - response body content
- ...

## Database Tables

- Table `users` - contains uID, username, name, surname, SPTime (time of user study plan, null if user does not have a study plan) password (hashed), salt (for hashing password)
- Table `courses` - contains cID (unique code course as a string), name, CFUs, maxStudents (maximum number of students that can enroll to the course at the same time), enrolledStudents (amount of students currently enrolled), preparatoryCourse (code of a course that the current course needs as preparatory), incompatibleWith (string with codes of courses incompatible with the current one separated with single space)
- Table `studyplans` - bridge table used to represent study plans of users, contains uID (id of a user), cID (code of a course in user's study plan)
- Table `incompatibles` - bridge table used to represent incompatibilities, each row represents that course 1 is incompatible with course 2, contains c1ID (code of course 1), c2ID (code of course 2 with which course 1 is incompatible)

## Main React Components

- `ListOfSomething` (in `List.js`): component purpose and main functionality
- `GreatButton` (in `GreatButton.js`): component purpose and main functionality
- ...

(only _main_ components, minor ones may be skipped)

## Screenshot

![Screenshot](./img/screenshot.jpg)

## Users Credentials

- username, password (plus any other requested info)
- username, password (plus any other requested info)

## Use of AI Tools
Briefly describe whether you used any AI tools (e.g., ChatGPT, GitHub Copilot, Claude) while working on this project, for which purposes (e.g., clarifying concepts, debugging, generating code), and how you verified or adapted their output.
If you did not use any AI tools, simply state so.
