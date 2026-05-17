# StudyPlan

_Web Application I / Applicazioni Web I 2025/2026 - Exam simulation_

Design and implement a web application to manage the study plan of a university student. The application must satisfy the following requirements.

## Functional requirements

The university offers a series of courses. Each course is characterized by a unique 7-characters code, a name, and the (integer) number of credits. 

A student’s **study plan** is a subset of the courses offered by the university. The total number of credits of the courses inserted in the study plan can range from 60 to 80 credits (extremes included) for the full-time option, or from 20 to 40 credits (extremes included) for the part-time option.

A course can have one or more constraints for its insertion in the study plan:
- A course can be _incompatible_ with **one or more** courses. They cannot be selected together.
- A course can have **one** mandatory preparatory course, which must be already present in the study plan.
- A course can have a maximum number of students able to add it into the study plan.

In the homepage of the application, unauthenticated (anonymous) users see all the courses that the university offers. This list of courses must be displayed in alphabetical order (by course name). For each course, the list shows these pieces of information: the code, the name, the number of credits, the number of students that already chose the course and, if present, the maximum number of students that can select it. Each course description may be expanded/contracted by the user, to show any incompatible and/or preparatory courses (display at least their code). Many courses may be in the expanded state at the same time.

Once logged in (logged-in home page), users continue to see the same full course list. In this page, if no study plan has been created yet, the user may **create** an empty one, by specifying the full-time or part-time option; this empty list can be edited according to the following instructions. If a study plan has already been created and persistently saved, it is immediately **displayed** (in the same page) and can be edited as below.

The editing of the displayed study plan allow the following operations:
- Always display the number of credits corresponding to the courses in the study plan, and the minimum-maximum allowed values.
- Add a course from the full list to the study plan. Only courses that satisfy all constraints can be added.
- Remove a course from the study plan, if it does not violate any “preparatory” constraint (otherwise, the application should display the reason).
- If a course cannot be added, it will be marked differently in the full list, and the application should display the reason.

During the editing session, the user may “Save” the study plan in a persistent way (this will replace any possible previous version). The user may “Cancel” the current modifications, and in this case the persistent copy (if any) must not be modified.

When saving, the study plan must be validated according to the min-max number of credits.

Additionally, the user may “Delete” the entire study plan, including the persistent copy.

After each of these actions, the application will be in the logged-in home page.

## Project requirements

- The application architecture and source code must be developed by adopting the best practices in software development, in particular, those relevant to single-page applications (SPA) using React and HTTP APIs. APIs should be carefully protected and the front-end should not receive unnecessary information.
- The application should be designed for a desktop browser. Responsiveness for mobile devices is not required nor evaluated.
- The project must be implemented as a React application that interacts with an HTTP API implemented in Node+Express. The Node version must be the one used during the course. The database must be stored in a SQLite file. The programming language must be JavaScript.
- The communication between client and server must follow the “two servers” pattern, by properly configuring CORS, and React must run in “development” mode with Strict Mode activated.
- The evaluation of the project (NOTE: this simulation **will not be evaluated**) will be carried out by navigating the application. Neither the behavior of the “refresh” button, nor the manual entering of a URL (except /) will be tested, and their behavior is undefined. Also, the application should never “reload” itself as a consequence of normal user operations.
- The root directory of the project must contain a README.md file and have two subdirectories (client and server). The project must be started by running the two commands: “cd server; nodemon index.mjs” and “cd client; npm run dev”. A template for the project directories is already available in the simulation repository. You may assume that nodemon is globally installed. No other global modules will be available.
- The whole project must be submitted on GitHub, on the same repository created by GitHub Classroom.
- The project must not include the node_modules directories. They will be re-created by running the “npm install” command right after “git clone”.
- The project may use popular and commonly adopted libraries (for example, day.js, react-bootstrap, etc.), if applicable and useful. All required libraries must be correctly declared in the package.json file, so that the npm install command might install them.
- User authentication (login and logout) and API access must be implemented with Passport.js and session cookies. The credentials should be stored in an encrypted and salted form. The user registration procedure is not requested nor evaluated.

## Quality requirements

In addition to the implementation of the required application functionality, the following quality requirements will be evaluated (NOTE: this simulation **will not be evaluated**):
- Database design and organization.
- Design of the HTTP APIs.
- Organization of React components and routes.
- Correct usage of React patterns (functional behavior, hooks, state, context, and effects). Avoiding direct manipulation of the DOM is included in these rules.
- Code clarity.
- Absence of errors (and warnings) in the client console (except those caused by errors in the imported libraries).
- Absence of application crashes or unhandled exceptions.
- Essential data validation (in Express and React).
- Basic usability and user-friendliness.
- Originality of the solution.

## Database requirements

- The project database must be implemented by the student, and must be pre-loaded with at least _five_ students, at least one with a part-time study plan, at least one with a full-time study plan. At least two courses should have reached the maximum number of enrolled students.
- The database must include, at least, the following courses:

| Code     | Name                                      | Credits | Max students | Incompatible with     | Preparatory course |
|----------|-------------------------------------------|---------|--------------|-----------------------|--------------------|
| 02GOLOV  | Architetture dei sistemi di elaborazione | 12      |              | 02LSEOV               |                    |
| 02LSEOV  | Computer architectures                   | 12      |              | 02GOLOV               |                    |
| 01SQJOV  | Data Science and Database Technology     | 8       |              | 01SQMOV, 01SQLOV     |                    |
| 01SQMOV  | Data Science e Tecnologie per le Basi di Dati | 8   |              | 01SQJOV, 01SQLOV     |                    |
| 01SQLOV  | Database systems                         | 8       |              | 01SQJOV, 01SQMOV     |                    |
| 01OTWOV  | Computer network technologies and services | 6     | 3            | 02KPNOV               |                    |
| 02KPNOV  | Tecnologie e servizi di rete             | 6       | 3            | 01OTWOV               |                    |
| 01TYMOV  | Information systems security services    | 12      |              | 01UDUOV               |                    |
| 01UDUOV  | Sicurezza dei sistemi informativi        | 12      |              | 01TYMOV               |                    |
| 05BIDOV  | Ingegneria del software                  | 6       |              | 04GSPOV               | 02GOLOV            |
| 04GSPOV  | Software engineering                     | 6       |              | 05BIDOV               | 02LSEOV            |
| 01UDFOV  | Applicazioni Web I                       | 6       |              | 01TXYOV               |                    |
| 01TXYOV  | Web Applications I                       | 6       | 3            | 01UDFOV               |                    |
| 01TXSOV  | Web Applications II                      | 6       |              |                       | 01TXYOV            |
| 02GRSOV  | Programmazione di sistema                | 6       |              | 01NYHOV               |                    |
| 01NYHOV  | System and device programming            | 6       | 3            | 02GRSOV               |                    |
| 01SQOOV  | Reti Locali e Data Center                | 6       |              |                       |                    |
| 01TYDOV  | Software networking                      | 7       |              |                       |                    |
| 03UEWOV  | Challenge                                | 5       |              |                       |                    |
| 01URROV  | Computational intelligence               | 6       |              |                       |                    |
| 01OUZPD  | Model based software design              | 4       |              |                       |                    |
| 01URSPD  | Internet Video Streaming                 | 6       | 2            |                       |                    |

## Contents of the README.md file

The README.md file must contain the following information (a template is available in the project repository). Generally, each information should take no more than 1-2 lines.
- Server-side:
  - A list of the HTTP APIs offered by the server, with a short description of the parameters and o the exchanged objects
  - A list of the database tables, with their purpose
- Client-side:
  - A list of ‘routes’ for the React application, with a short description of the purpose of each route
  - A list of the main React components
- Overall:
  - A screenshot of the **logged-in home page during an editing session**. This screenshot must be embedded in the README by linking an image committed in the repository.
  - Username and password of the defined users.

## Submission proccedure

It is not required to submit the exam simulation, but it is suggested to better familiarize with the submission procedure for the real exam.

To correctly submit the project, you must:
- Use the provided **link to join the classroom** on GitHub Classroom (i.e., correctly **associate** your GitHub username with your student ID) and **accept the assignment**.
- **Push the project** into the **main branch** of the repository created for you by GitHub Classroom. The last commit must be **tagged** with the tag **final** (note: final is all-lowercase with no spaces, and it is a git ‘tag’, NOT a ‘commit message’).

Note: to tag a commit, you may use (from the terminal) the following commands:

```
# ensure the latest version is committed
git commit -m "...comment..."
git push

# add the 'final' tag and push it
git tag final
git push origin --tags
```

Alternatively, you may insert the tag from GitHub’s web interface (follow the link 'Create a new release').

To test your submission, these are the exact commands that the teachers will use to download the project. You may wish to test them on a clean directory:

```
git clone ...yourCloneURL...
cd ...yourProjectDir...
git pull origin main  # just in case the default branch is not main 
git checkout -b evaluation final # check out the version tagged with 'final' and create a new branch 'evaluation'
(cd client ; npm install; npm run dev)
(cd server ; npm install; nodemon index.mjs)
```

Ensure that all the needed packages are downloaded by the npm install commands. Be careful: if some packages are installed globally, on your computer, they might not be listed as dependencies. Always check it in a clean installation.

Be aware that Linux is case-sensitive for file names, while Windows and macOS are not. Double-check the case of import statements and all file names.
