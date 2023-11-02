<center>

## ACC Software Bootcamp
## FINAL ASSESSMENT


</center>

### INSTRUCTIONS:

1. Git clone this `Students_April_2023_Assessments` repository to your computer, within your "bootcamp" folder. Do not clone it INSIDE an existing git repository.

1. Copy the Final_Assessment folder over to your private repository under the ACCSoftwareBootcamp, so you may edit the contents there and push them, when completed.

    For example, get the questions from

    `https://github.com/ACCSoftwareBootcamp/Students_April_2023_Assessments/Final_Assessment`

    And push your answers to

    `https://github.com/ACCSoftwareBootcamp/<YOUR_REPO>/Final_Assessment`

    
1. View the questions by using the preview feature built into VSCode, or on view them on github.com, to be able to see the rendered code screenshots.

1. There's a folder for each questions type and for each question.  Please create an answer file within the respective folder, as needed.  

1. This assessment is in 3 parts

    1. **Multiple choice questions**. These have equal weight and add up to 36% of the evaluation. Please answer all questions.

    2. **Small practice questions**.  These have equal weight and total up to 40% of the evaluation.

    3. **Practical portion**.  This is a small project, that has 24% of the evaluation.

1. This assessment is open book.  You may use all references available to you to answer the questions. You may ask instructors to point you in the right direction, if you are stuck. Think of this as a typical work environment, where you may ask a peer to show you the way, but not do the work for you.

1. If a code snippet on the assessment has a bug, please fix it and then answer it.

1. Please git commit, git push your answers to your ACCSoftwareBootcamp repository only.

### INTEGRITY: 

Remember this final assessment is a test of how well prepared you are. While some of the questions may appear difficult, they CAN be answered with research and testing. 

It is important to learn from this experience. And as such ...

- Please do not share direct or indirect answers with others.
- No sharing of url references, your peers can web search too ;-).
- Any clarification from instructors should be posted on Slack under the channel **#assessments** such that all students have access to it.
- The grading instructor will ask you to explain portions of your work over a Zoom meeting.


### EVALUATION CRITERIA:

1. Evidence of understanding of the underlying concepts related to the question. Can you answer the "why"? Have you provided comments that show your understanding of why you are doing what you submit?

1. Does your code have comments? All solutions must have brief comments explaining what the code does. Assume we do not know what you are doing.

For example, here's bad comments:

```
// I am writing a function
function handleClick(){
    // fetching from the url
    fetch(url).
    .then(function(data){
        res.send(data)
    })
    // I'm catching an error
    .catch(err => console.log(err))
}
```

And here are nicer comments:

```
// function fetches data from the Weather API
function handleClick(){
    fetch(url)
    .then(function(data){
        // here data is an array of results
        res.send(data)
    })
    .catch(err => console.log(err))
}
```

1. Does your code work, where applicable?

1. How complete is your answer and/or your code.  Code is complete if it can handle multiple possible inputs, e.g. user entering input of incompatible data type or no input.

1. Have you indented your code appropriately? At the very least use the VSC inbuilt Format Document functionality.

1. Solutions that are directly copied from online sources would not be accepted. The code must be yours and you must explain how it works in the comments. 

1. We will call on every student to explain their answers to one or multiple questions, at the choice of the grader. Your answers must provide a solid understanding of your code and choices made, to get credit.


### TIME AVAILABLE, PASSING CRITERIA & SCORING STRATEGIES

1. This assessment may be completed within 4-6 hours depending on your ability and speed. However, you may take the day to complete the assessment. Please remember to make your final commit and push by end of the calendar day (i.e. at 11:59 pm today), except when other arrangements have been made with the lead instructor. Pushes made after the day may still be evaluated but with a possible penalty of 20% on that question, unless prior arrangement has been made with the Lead Instructor.

1. Some questions are super easy, others are more challenging. To make sure you have enough time for all short questions, pace yourself, return to the difficult ones later. We recommend you attempt all questions, as seemingly difficult questions turn out to be not so difficult.

1. Some questions are designed to not test your knowledge, but your ability to quickly research a topic, understand it and use it and explain it. Hence don't skip questions that seem unfamiliar to you.

1. Credit is given for partially complete or correct answers as well. Hence, please do not skip questions. Take the solution as far as you can.

1. Do attempt the practical solutions and push them, even if they don't work.

1. 40% of the grade points will be granted for your submitted work. 60% will be granted for the zoom interview where you would be provided a chance to explain your some of your code. The grader may ask you why your code works, or does not. They may ask you how would you attempt to fix it. They may ask you how you may enhance your code. They may ask these questions for some of the submitted questions over a zoom call with you, arranged over the next week at a mutually convenient time.

Happy coding!