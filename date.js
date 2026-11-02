const year1 = document.getElementById("year");
const month1 = document.getElementById("month");
const day1 = document.getElementById("day");

const year2 = document.getElementById("year2");
const month2 = document.getElementById("month2");
const day2 = document.getElementById("day2");

const confirmBtn = document.getElementById("confirm");
const result = document.getElementById("result");
let clear = document.getElementById("clear");
let back = document.getElementById("back");
confirmBtn.onclick = function () {
  // 1. قراءة قيم التاريخين
  const y1 = Number(year1.value);
  const m1 = Number(month1.value);
  const d1 = Number(day1.value);

  const y2 = Number(year2.value);
  const m2 = Number(month2.value);
  const d2 = Number(day2.value);

  // 2. التأكد إن المستخدم أدخل كل البيانات
  if (
    !year1.value ||
    !year2.value ||
    m1 === 0 ||
    m2 === 0 ||
    d1 === 0 ||
    d2 === 0
  ) {
    result.textContent = "Please enter both dates.";
    return;
  }

  // 3. إنشاء التاريخين
  const date1 = new Date(y1, m1 - 1, d1);
  const date2 = new Date(y2, m2 - 1, d2);

  // 4. التأكد إن التاريخين صحيحان
  if (
    date1.getFullYear() !== y1 ||
    date1.getMonth() !== m1 - 1 ||
    date1.getDate() !== d1 ||
    date2.getFullYear() !== y2 ||
    date2.getMonth() !== m2 - 1 ||
    date2.getDate() !== d2
  ) {
    result.textContent = "Invalid date!";
    return;
  }

  // 5. ترتيب التاريخين من الأقدم إلى الأحدث
  let start = date1;
  let end = date2;

  if (start > end) {
    start = date2;
    end = date1;
  }

  // 6. دالة لإضافة شهور مع مراعاة طول الشهر
  function addMonths(date, amount) {
    const targetMonth = new Date(
      date.getFullYear(),
      date.getMonth() + amount,
      1,
    );

    const lastDay = new Date(
      targetMonth.getFullYear(),
      targetMonth.getMonth() + 1,
      0,
    ).getDate();

    const targetDay = Math.min(date.getDate(), lastDay);

    return new Date(
      targetMonth.getFullYear(),
      targetMonth.getMonth(),
      targetDay,
    );
  }

  // 7. حساب السنوات الكاملة
  let years = 0;

  while (true) {
    const nextYear = addMonths(start, 12);

    if (nextYear > end) break;

    start = nextYear;
    years++;
  }

  // 8. حساب الشهور الكاملة المتبقية
  let months = 0;

  while (true) {
    const nextMonth = addMonths(start, 1);

    if (nextMonth > end) break;

    start = nextMonth;
    months++;
  }

  // 9. حساب الأيام المتبقية
  const startDays = Date.UTC(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );

  const endDays = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());

  const days = (endDays - startDays) / 86400000;

  // 10. عرض النتيجة
  result.innerHTML = `
  <p>year: ${years}</p>
  <p>months: ${months}</p>
  <p>Days: ${days}</p>
  `;
};
clear.onclick = function () {
  year1.value = "";
  month1.value = 0;
  day1.value = 0;

  year2.value = "";
  month2.value = 0;
  day2.value = 0;
};
back.onclick = () => {
  window.location.href = "./index.html";
};
