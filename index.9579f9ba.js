var e=document.querySelectorAll(".population"),t=[];e.forEach(function(e){var o=Number(e.textContent.replace(/\D/g,""));t.push(o)});var o=t.reduce(function(e,t){return e+t}),n=document.querySelector(".total-population"),r=document.querySelector(".average-population");n.textContent=o.toLocaleString("en-US"),r.textContent=(o/t.length).toLocaleString("en-US");
//# sourceMappingURL=index.9579f9ba.js.map