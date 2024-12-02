function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  }

const accessCookie = getCookie("access");
if (accessCookie != "true" && !window.location.pathname.endsWith("msg.html")) {
    window.location.href = "msg.html";
}



function checkPassword () {
    let pwd = document.getElementById("pwd").value;
    if (pwd == "leader--" || pwd == "zxc123"){
        const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `access=true; expires=${expirationDate.toUTCString()}; path=/`;
    window.location.href = "index.html";
    }
}