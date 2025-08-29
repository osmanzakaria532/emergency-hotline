const nationalEmergencyNumber = document.getElementById(
  "national_emergency_number"
);
const policeHelplineNumber = document.getElementById("police_helpline_number");
const fireServiceNumber = document.getElementById("fire_service_number");
const heartButtons = document.getElementsByClassName("heartButton");

// Function to update heart
nationalEmergencyNumber.addEventListener("click", function () {
  const heartValue = document.getElementById("heartValue");
  let currentValue = parseInt(heartValue.innerText);
  heartValue.innerText = currentValue + 1;
});

policeHelplineNumber.addEventListener("click", function () {
  const heartValue = document.getElementById("heartValue");
  let currentValue = parseInt(heartValue.innerText);
  heartValue.innerText = currentValue + 1;
});

fireServiceNumber.addEventListener("click", function () {
  const heartValue = document.getElementById("heartValue");
  let currentValue = parseInt(heartValue.innerText);
  heartValue.innerText = currentValue + 1;
});

// Function
const coinsEl = document.getElementById("coins");
const callHistory = document.getElementById("call_history");
const cards = document.getElementsByClassName("card");

for (const card of cards) {
  const callBtn = card.querySelector(".call_btn");

  callBtn.addEventListener("click", function () {
    const title = card.querySelector(".title").innerText;
    const serviceNumber = card.querySelector(".service_number").innerText;

    let currentCoins = parseInt(coinsEl.innerText);

    if (currentCoins < 20) {
      alert("Not enough coins to make a call.");
      return;
    }

    alert("Calling: " + title + " " + serviceNumber);
    coinsEl.innerText = currentCoins - 20;

    const now = new Date();
    const localTimeString = now.toLocaleTimeString();

    // Append new history using innerHTML +=
    callHistory.innerHTML += `
      <div class="flex items-center justify-between my-3 pb-1">
        <div class="left">
          <h2 class="font-medium text-[13px]">${title}</h2>
          <p>${serviceNumber}</p>
        </div>
        <div class="right">
          <p class="text-[12px] sm:text-[14px] ml-1">${localTimeString}</p>
        </div>
      </div>
    `;
  });
}

// Copy to clipboard functionality
const copyBtns = document.getElementsByClassName("copy_btn");

for (const copyBtn of copyBtns) {
  const civ = document.getElementById("copy_increment_value");
  copyBtn.addEventListener("click", function () {
    let currentValue = parseInt(civ.innerText);
    civ.innerText = currentValue + 1;
  });
  const serviceNumber = document.getElementById("service_number");
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(serviceNumber.innerText);

    alert("Hotline copied: " + serviceNumber.innerText);
  });
}

// clear history section
const clearCallHistoryBtn = document.getElementById("clear_call_history_btn");
clearCallHistoryBtn.addEventListener("click", function () {
  const clearCallHistoryList = document.getElementById(
    "clear_call_history_list"
  );
  clearCallHistoryList.innerHTML = "";
});
