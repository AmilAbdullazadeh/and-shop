// Direction
export const LtrtoRtl = () => {
  document.querySelector(".app").classList.add("rtl");
  document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
  document.querySelector(".app").classList.remove("ltr");

  localStorage.setItem("zanexltr", true);
  localStorage.removeItem("zanexrtl");
};
export const RtltoLtr = () => {
  document.querySelector(".app").classList.add("ltr");
  document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css")
  document.querySelector(".app").classList.remove("rtl");

  localStorage.setItem("zanexrtl", true);
  localStorage.removeItem("zanexltr");
};

// Color theme
export const LightTheme = () => {
  document.querySelector(".app").classList.add("light-mode");
  document.querySelector(".app").classList.remove("transparent-mode");
  document.querySelector(".app").classList.remove("dark-mode");

  document.querySelector("html").style = "";
  name();
  localStorage.clear();
};
export const dark = () => {
  document.querySelector(".app").classList.add("dark-mode");

  document.querySelector(".app").classList.remove("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");

  document.querySelector("html").style = "";
  name();
  localStorage.clear();
};
export const transparent = () => {
  document.querySelector(".app").classList.add("transparent-mode");

  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector(".app").classList.remove("dark-mode");
  document.querySelector(".app").classList.remove("bg-img1");
  document.querySelector(".app").classList.remove("bg-img2");
  document.querySelector(".app").classList.remove("bg-img3");
  document.querySelector(".app").classList.remove("bg-img4");

  document.querySelector(".app").classList.remove("light-menu");
  document.querySelector(".app").classList.remove("color-menu");
  document.querySelector(".app").classList.remove("dark-menu");
  document.querySelector(".app").classList.remove("gradient-menu");

  document.querySelector(".app").classList.remove("color-header");
  document.querySelector(".app").classList.remove("gradient-header");
  document.querySelector(".app").classList.remove("light-header");
  document.querySelector(".app").classList.remove("dark-header");

  document.querySelector("html").style = "";
  name();
  localStorage.clear();
};

/*Transparent Bg-Image Style Start*/

export function bgimage1() {
  document.querySelector(".app").classList.add("bg-img1");
  document.querySelector(".app").classList.remove("bg-img2");
  document.querySelector(".app").classList.remove("bg-img3");
  document.querySelector(".app").classList.remove("bg-img4");
  document.getElementById("myonoffswitchTransparent").checked = true;
  localStorage.setItem("zanexBgImage", "bg-img1");
  transparentStyle();

  document.querySelector(".app").classList.add("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector(".app").classList.remove("dark-mode");
  localStorage.removeItem("zanexprimaryColor");
  localStorage.removeItem("zanexprimaryHoverColor");
  localStorage.removeItem("zanexprimaryBorderColor");
  localStorage.removeItem("zanexprimaryTransparent");
  localStorage.removeItem("zanexdarkPrimaryColor");
  localStorage.removeItem("zanextransparentPrimaryColor");
  localStorage.removeItem("zanextransparentBgColor");
  document.querySelector("html").style.removeProperty("--transparent-body");
}

export function bgimage2() {
  transparentStyle();
  document.querySelector(".app").classList.add("bg-img2");
  document.querySelector(".app").classList.remove("bg-img1");
  document.querySelector(".app").classList.remove("bg-img3");
  document.querySelector(".app").classList.remove("bg-img4");
  document.getElementById("myonoffswitchTransparent").checked = true;
  localStorage.setItem("zanexBgImage", "bg-img2");
  document.querySelector("html").style.removeProperty("--transparent-body");

  document.querySelector(".app").classList.add("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector(".app").classList.remove("dark-mode");
  localStorage.removeItem("zanexprimaryColor");
  localStorage.removeItem("zanexprimaryHoverColor");
  localStorage.removeItem("zanexprimaryBorderColor");
  localStorage.removeItem("zanexprimaryTransparent");
  localStorage.removeItem("zanexdarkPrimaryColor");
  localStorage.removeItem("zanextransparentPrimaryColor");
  localStorage.removeItem("zanextransparentBgColor");
}

export function bgimage3() {
  document.querySelector(".app").classList.add("bg-img3");
  document.querySelector(".app").classList.remove("bg-img1");
  document.querySelector(".app").classList.remove("bg-img2");
  document.querySelector(".app").classList.remove("bg-img4");
  document.getElementById("myonoffswitchTransparent").checked = true;
  localStorage.setItem("zanexBgImage", "bg-img3");
  document.querySelector("html").style.removeProperty("--transparent-body");
  transparentStyle();

  document.querySelector(".app").classList.add("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector(".app").classList.remove("dark-mode");

  localStorage.removeItem("zanexprimaryColor");
  localStorage.removeItem("zanexprimaryHoverColor");
  localStorage.removeItem("zanexprimaryBorderColor");
  localStorage.removeItem("zanexprimaryTransparent");
  localStorage.removeItem("zanexdarkPrimaryColor");
  localStorage.removeItem("zanextransparentPrimaryColor");
  localStorage.removeItem("zanextransparentBgColor");
}

export function bgimage4() {
  document.querySelector(".app").classList.add("bg-img4");
  document.querySelector(".app").classList.remove("bg-img1");
  document.querySelector(".app").classList.remove("bg-img2");
  document.querySelector(".app").classList.remove("bg-img3");
  document.getElementById("myonoffswitchTransparent").checked = true;
  localStorage.setItem("zanexBgImage", "bg-img4");
  document.querySelector("html").style.removeProperty("--transparent-body");
  transparentStyle();

  document.querySelector(".app").classList.add("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector(".app").classList.remove("dark-mode");
  localStorage.removeItem("zanexprimaryColor");
  localStorage.removeItem("zanexprimaryHoverColor");
  localStorage.removeItem("zanexprimaryBorderColor");
  localStorage.removeItem("zanexprimaryTransparent");
  localStorage.removeItem("zanexdarkPrimaryColor");
  localStorage.removeItem("zanextransparentPrimaryColor");
  localStorage.removeItem("zanextransparentBgColor");
}

/*Transparent Bg-Image Style End*/
export function handleThemeUpdate(cssVars) {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st, chunkSize) =>
  st.match(new RegExp(`.{${chunkSize}}`, "g"));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
  if (typeof a !== "undefined") {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTransparentBackground(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName1 = `--transparent-${item.getAttribute("data-id5")}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

function transparentStyle() {
  document.querySelector(".app").classList.remove("light-menu");
  document.querySelector(".app").classList.remove("dark-menu");
  document.querySelector(".app").classList.remove("color-menu");
  document.querySelector(".app").classList.remove("gradient-menu");
  document.querySelector(".app").classList.remove("light-header");
  document.querySelector(".app").classList.remove("color-header");
  document.querySelector(".app").classList.remove("dark-header");
  document.querySelector(".app").classList.remove("gradient-header");
}
export function resetData() {
  document.querySelector("#myonoffswitch4").checked = true; //ltr
  document.querySelector("#myonoffswitch6").checked = true; //ligth more
  document.querySelector(".app")?.classList.remove("bg-img4");
  document.querySelector(".app")?.classList.remove("bg-img1");
  document.querySelector(".app")?.classList.remove("bg-img2");
  document.querySelector(".app")?.classList.remove("bg-img3");
  document.querySelector(".app")?.classList.remove("transparent-mode");
  document.querySelector(".app")?.classList.remove("dark-mode");

  document.querySelector(".app").classList.add("sidebar-mini");

  document.querySelector(".app").classList.add("ltr");
  document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
  document.querySelector(".app").classList.remove("rtl");
  name();
}

export function name() {
  let primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-bg-color")
    .trim();

  //get variable
  let myVarVal =
    localStorage.getItem("zanexprimaryColor") ||
    localStorage.getItem("zanexdarkPrimaryColor") ||
    localStorage.getItem("zanextransparentPrimaryColor") ||
    localStorage.getItem("zanextransparent-bgImgPrimaryColor") ||
    localStorage.getItem("zanextransparentBgImgPrimary") ||
    primaryColorVal;

  let colorData = hexToRgba(myVarVal || "#6259ca", 0.1);
  document.querySelector("html").style.setProperty("--primary01", colorData);

  let colorData1 = hexToRgba(myVarVal || "#6259ca", 0.2);
  document.querySelector("html").style.setProperty("--primary02", colorData1);

  let colorData2 = hexToRgba(myVarVal || "#6259ca", 0.3);
  document.querySelector("html").style.setProperty("--primary03", colorData2);

  let colorData3 = hexToRgba(myVarVal || "#6259ca", 0.6);
  document.querySelector("html").style.setProperty("--primary06", colorData3);

  let colorData4 = hexToRgba(myVarVal || "#6259ca", 0.9);
  document.querySelector("html").style.setProperty("--primary09", colorData4);
}
name();

export function localStorageBackUp() {
  let html = document.querySelector("html")?.style;
  let body = document.querySelector("body");
  if (localStorage.getItem("zanexprimaryColor") !== null) {
    body?.classList.add("light-mode");

    document.getElementById("myonoffswitch6").checked = true;

    body?.classList.remove("dark-mode");
    body?.classList.remove("transparent-mode");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("zanexprimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("zanexprimaryHoverColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("zanexprimaryBorderColor")
    );
  }
  if (localStorage.getItem("zanexdarkPrimaryColor") !== null) {
    body?.classList.add("dark-mode");

    document.getElementById("myonoffswitch7").checked = true;

    body?.classList.remove("light-mode");
    body?.classList.remove("transparent-mode");

    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("zanexdarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("zanexdarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("zanexdarkPrimaryColor")
    );
  }
  if (localStorage.getItem("zanextransparentPrimaryColor") !== null) {
    body?.classList.add("transparent-mode");
    document.getElementById("myonoffswitchTransparent");

    body?.classList.remove("light-mode");
    body?.classList.remove("dark-mode");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("zanextransparentPrimaryColor")
    );
  }
  if (localStorage.getItem("zanextransparentBgColor") !== null) {
    body?.classList.add("transparent-mode");
    document.getElementById("myonoffswitchTransparent");

    body?.classList.remove("light-mode");
    body?.classList.remove("dark-mode");
    html?.setProperty(
      "--transparent-body",
      localStorage.getItem("zanextransparentBgColor")
    );
  }
  if (
    localStorage.getItem("zanextransparent-bgImgPrimaryColor") !== null ||
    localStorage.getItem("zanexBgImage") !== null
  ) {
    body?.classList.add("transparent-mode");
    document.getElementById("myonoffswitchTransparent");

    body?.classList.remove("light-mode");
    body?.classList.remove("dark-mode");
    let img = localStorage.getItem("zanexBgImage");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("zanextransparent-bgImgPrimaryColor")
    );
    body?.classList.add(img);
  }
  if (localStorage.zanexrtl) {
    document.querySelector("body").classList.add("rtl");
    document.querySelector(".app").classList.add("ltr");
    document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
    // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css")
    document.querySelector(".app").classList.remove("rtl");
  }
}

export const Swichermainright = () => {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
  };
export const Swichermainrightremove = () => {
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
  };



