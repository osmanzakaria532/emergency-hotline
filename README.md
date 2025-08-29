## ASSIGNMENT-005

---

## ✅ Main Requirements (50 Marks)

### 1. Navbar ( Done )

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section ( Done )

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section ( Done )

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section ( Done )

- **Show Minimum 6 cards**. Each card will contain:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at right
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section ( Done )

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness ( Done )

- Website should be fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons ( Done )

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons ( Done )

- On clicking a card's **Call Button**, following actions will happen:
  - Show an **alert** with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, show a relevant alert and terminate the process.
  - Add this service into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section

- Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

```
1.
  getElementById: আইডি দিয়ে একটি এলিমেন্ট নির্বাচন করে।
  getElementsByClassName: একই নামের ক্লাস একাধিক এলিমেন্ট নির্বাচন করে।
  querySelector: একই নামের ক্লাস অনেকগুলো এর প্রথম এলিমেন্টকে নির্বাচন করে ।
  querySelectorAll: একই নামের ক্লাস সব এলিমেন্টকে নির্বাচন করে।

  --- ---
2.
  নতুন এলিমেন্ট তৈরি করতে document.createElement('tagName')।

  এরপর parentElement.appendChild(newElement) দিয়ে DOM-এ যুক্ত করে।

  --- ---

3.
  Event Bubbling: Event Bubbling হল একটি ইভেন্ট প্রপাগেশন, যেখানে যখন কোনো ইভেন্ট ক্লিক পরে, তখন এটি প্রথমে সেই টার্গেট এলিমেন্টে ট্রিগার হয় এবং পরে তা ধীরে ধীরে প্যারেন্ট এলিমেন্টগুলোর মধ্যে ট্রিগার হয়ে উপরের দিকে চলে যায়।

  --- ---

4.
  Event Delegation: কোনো প্যারেন্ট এলিমেন্টে একাধিক চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডলার যুক্ত না করে, প্যারেন্ট এলিমেন্টে একটিই হ্যান্ডলার যুক্ত করে দেওয়া।

  preventDefault() vs stopPropagation():

  --- ---

5.
  preventDefault(): ডিফল্ট ব্রাউজার অ্যাকশন বন্ধ করে

  stopPropagation(): ইভেন্টের ট্রিগার প্রক্রিয়া থামিয়ে দেয়, অন্য প্যারেন্ট এলিমেন্টে পৌঁছাতে দেয় না।
```

---

## 🧪 Challenges Part ( Done )

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)
- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)
- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
