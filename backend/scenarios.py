scenarios_data = [
    {
        "id": 1,
        "title": "Classroom Participation",
        "description": "The teacher asks a question to the class.",
        "background": "classroom",
        "panels": [
            {
                "text": "The teacher asks, 'Who knows the answer to this math problem?'",
                "question": "What should you do?",
                "options": [
                    {"text": "Stand up and shout", "correct": False, "feedback": "Standing up might distract others. It's better to raise your hand."},
                    {"text": "Raise your hand", "correct": True, "feedback": "Great! Raising your hand shows you know the answer and want to participate politely."},
                    {"text": "Say nothing", "correct": False, "feedback": "It's okay to participate! Raising your hand is a good way to join in."}
                ]
            },
            {
                "text": "The teacher calls on you. You answer correctly.",
                "question": "How should you react?",
                "options": [
                    {"text": "Smile and wait for the next question", "correct": True, "feedback": "Perfect! This shows you're engaged and ready to continue."},
                    {"text": "Jump up and down excitedly", "correct": False, "feedback": "It's great to be excited, but jumping might distract the class."},
                    {"text": "Say 'I'm the smartest!'", "correct": False, "feedback": "It's good to be confident, but we should also be considerate of others."}
                ]
            },
            {
                "text": "The teacher asks you to come to the board to solve a problem.",
                "question": "What should you do?",
                "options": [
                    {"text": "Walk calmly to the board", "correct": True, "feedback": "Excellent! Moving calmly shows confidence."},
                    {"text": "Run excitedly to the board", "correct": False, "feedback": "Walking is safer and more appropriate."},
                    {"text": "Say 'I don't want to'", "correct": False, "feedback": "It's okay to be nervous, but trying new things helps us learn."}
                ]
            },
            {
                "text": "You don't understand the math problem on the board.",
                "question": "What should you do?",
                "options": [
                    {"text": "Raise your hand and ask for help", "correct": True, "feedback": "Great job! Asking questions is how we learn."},
                    {"text": "Pretend you understand", "correct": False, "feedback": "It's okay to need help - teachers want to help you!"},
                    {"text": "Make noise to distract others", "correct": False, "feedback": "If you're confused, asking politely is the best solution."}
                ]
            },
            {
                "text": "The teacher is explaining something important.",
                "question": "How should you listen?",
                "options": [
                    {"text": "Face the teacher and pay attention", "correct": True, "feedback": "Perfect! This shows respect and helps you learn."},
                    {"text": "Play with your pencil", "correct": False, "feedback": "Try to focus on the teacher - you'll understand better."},
                    {"text": "Whisper to your neighbor", "correct": False, "feedback": "Listening quietly helps everyone learn."}
                ]
            },
            {
                "text": "You finish your work early.",
                "question": "What should you do?",
                "options": [
                    {"text": "Read quietly or do extra work", "correct": True, "feedback": "Excellent choice! Using time wisely is smart."},
                    {"text": "Announce you're done", "correct": False, "feedback": "It's great to finish, but let's not distract others."},
                    {"text": "Get up and walk around", "correct": False, "feedback": "Staying seated until everyone finishes is polite."}
                ]
            },
            {
                "text": "Your pencil breaks during a test.",
                "question": "What should you do?",
                "options": [
                    {"text": "Raise your hand and ask for a new one", "correct": True, "feedback": "Good thinking! Asking politely solves the problem."},
                    {"text": "Yell 'My pencil broke!'", "correct": False, "feedback": "Raising your hand is quieter and more polite."},
                    {"text": "Stop working", "correct": False, "feedback": "The teacher can help if you ask quietly."}
                ]
            },
            {
                "text": "The class is too loud during group work.",
                "question": "What should you do?",
                "options": [
                    {"text": "Use a quiet voice and remind others", "correct": True, "feedback": "Great leadership! Helping keep the volume down is kind."},
                    {"text": "Yell 'Be quiet!'", "correct": False, "feedback": "That would add to the noise - try a quieter reminder."},
                    {"text": "Make even more noise", "correct": False, "feedback": "Adding to the noise makes it harder for everyone."}
                ]
            },
            {
                "text": "You need to use the bathroom during class.",
                "question": "What should you do?",
                "options": [
                    {"text": "Raise your hand and ask politely", "correct": True, "feedback": "Perfect! This is the appropriate way to ask."},
                    {"text": "Just get up and leave", "correct": False, "feedback": "Always ask first so the teacher knows where you are."},
                    {"text": "Hold it until you're uncomfortable", "correct": False, "feedback": "It's okay to ask when you need to go."}
                ]
            },
            {
                "text": "The bell rings for recess.",
                "question": "How should you leave?",
                "options": [
                    {"text": "Wait for dismissal, then walk calmly", "correct": True, "feedback": "Excellent! Safety first when transitioning."},
                    {"text": "Run out immediately", "correct": False, "feedback": "Waiting prevents accidents in the hallway."},
                    {"text": "Push others to get out first", "correct": False, "feedback": "Being patient shows respect for classmates."}
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Playground Interaction",
        "description": "You want to join a game at recess.",
        "background": "playground",
        "panels": [
            {
                "text": "You see kids playing your favorite game.",
                "question": "How should you ask to join?",
                "options": [
                    {"text": "Walk over and say 'Can I play too?'", "correct": True, "feedback": "Excellent! Asking politely is the best way to join a game."},
                    {"text": "Just start playing without asking", "correct": False, "feedback": "It's important to ask first so others know you want to join."},
                    {"text": "Stand very close and watch silently", "correct": False, "feedback": "It's better to ask directly so they know you're interested."}
                ]
            },
            {
                "text": "They say 'Yes, you can play!'",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'Thanks!' and join the game", "correct": True, "feedback": "Perfect! Being grateful makes friends."},
                    {"text": "Take over the game", "correct": False, "feedback": "Join in without changing the rules - it's more fun for everyone."},
                    {"text": "Ignore them and play alone", "correct": False, "feedback": "They invited you - joining shows you appreciate it."}
                ]
            },
            {
                "text": "Someone accidentally bumps into you.",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'It's okay' and keep playing", "correct": True, "feedback": "Great! Accidents happen to everyone."},
                    {"text": "Push them back", "correct": False, "feedback": "Being kind about mistakes makes playground more fun."},
                    {"text": "Yell at them", "correct": False, "feedback": "Staying calm helps solve small problems."}
                ]
            },
            {
                "text": "You see someone sitting alone at recess.",
                "question": "What could you do?",
                "options": [
                    {"text": "Ask if they want to play", "correct": True, "feedback": "That's very kind! Including others is wonderful."},
                    {"text": "Ignore them", "correct": False, "feedback": "Reaching out might make their day better."},
                    {"text": "Laugh at them", "correct": False, "feedback": "Being kind to everyone makes the playground happy."}
                ]
            },
            {
                "text": "You disagree about the rules of the game.",
                "question": "What should you do?",
                "options": [
                    {"text": "Suggest taking turns with different rules", "correct": True, "feedback": "Great solution! Compromising keeps the game fun."},
                    {"text": "Insist on your way", "correct": False, "feedback": "Games are more fun when everyone helps decide."},
                    {"text": "Quit the game angrily", "correct": False, "feedback": "Talking about it keeps the game going."}
                ]
            },
            {
                "text": "You fall and scrape your knee.",
                "question": "What should you do?",
                "options": [
                    {"text": "Tell the teacher or playground monitor", "correct": True, "feedback": "Good! Adults can help when you're hurt."},
                    {"text": "Cry loudly but don't tell anyone", "correct": False, "feedback": "It's important to get help when you're injured."},
                    {"text": "Blame someone else", "correct": False, "feedback": "Accidents happen - focus on getting help first."}
                ]
            },
            {
                "text": "The bell rings to end recess.",
                "question": "What should you do?",
                "options": [
                    {"text": "Stop playing and line up calmly", "correct": True, "feedback": "Perfect! Following directions keeps everyone safe."},
                    {"text": "Keep playing until the teacher comes", "correct": False, "feedback": "Listening to the bell helps transitions go smoothly."},
                    {"text": "Run to be first in line", "correct": False, "feedback": "Walking safely prevents accidents."}
                ]
            },
            {
                "text": "Someone takes the ball you were using.",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'I was using that, can I have it back?'", "correct": True, "feedback": "Excellent! Using words solves problems peacefully."},
                    {"text": "Grab it back", "correct": False, "feedback": "Using words first is always better."},
                    {"text": "Tell the teacher immediately", "correct": False, "feedback": "Try talking to the person first if you feel safe."}
                ]
            },
            {
                "text": "You're tired but friends want you to keep playing.",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'I need a break, but thanks!'", "correct": True, "feedback": "Great self-care! It's okay to rest when needed."},
                    {"text": "Keep playing until you're exhausted", "correct": False, "feedback": "Listening to your body is important."},
                    {"text": "Get angry at them", "correct": False, "feedback": "They might not know you're tired - just tell them politely."}
                ]
            },
            {
                "text": "You see someone cheating at a game.",
                "question": "What should you do?",
                "options": [
                    {"text": "Calmly remind them of the rules", "correct": True, "feedback": "Good approach! Gentle reminders help keep games fair."},
                    {"text": "Yell 'Cheater!'", "correct": False, "feedback": "Staying calm helps solve problems better."},
                    {"text": "Start cheating too", "correct": False, "feedback": "Following rules makes games more fun for everyone."}
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Asking for Help",
        "description": "You are stuck on a homework question.",
        "background": "homework",
        "panels": [
            {
                "text": "You're doing your homework and can't solve a math problem.",
                "question": "What should you do?",
                "options": [
                    {"text": "Ask a parent or teacher for help", "correct": True, "feedback": "That's right! Asking for help is a smart move when you're stuck."},
                    {"text": "Tear the page out", "correct": False, "feedback": "It's okay to feel frustrated, but tearing won't solve the problem."},
                    {"text": "Guess randomly", "correct": False, "feedback": "Trying your best is good, but asking for help gives better results."}
                ]
            },
            {
                "text": "The teacher is helping another student.",
                "question": "What should you do?",
                "options": [
                    {"text": "Wait patiently for your turn", "correct": True, "feedback": "Great patience! Everyone gets a turn for help."},
                    {"text": "Interrupt immediately", "correct": False, "feedback": "Waiting shows respect for others' time with the teacher."},
                    {"text": "Give up on the assignment", "correct": False, "feedback": "The teacher will help you when they're available."}
                ]
            },
            {
                "text": "You don't understand the homework instructions.",
                "question": "What should you do?",
                "options": [
                    {"text": "Ask for the instructions to be explained", "correct": True, "feedback": "Good choice! Understanding directions helps you work better."},
                    {"text": "Guess what to do", "correct": False, "feedback": "It's better to ask than do the wrong thing."},
                    {"text": "Copy a friend's paper", "correct": False, "feedback": "Asking helps you learn - copying doesn't."}
                ]
            },
            {
                "text": "Your parent is busy when you need homework help.",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'Can you help me when you're free?'", "correct": True, "feedback": "Perfect! This respects their time while getting you help."},
                    {"text": "Keep tugging at their arm", "correct": False, "feedback": "Asking politely works better than demanding attention."},
                    {"text": "Throw your books", "correct": False, "feedback": "Staying calm gets better results."}
                ]
            },
            {
                "text": "The help you get still doesn't make sense.",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'I still don't understand. Can you explain differently?'", "correct": True, "feedback": "Great communication! People can explain in new ways."},
                    {"text": "Pretend you understand", "correct": False, "feedback": "It's okay to need more explanation - just ask!"},
                    {"text": "Get angry", "correct": False, "feedback": "Staying calm helps people help you better."}
                ]
            },
            {
                "text": "You need help but feel embarrassed to ask.",
                "question": "What should you do?",
                "options": [
                    {"text": "Ask anyway - everyone needs help sometimes", "correct": True, "feedback": "Brave choice! Asking shows you're trying to learn."},
                    {"text": "Never ask for help", "correct": False, "feedback": "Everyone needs help - even teachers and parents!"},
                    {"text": "Make excuses not to do the work", "correct": False, "feedback": "Asking for help is better than avoiding work."}
                ]
            },
            {
                "text": "A classmate asks you for help.",
                "question": "What should you do?",
                "options": [
                    {"text": "Help if you can, or suggest asking the teacher", "correct": True, "feedback": "Great teamwork! Helping others when you can is kind."},
                    {"text": "Ignore them", "correct": False, "feedback": "Even if you can't help, a kind response is better."},
                    {"text": "Give them the answers", "correct": False, "feedback": "Explaining is better than just giving answers."}
                ]
            },
            {
                "text": "You're in a library and need help finding a book.",
                "question": "What should you do?",
                "options": [
                    {"text": "Ask the librarian politely", "correct": True, "feedback": "Perfect! Librarians love to help find books."},
                    {"text": "Yell across the library", "correct": False, "feedback": "Asking quietly respects others studying."},
                    {"text": "Give up looking", "correct": False, "feedback": "Asking for help makes finding books much easier!"}
                ]
            },
            {
                "text": "You need help with a computer problem.",
                "question": "What should you do?",
                "options": [
                    {"text": "Ask an adult who knows about computers", "correct": True, "feedback": "Good thinking! Getting expert help solves tech problems."},
                    {"text": "Keep clicking randomly", "correct": False, "feedback": "Random clicking might make the problem worse."},
                    {"text": "Hit the computer", "correct": False, "feedback": "Being gentle with technology and asking for help works better."}
                ]
            },
            {
                "text": "Someone offers help you don't need.",
                "question": "What should you do?",
                "options": [
                    {"text": "Say 'Thanks, but I've got it'", "correct": True, "feedback": "Perfect! This is polite but clear."},
                    {"text": "Ignore them", "correct": False, "feedback": "A quick response is more polite."},
                    {"text": "Get angry", "correct": False, "feedback": "They're trying to be kind - a polite 'no thanks' is best."}
                ]
            }
        ]
    },
    # Continuing with scenarios 4 through 10 (each with 10 panels)...
    # Note: For brevity, I'll show the structure for one more scenario
    # but all scenarios would follow the same 10-panel pattern
    {
        "id": 4,
        "title": "Making New Friends",
        "description": "You're new in school and want to make friends.",
        "background": "cafeteria",
        "panels": [
            {
                "text": "You walk into the cafeteria and see a group eating lunch.",
                "question": "How can you join them?",
                "options": [
                    {"text": "Sit down silently", "correct": False, "feedback": "It's polite to ask first so they know you'd like to join."},
                    {"text": "Say hello and ask if you can sit with them", "correct": True, "feedback": "Awesome! A friendly greeting goes a long way."},
                    {"text": "Ignore them and sit alone", "correct": False, "feedback": "It's brave to ask. You might make new friends!"}
                ]
            },
            {
                "text": "They say 'Yes, join us!'",
                "question": "What should you do next?",
                "options": [
                    {"text": "Smile, say thanks, and sit down", "correct": True, "feedback": "Perfect! This starts the conversation nicely."},
                    {"text": "Start talking about yourself nonstop", "correct": False, "feedback": "Conversations work best when everyone gets turns to talk."},
                    {"text": "Stay silent the whole time", "correct": False, "feedback": "Sharing some things about yourself helps make friends."}
                ]
            },

            {
    "id": 5,
    "title": "Working in a Group",
    "description": "You are in a group for a school project.",
    "background": "library",
    "panels": [
        {
            "text": "The group is thinking about ideas. You have one.",
            "question": "What can you do?",
            "options": [
                {"text": "Wait for a pause and say your idea", "correct": True, "feedback": "Good job! That shows respect and confidence."},
                {"text": "Say your idea loudly, even if someone is talking", "correct": False, "feedback": "Letting others finish first is kind."},
                {"text": "Say nothing and stay quiet", "correct": False, "feedback": "Your ideas are important. You can speak up."}
            ]
        },
        {
            "text": "The group likes your idea.",
            "question": "What can you do next?",
            "options": [
                {"text": "Say thank you and help with the work", "correct": True, "feedback": "Nice! Helping shows you are part of the team."},
                {"text": "Tell everyone what to do", "correct": False, "feedback": "Working together means sharing decisions."},
                {"text": "Say nothing and wait", "correct": False, "feedback": "You can join in and be part of the team."}
            ]
        }
    ]
},
{
    "id": 6,
    "title": "Helping Someone",
    "description": "A student drops books in the hallway.",
    "background": "hallway",
    "panels": [
        {
            "text": "They look upset and need help.",
            "question": "What can you do?",
            "options": [
                {"text": "Ask if they need help and pick up the books", "correct": True, "feedback": "Great! Helping others feels good."},
                {"text": "Walk away without saying anything", "correct": False, "feedback": "It’s kind to help someone in need."},
                {"text": "Watch quietly", "correct": False, "feedback": "Helping can make someone feel better."}
            ]
        },
        {
            "text": "They say thank you and smile.",
            "question": "What can you say back?",
            "options": [
                {"text": "Say 'You're welcome!' and smile", "correct": True, "feedback": "Well done! That’s a friendly way to reply."},
                {"text": "Say nothing", "correct": False, "feedback": "Kind words help make friends."},
                {"text": "Look away", "correct": False, "feedback": "Smiling back shows you care."}
            ]
        }
    ]
},
{
    "id": 7,
    "title": "Different Opinions",
    "description": "A student says they don’t agree with your answer.",
    "background": "classroom",
    "panels": [
        {
            "text": "They think something different.",
            "question": "What can you say?",
            "options": [
                {"text": "Say 'Okay. I see your idea. Here’s mine…'", "correct": True, "feedback": "Good! It's okay to have different thoughts."},
                {"text": "Say 'You are wrong!'", "correct": False, "feedback": "It’s better to listen and stay calm."},
                {"text": "Stay quiet and look away", "correct": False, "feedback": "You can speak kindly and share your thoughts."}
            ]
        },
        {
            "text": "They listen to your idea too.",
            "question": "What do you say now?",
            "options": [
                {"text": "Say 'Thanks for listening!'", "correct": True, "feedback": "Nice! Saying thank you keeps things friendly."},
                {"text": "Say 'I’m still right'", "correct": False, "feedback": "Everyone can think differently. That’s okay."},
                {"text": "Ignore them", "correct": False, "feedback": "Talking helps people understand each other."}
            ]
        }
    ]
},
{
    "id": 8,
    "title": "Oops! A Small Accident",
    "description": "You bump into someone by mistake.",
    "background": "locker-area",
    "panels": [
        {
            "text": "They drop their pen and look surprised.",
            "question": "What should you do?",
            "options": [
                {"text": "Say 'I’m sorry!' and help pick it up", "correct": True, "feedback": "That’s the right thing to do. Mistakes happen."},
                {"text": "Keep walking without saying anything", "correct": False, "feedback": "Saying sorry is kind and helpful."},
                {"text": "Say 'It’s not my fault!'", "correct": False, "feedback": "Taking responsibility is a good thing."}
            ]
        },
        {
            "text": "They say it’s okay.",
            "question": "What should you say now?",
            "options": [
                {"text": "Say 'Thank you' and smile", "correct": True, "feedback": "Great! That ends things in a friendly way."},
                {"text": "Say nothing", "correct": False, "feedback": "A kind word helps both of you feel better."},
                {"text": "Walk away fast", "correct": False, "feedback": "It’s good to finish the moment with kindness."}
            ]
        }
    ]
},
{
    "id": 9,
    "title": "Waiting in Line",
    "description": "You are waiting in line for lunch.",
    "background": "cafeteria-line",
    "panels": [
        {
            "text": "Someone walks in front of you.",
            "question": "What can you do?",
            "options": [
                {"text": "Say 'Excuse me, I think I was first.'", "correct": True, "feedback": "Great job! Calm words are strong."},
                {"text": "Push them", "correct": False, "feedback": "It’s better to use words, not actions."},
                {"text": "Say nothing and feel upset", "correct": False, "feedback": "It’s okay to speak up in a kind way."}
            ]
        },
        {
            "text": "They say sorry and move back.",
            "question": "What do you say?",
            "options": [
                {"text": "Say 'That’s okay'", "correct": True, "feedback": "Well done! That keeps the peace."},
                {"text": "Say 'Don’t do that again!'", "correct": False, "feedback": "It’s better to stay friendly."},
                {"text": "Ignore them", "correct": False, "feedback": "Friendly words help everyone feel good."}
            ]
        }
    ]
},
{
    "id": 10,
    "title": "Asking for Help",
    "description": "You don’t understand your homework.",
    "background": "study-room",
    "panels": [
        {
            "text": "You tried but still feel confused.",
            "question": "What can you do?",
            "options": [
                {"text": "Ask the teacher or a friend for help", "correct": True, "feedback": "That’s a smart and brave choice."},
                {"text": "Guess the answer", "correct": False, "feedback": "It’s better to understand the work first."},
                {"text": "Give up", "correct": False, "feedback": "Don’t give up. Help is always okay to ask for."}
            ]
        },
        {
            "text": "The teacher explains the answer.",
            "question": "What can you say?",
            "options": [
                {"text": "Say 'Thank you!' and try again", "correct": True, "feedback": "Great attitude! Learning takes practice."},
                {"text": "Say 'This is too hard!'", "correct": False, "feedback": "It’s okay to ask again and keep trying."},
                {"text": "Say nothing and leave", "correct": False, "feedback": "Saying thank you shows you care."}
            ]
        }
    ]
}

        ]
    },
]

def get_scenario(scenario_id):
    for scenario in scenarios_data:
        if scenario["id"] == scenario_id:
            return scenario
    return None

def get_all_scenarios():
    return scenarios_data