# Form Validation and DOM Manipulation

## Reflection Questions

1: If we remove the event.preventDefault(), The page will be refreshed, so that the JavaScript will be stopped,d and we can not control, check, and save the data.

2: HTML attribute will be run in the browser(Client-side), and the browser shows only the default validation message. But in JavaScript-based validation, we can check if it runs in real-time on blur or on submit, 
Also, we can design our custom error message or write our custom rule to check the validation. We can use both at the same time to use the Pros of both of them at the same time.

3: For storing the username, I used localStorage.setItem("username", username.value) and for reading that data, I used username.value = localStorage.getItem("username"). The localStorage.setItem(key, value) will 
Save the data in localStorage with a key, and to read that data, we need this key. So, for reading the data, the code will be:localStorage.getItem(key). With many reasons, the localStorage is not a safe place to store sensitive data.
such as:
- Reachable and changeable from the browser and JS
- Limit size

4: My validation logic checked password length before checking for empty strings. Consequently, the empty input check was never triggered because the length was always handled first. It took me a while to debug this.

5: I checked all the inputs with the help of eventListener, so they will be checked any time the user touches the inputs and checked almost all the conditions in it, then showes custom error message for each error separately. Also, check the errors in the submission.
##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
