# AI Guardians: The Ethics Adventure

## Overview

AI Guardians: The Ethics Adventure is an app that raises kids' awareness of biases and ethical issues surrounding the use of AI, empowering kids to promote ethical use of AI.

### Problem

As AI-generated content becomes ubiquitous, kids are rapidly becoming consumers and creators of AI-generated content. Ethical development of AGI is crucial, but most kids do not have the knowledge or experience to understand ethical issues surrounding the use of AI. Critical thinking can be difficult for people of all ages, and the pace of change has exceeded our ability to prepare kids for responsible engagement with AI. We need to make a quick correction to ensure kids are not inadvertently complicit in the development of unethical systems.

While some content exists to promote ethics in the field of AI development, it is not widely distributed, nor presented in a format that is accessible to kids. Parents, teachers, and other adults who interact with kids have severely limited resources to help them teach kids about ethics related to AI.

### User Profile

Kids:

- need to understand AI’s impact
- want to have fun while learning
- need content presented in an age-accessible way

Grown-ups (Teachers or Parents):

- may be aware of some of the ethical implications of AI
- want content to be educationally effective
- benefit from awareness of kids’ progress and completion of the program
- may want to set up multiple accounts for kids who are learning as a group, either in a class or as siblings

### Features

(My question: How can I differentiate between different users where there are multiple types of users who benefit from different features?)

Kids:

- As a user, I want to feel like I’m playing a fun game
- As a user, I want to feel a little challenged, but that I am being successful
- As a user, I would prefer not to log in because I probably won’t remember my login info, but I will tolerate a simple login process with support from my grown-ups

- As a logged in user, I want to have a choice about the character that represents me
- As a logged in user, I want to be able to earn points and have progress persist between sessions
- As a logged in user, I want to be able to see my progress in the program

Grown-ups:

- As a user, I want to be able to create an account for myself, to manage my learner(s)
- As a user, I want to be able to log in to my account to manage my learner(s)

- As a logged in user, I want to be able to create and delete learner accounts
- As a logged in user, I want to be able to review learner progress and maybe history or session information

## Implementation

### Tech Stack

- React
- TypeScript ?
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

Kids

- Home page
- Character Selection
- Game Play Stage
- Story Screen
- Information Screen
- Challenge/Quiz Screen
- Achievement Screen
- Register
- Login
- Settings/Profile Page
- Help/Support Page

Grown-ups

- Home page
- Register
- Login
- Add/Remove Learners
- Review Learner Progress
- Settings/Profile Page
- Help/Support Page
- Dashboard Overview

### Mockups

to be added soon

### Data

![sqldiagram](ai-ethics-game/src/assets/ai_guardians_sql_diagram.png)

### Endpoints

User Authentication and Management
**POST /api/register*

- Register a new user (either a child or an adult managing child account(s))

Parameters:
username: User-provided name to be used at login
password: User-provided password to be used at login
role: Child or parent/teacher
name: full name of user
profile_image: optional URL or identifier for profile picture


Response:
```
{ 
"success": true, 
"user_id": 123 
}

```
**POST api/login**

- Authenticate a user and return a token

Parameters:
username
password

Response:
```
{
  "success": true,
  "token": "jwt-token-here"
}
```


**POST api/logout**

- Log out the user and invalidate the token

Parameters:
token

Response:
```
{ 
"success": true 
}
```


LEARNER MANAGEMENT

**POST /api/learners**

- Create a new learner account under a parent/teacher account

Parameters:
user_id
learner_name
pw_pic_item_1_id
pw_pic_item_2_id
pw_pic_item_3_id

Response:
```
{
  "success": true,
  "learner_id": 456
}

```

**GET /api/learners**

- Logged in user can get all learner accounts under their parent/teacher account

Parameters:
- user_id

Response:
```
{
  "success": true,
  "learners": [
    {
      "learner_id": 456,
      "learner_name": "John Doe"
    },
    {
      "learner_id": 457,
      "learner_name": "Jane Doe"
    }
  ]
}

```

**DELETE /api/learners/{learner_id}**

- Delete a learner account

Parameters:
learner_id

Response:
```
{
  "success": true,
}

```

PROGRESS AND ACTIVITIES



**GET /api/progress**

- Get the game progress for a learner

Parameters:

- learner_id

Response:
```
{
  "success": true,
  "progress": [
    {
      "chapter_id": 1,
      "activity_id": 1,
      "status": "completed",
      "achievement_id": null,
      "completion_time": "2024-07-10T10:00:00Z"
    },
    {
      "chapter_id": 1,
      "activity_id": 2,
      "status": "in-progress",
      "achievement_id": null,
      "completion_time": null
    }
  ]
}

```

**POST /api/progress**

Update game progress for a learner.

Parameters:
-{ "learner_id": 456, "chapter_id": 1, "activity_id": 2, "status": "completed", "achievement_id": null, "completion_time": "2024-07-10T10:15:00Z" }

Response:
```
{
  "success": true
}
```

ACTIVITIES AND RESULTS



**GET /api/activities**

- Get a list of activities for a specific chapter

Parameters:

- chapter_id

Response:
```
{
  "success": true,
  "activities": [
    {
      "activity_id": 1,
      "activity_type": "quiz",
      "content": "Text content or quiz questions"
    },
    {
      "activity_id": 2,
      "activity_type": "interactive_game",
      "content": "Text content or game instructions"
    }
  ]
}

```



**POST /api/activities/submit**

- Submit responses for an activity

Parameters:

learner_id
activity_id
response

Response:
```
{
  "success": true,
  "score": 85,
  "feedback": "Good job! You answered most of the questions correctly."
}

```

**GET /api/results**

- Get activity results

Parameters:

learner_id
activity_id


Response:
```
{
  "success": true,
  "results": {
    "score": 85,
    "response": "User's response or answers",
    "completion_time": "2024-07-10T10:15:00Z"
  }
}
```

ACHIEVEMENTS

**GET /api/achievements**

- Retrieve all possible achievements

Parameters:
n/a

Response:
```
{
  "success": true,
  "achievements": [
    {
      "achievement_id": 1,
      "title": "First Steps",
      "description": "Complete the first activity",
      "image": "url_to_image"
    },
    {
      "achievement_id": 2,
      "title": "Quiz Master",
      "description": "Score 100% on a quiz",
      "image": "url_to_image"
    }
  ]
}

```

**GET /api/achievements/earned**

- Retrieve achievements earned by a learner

Parameters:
- learner_id

Response:
```
{
  "success": true,
  "earned_achievements": [
    {
      "achievement_id": 1,
      "title": "First Steps",
      "description": "Complete the first activity",
      "image": "url_to_image",
      "earned_date": "2024-07-10T10:00:00Z"
    }
  ]
}
```



SUPPORTING ENDPOINTS

**GET /api/pw_pic_items**

- Retrieve all available picture items for the picture-based password system.

Parameters:
- n/a

Response:
```
{
  "success": true,
  "pw_pic_items": [
    {
      "pw_pic_item_id": 1,
      "name": "cat",
      "image": "url_to_cat_image",
      "type": "animal"
    },
    {
      "pw_pic_item_id": 2,
      "name": “dark blue",
      "image": “url_to_dark_blue_image",
      "type": "color"
    }
  ]
}

```

### Auth

to be determined soon

## Roadmap

to be added soon

## Nice-to-haves

- Separate teacher login to set up and manage accounts for a class
- picture password option to help kids remember their passwords
