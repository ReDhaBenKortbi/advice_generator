axios.defaults.baseURL = "https://api.adviceslip.com";
const adviceNum = document.getElementById("adviceNum");
const advice = document.getElementById("advice");

export async function getAdvice() {
  advice.textContent = "loading...";
  adviceNum.textContent = "loading...";
  try {
    const {
      data: { slip },
    } = await axios.get("/advice");
    advice.textContent = slip.advice;
    adviceNum.textContent = slip.id;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    console.log(message);
    advice.textContent = "error occured";
    adviceNum.textContent = null;
  }
}
