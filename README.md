# BMI_calculator
⚖️ BMI Calculator - React App. A simple BMI Calculator built with React.js. Adjust weight (kg)⚖️ and height (cm)📏 using sliders, and get instant BMI results. Uses useMemo for optimized calculations. Displays feedback based on BMI range.  🔹 Tech: React.js, JavaScript, HTML, CSS 🚀

Why We Used useMemo?

In this app, we used the useMemo hook to optimize performance 🔥 and avoid unnecessary recalculations. Here’s why it matters:
	•	Preventing Recalculation: Without useMemo, the BMI calculation would be done every time the component re-renders—whether or not the weight or height values have changed. This would lead to unnecessary computations for things that don’t need it.
	•	Efficient Performance: By using useMemo, we ensure that the BMI calculation only happens when either weight or height changes. This avoids doing the same calculation over and over again, which is especially helpful as the app grows or adds more complex features. 💻
	•	Smooth User Experience: It helps keep the app running fast 🚀, with smooth interactions and no lag, even when there are lots of state changes.

So in short, useMemo makes sure we’re only doing the math when it counts—keeping things fast and efficient! ⚡
