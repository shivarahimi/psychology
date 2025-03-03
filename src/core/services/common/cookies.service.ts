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
export { getCookie, setCookie, setGenericCookie, getGenericCookie };
