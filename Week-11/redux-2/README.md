There’s just one component here: the StepCounter. It should have 2 buttons, one“Add Step” and one “Reset Steps”, as shown above. Clicking “Add Step” should increment the step counter by 1, and “Reset Steps” should clear it. (think: how many actions will you need?)For each action, create an action constant and an action creator. Use mapDispatchToProps to pass the actions in as props to the StepCounter component. Try out the object form of mapDispatch as well as the function form.You can break the project up into files if you like, or keep it all in one file. If you want a suggestion, try for an index.js with the createStore + reducer, a StepCounter.js with the component and any necessary connect() setup, and an actions.js with the actions (don’t forget to export them!).

---

[Deployed URL](https://p-steps-count.netlify.app/)

---

Steps to run locally

`npm i`

`npm start`

this will start server at port 3000

`http://localhost:3000/ copy this link and open in browser.`

---

![Screenshot 1](./screenshots/screenshot1.png)
![Screenshot 2](./screenshots/screenshot2.png)
