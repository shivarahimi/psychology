// آیا محیط فعلی مرورگر هست یا خیر در صورت وجود ویندو تابع رو بهم برگردون
// در حالت تبلت و موبایل آندیفایند
// زمانی به کوکی دسترسی پیدا میکنی که محیط مرورگر باشه
const getClient = (): Window | undefined => {
  return typeof window !== "undefined" ? window : undefined;
};
//getCookie
// for call api in interceptors
const getCookie = (name: string): any => {
  const client = getClient();

  if (client) {
    // split(";") ===> تبدیل رشته دریافتی به آرایه
    // client.document.cookie ===> دسترسی به کوکی های ذخیره شده که به صورت رشته هست
    const cookies = client.document.cookie.split(";");
    for (const cookie of cookies) {
      // نام و مقدار کوکی از هم جدا میشوند .split("=")
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    // عدم یافتن کوکی
    return null;
  }
};
// setCookie
// for login
const setCookie = (name: string, value: string): void => {
  const client = getClient();
  if (client) {
    // یک شی ء ساخته میشود که تاریخ و زمان کنونی را مشخص میکند
    const expires = new Date();
    // تاریخ انقضای کوکی مشخص میشه که 60 روز پس از زمان فعلی هست
    expires.setTime(expires.getTime() + 60 * 24 * 60 * 60 * 1000);
    // تنظیم کوکی در مرورگر
    // path=/ ===> برای تمام مسیرها معتبر است
    client.document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
};
//setGenericCookie
// تبدیل کردن ولیو به رشته چون مقدار ورودی آبکت هست که همان اطلاعات دریافتی از توکن میباشد
const setGenericCookie = (name: string, value: any): void => {
  const client = getClient();

  if (client) {
    const expires = new Date();
    expires.setTime(expires.getTime() + 60 * 24 * 60 * 60 * 1000);

    client.document.cookie = `${name}=${JSON.stringify(
      value
    )};expires=${expires.toUTCString()};path=/`;
  }
};
// getGenericCookie
// تبدیل مجدد رشته به آبجکت برای استفاده از مقادیر درونش که شامل اسم و اطلاعات شخص میباشد ===> JSON.parse
const getGenericCookie = (name: string) => {
  const client = getClient();

  if (client) {
    const cookies = client.document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return JSON.parse(cookieValue);
      }
    }
    return null;
  }
};
// clearAllCookies
const clearAllCookies = (): void => {
  const client = getClient();
  if (client) {
    // کوکی در مرورگر به صورت رشته با علامت ";" ذخیره میشود با اسپلیت رشته هایی که با علامت از هم جدا شدند
    // به صورت آرایه کنار هم قرار میگیرند
    const cookies = client.document.cookie.split(";");
    // هر کوکی موجود در آرایه بررسی میشود
    for (const cookie of cookies) {
      // موقعیت = در هر کوکی پیدا میشود، اگر پیدا شد به این معناست که کوکی معتبر است و نامش استخراج میشود
      // اگر پیدا نشد یعنی یک مقدار بدون نام است و تمام کوکی به عنوان نام در نظر گرفته میشه
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      // هر کوکی با نام مشخص حذف میشود ،آنهایی که تاریخ انقضایشان گذشته
      // path=/ ===> از همه مسیرهای سایت حذف میشود
      client.document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
};

export {
  getCookie,
  setCookie,
  setGenericCookie,
  getGenericCookie,
  clearAllCookies,
};
