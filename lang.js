function setLanguage(lang) {

if(lang === 'en'){

document.getElementById("title") && (title.innerText="Self Help Group Products & Services");
document.getElementById("subtitle") && (subtitle.innerText="Budaun District Livelihood Catalogue");
document.getElementById("heroTitle") && (heroTitle.innerText="Empowering Rural Women Through Enterprise");
document.getElementById("heroText") && (heroText.innerText="Discover locally made products and services.");

document.getElementById("prodTitle") && (prodTitle.innerText="SHG Products");
document.getElementById("prod1") && (prod1.innerText="Handmade Candles");
document.getElementById("prod1desc") && (prod1desc.innerText="Contact SHG directly for orders.");
document.getElementById("prod2") && (prod2.innerText="Homemade Pickles");
document.getElementById("prod2desc") && (prod2desc.innerText="Traditional preparation.");

document.getElementById("servTitle") && (servTitle.innerText="SHG Services");
document.getElementById("serv1") && (serv1.innerText="Drone Didi Services");
document.getElementById("serv1desc") && (serv1desc.innerText="Agriculture spraying support.");
document.getElementById("serv2") && (serv2.innerText="Tailoring Services");
document.getElementById("serv2desc") && (serv2desc.innerText="Clothes stitching & repair.");

document.getElementById("aboutTitle") && (aboutTitle.innerText="About This Initiative");
document.getElementById("aboutText") && (aboutText.innerText="This catalogue showcases SHG products and services from Budaun.");

document.getElementById("contactTitle") && (contactTitle.innerText="Contact Information");
}

else{

document.getElementById("title") && (title.innerText="स्वयं सहायता समूह उत्पाद और सेवाएँ");
document.getElementById("subtitle") && (subtitle.innerText="बदायूं जिला आजीविका कैटलॉग");
document.getElementById("heroTitle") && (heroTitle.innerText="ग्रामीण महिलाओं को उद्यम के माध्यम से सशक्त बनाना");
document.getElementById("heroText") && (heroText.innerText="बदायूं के स्वयं सहायता समूहों द्वारा निर्मित उत्पाद और सेवाएँ देखें।");
}
}

document.addEventListener("DOMContentLoaded",function(){setLanguage('hi');});
